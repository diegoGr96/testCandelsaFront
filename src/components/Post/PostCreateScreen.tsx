/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createFetch } from "../../helpers/createFetch";
import { apiURL } from "../../env/env";
import jwt_decode from "jwt-decode";
import { IToken } from "../../interfaces/interfaces";

interface PostCreateScreenProps {
    postId: string
}

const PostCreateScreen: React.FC<PostCreateScreenProps> = () => {
    const history = useHistory();

    const [postCreated, setPostCreated] = useState<boolean>(false);
    const [titleInputValue, setTitleInputValue] = useState<string>('');
    const [bodyInputValue, setBodyInputValue] = useState<string>('');
    const [userIdToken, setUserIdToken] = useState<number | null>(null);


    useEffect(() => {
        if (localStorage.getItem('token') === null) history.replace('/');

        const token: IToken = jwt_decode(localStorage.token);
        setUserIdToken(token.sub);
    }, []);

    const handleSubmit = (e: { preventDefault: () => void; }): boolean => {
        e.preventDefault();

        if (titleInputValue.trim().length === 0 || bodyInputValue.trim().length === 0)
            return false;

        const params = {
            userId: userIdToken,
            title: titleInputValue,
            body: bodyInputValue
        };

        const resultFetchCreate = createFetch(apiURL + `posts`, 'POST', true, params);
        resultFetchCreate
            .then(response => {
                if (response.ok) {
                    setPostCreated(true);
                    setTimeout(() => {
                        history.replace('/');
                    }, 1250);
                }
            });

        return true;
    }

    const handleBackButton = () => history.replace('/');


    return (
        <>
            <h1 className="mb-5">New Post</h1>
            <form
                className="animate__animated animate__bounceInUp"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="My post"
                        value={titleInputValue}
                        onChange={(e) => setTitleInputValue(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={10}
                        value={bodyInputValue}
                        onChange={(e) => setBodyInputValue(e.target.value)}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary mr-5 mb-3 col-md-2">Save Changes</button>
                <button
                    className="btn btn-secondary mb-3 col-md-2"
                    onClick={handleBackButton}>
                    Go back
                </button>
            </form>

            {postCreated &&
                <div className="mt-5 alert alert-warning" role="alert">
                    Post successfully created.
                </div>
            }
        </>
    );
}

export default PostCreateScreen;