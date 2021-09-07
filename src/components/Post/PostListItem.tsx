import React from "react";
import { Link } from "react-router-dom";
import { PostProps } from './PostList';
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons"

interface PostListItemProps {
    post: PostProps
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
    const { id, user_id, title, body, likes } = post;
    const styledHeartLike = {
        fontSize: '30px',
        color: "rgb(255, 0, 50)"
    };

    const styledHeartNoLike = {
        fontSize: '30px',
        color: "rgb(0, 0, 0)"
    };

    return (

        <div className="postList__postItem card mb-3 col-md-5 animate__animated animate__bounceInUp">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <p className="card-text">
                    {body.substring(0, 100) + (body.length > 100 && ' ...')}
                </p>
                <div className="row px-3 justify-content-between">
                    <Link to={`/post/${id}`} className="btn btn-primary">
                        See full post
                    </Link>

                    <IconContext.Provider
                        value={{ style: styledHeartNoLike }}>
                        <div className="mr-2">
                            <FaHeart className="mr-1" /> 
                            {likes}
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default PostListItem;