
import React, { useEffect } from "react";
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createFetch } from "../../helpers/createFetch";
import { apiURL } from "../../env/env";
import jwt_decode from "jwt-decode";
import { IToken } from "../../interfaces/interfaces";

interface PostScreenProps {
    postId: string
}

const PostEditScreen: React.FC<PostScreenProps> = () => {
    const history = useHistory();
    const { postId } = useParams<PostScreenProps>();

    const [loading, setLoading] = useState<boolean>(false);
    const [postUpdated, setPostUpdated] = useState<boolean>(false);

    const [titleInputValue, setTitleInputValue] = useState<string>('');
    const [bodyInputValue, setBodyInputValue] = useState<string>('');


    useEffect(() => {
        if (localStorage.getItem('token') === null) history.replace('/');

        const token: IToken = jwt_decode(localStorage.token);
        if (token.sub !== parseInt(postId)) history.replace('/');
        
        setLoading(true);

        const resultFetch = createFetch(apiURL + `posts/${postId}`, 'GET', false);
        resultFetch
            .then(response => {
                if (!response.ok) {
                    history.goBack();
                }
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setLoading(false);
                setTitleInputValue(data.title);
                setBodyInputValue(data.body);
            });
    }, []);

    const handleSubmit = (e: { preventDefault: () => void; }): boolean => {
        e.preventDefault();

        if (titleInputValue.trim().length === 0 || bodyInputValue.trim().length === 0)
            return false;
            
        setLoading(true);

        const params = {
            title: titleInputValue,
            body: bodyInputValue
        };

        const resultFetchUpdate = createFetch(apiURL + `posts/${postId}`, 'PUT', true, params);
        resultFetchUpdate
            .then(response => {
                setLoading(false);
                if (response.ok) {
                    setPostUpdated(true);
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
            {loading &&
                <div className="mt-5 alert alert-info" role="alert">
                    Loading...
                </div>
            }
            <form 
                className="animate__animated animate__bounceInUp"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name@example.com"
                        value={titleInputValue}
                        onChange={(e) => setTitleInputValue(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1" 
                        rows={3}
                        value={bodyInputValue}
                        onChange={(e) => setBodyInputValue(e.target.value)}>
                        </textarea>
                </div>
                <button type="submit" className="btn btn-primary mr-5 mb-3 col-md-2">Save Changes</button>
                <button 
                    className="btn btn-secondary mb-3 col-md-2"
                    onClick={handleBackButton}
                    >
                        Go back
                </button>
            </form>
            {postUpdated &&
                <div className="mt-5 alert alert-warning" role="alert">
                    Post successfully updated.
                </div>
            }
        </>
    );
}

export default PostEditScreen;