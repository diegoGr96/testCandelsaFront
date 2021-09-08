import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { styledHeartOwner } from "../../assets/iconsstyles/iconsStyles";
import { styledHeartNoLike } from "../../assets/iconsstyles/iconsStyles";
import { styledHeartLike } from "../../assets/iconsstyles/iconsStyles";
import { PostProps } from "../../interfaces/interfaces";

interface PostListItemProps {
    post: PostProps
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
    const { id, author, title, body, likes } = post;

    return (

        <div className="postList__postItem card mb-3 col-md-5 animate__animated animate__bounceInUp">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <h5 className="card-title">
                    Author: {author}
                </h5>
                <hr />
                <p className="card-text">
                    {body.length > 100 ? body.substring(0, 100) + ' ...' :  body}
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