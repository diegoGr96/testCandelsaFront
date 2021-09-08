/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { createFetch } from "../../helpers/createFetch";
import { apiURL } from "../../env/env";
import jwt_decode from "jwt-decode";
import { IToken, PostProps } from "../../interfaces/interfaces";
import Like from "./Like";

interface PostScreenProps {
    postId: string
}

const PostScreen: React.FC<PostScreenProps> = () => {
    const history = useHistory();
    const { postId } = useParams<PostScreenProps>();

    const [loading, setLoading] = useState<boolean>(false);
    const [postDeleted, setpostDeleted] = useState<boolean>(false);
    const [post, setPost] = useState<PostProps | null>(null);
    const [userIdToken, setUserIdToken] = useState<number | null>(null);


    useEffect(() => {
        setLoading(true);

        if (localStorage.getItem('token') !== null) {
            const token: IToken = jwt_decode(localStorage.token);
            setUserIdToken(token.sub);
        }

        const resultFetch = createFetch(apiURL + `posts/${postId}`, 'GET', false);
        resultFetch
            .then(response => {
                if (!response.ok) {
                    history.goBack();
                }
                return response.json()
            })
            .then((data) => {
                setPost(data);
                setLoading(false);
            });
    }, []);

    const deleteHandler = (): void => {
        setLoading(true);
        const resultFetchDelete = createFetch(apiURL + `posts/${postId}`, 'DELETE', true);
        resultFetchDelete
            .then(response => {
                setLoading(false);
                if (response.ok) {
                    setpostDeleted(true);
                    setTimeout(() => {
                        history.replace('/');
                    }, 1250);
                }
            });
    }


    return (
        <>
            {loading
                ?
                    <div className="mt-5 alert alert-info" role="alert">
                        Loading...
                    </div>
                :
                    <div className="postList__postItem card mb-3 col-md-12 animate__animated animate__bounceInUp">
                        <h5 className="card-header">{post?.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">
                                Author: {post?.author}
                            </h5>
                            <hr />
                            <p className="card-text">
                                {post?.body}
                            </p>
                            <div className="row px-3">
                                <Like postId={post?.id} likes={post?.likes} />
                            </div>
                            {userIdToken === post?.user_id &&
                                <div className="post__controllers mt-3">
                                    <Link
                                        to={`/post/${post.id}/edit`}
                                        className="btn btn-primary col-md-1 mr-5">
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger col-md-1"
                                        onClick={deleteHandler}
                                    >
                                        Delete
                                    </button>
                                </div>
                            }
                            {postDeleted &&
                                <div className="mt-5 alert alert-warning" role="alert">
                                    Post successfully deleted.
                                </div>
                            }
                        </div>
                    </div>
            }

        </>
    );
}

export default PostScreen;