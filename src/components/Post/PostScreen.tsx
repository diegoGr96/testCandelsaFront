
import React, { useEffect } from "react";
import { PostProps } from './PostList';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createFetch } from "../../helpers/createFetch";
import { apiURL } from "../../env/env";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons"

interface PostScreenProps {
    postId: string
}

interface IPostFetch {
    loading: boolean,
    post: PostProps | null
}

const PostScreen: React.FC<PostScreenProps> = () => {
    const history = useHistory();


    const { postId } = useParams<PostScreenProps>();

    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<PostProps | undefined>();

    const styledHeartLike = {
        fontSize: '30px',
        color: "rgb(255, 0, 50)"
    };

    const styledHeartNoLike = {
        fontSize: '30px',
        color: "rgb(0, 0, 0)"
    };

    useEffect(() => {
        setLoading(true);

        const resultFetch = createFetch(apiURL + `posts/${postId}`, 'GET', false);
        resultFetch
            .then(response => {
                if (!response.ok){
                    history.goBack();
                }
                return response.json()
            })
            .then((data) => {
                console.log(data);

                setLoading(false);
                setPost(data);
                console.log(post);
            });
    }, []);


    return (
        <>
            {loading &&
                <div className="mt-5 alert alert-info" role="alert">
                    Loading...
                </div>
            }
            <div className="postList__postItem card mb-3 col-md-12 animate__animated animate__bounceInUp">
                <h5 className="card-header">{post?.title}</h5>
                <div className="card-body">
                    <p className="card-text">
                        {post?.body}
                    </p>
                    <div className="row px-3">
                        <IconContext.Provider
                            value={{ style: styledHeartNoLike }}>
                            <div className="mr-2">
                                <FaHeart className="mr-1" />
                                {post?.likes}
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostScreen;