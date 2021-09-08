/* eslint-disable react-hooks/exhaustive-deps */
import { IconContext } from "react-icons";
import { styledHeartLogout, styledHeartNoLike } from "../../assets/iconsstyles/iconsStyles";
import { FaHeart } from "react-icons/fa";
import { styledHeartLike } from "../../assets/iconsstyles/iconsStyles";
import { useEffect, useState } from 'react';
import { createFetch } from "../../helpers/createFetch";
import { apiURL } from "../../env/env";
import { IToken } from "../../interfaces/interfaces";
import jwt_decode from 'jwt-decode';

interface LikeProps {
    postId: number | undefined
    likes: number | undefined
}

interface ILikeResultFetchProps {
    id: number,
    user_id: number,
    post_id: number,
    name: string,
    created_at: string,
    updated_at: string
}

const Like: React.FC<LikeProps> = ({ postId, likes }) => {

    const [likeStatus, setLikeStatus] = useState<boolean>(false);
    const [userIdToken, setUserIdToken] = useState<number | null>(null);
    const [currentStyle, setCurrentStyle] = useState(styledHeartNoLike);
    const [canSendLike, setCanSendLike] = useState<boolean>(false);
    const [countLikes, setCountLikes] = useState(likes);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            const token: IToken = jwt_decode(localStorage.token);
            setUserIdToken(token.sub);
        }else{
            setCurrentStyle(styledHeartLogout);
        }

        if (userIdToken !== null) {
            const resultFetch = createFetch(apiURL + `posts/${postId}/likes`, 'GET', true);
            resultFetch
                .then(response => response.json())
                .then(({ data }) => {
                    const hasMyLike: ILikeResultFetchProps = data.find((like: ILikeResultFetchProps) => {
                        return like.user_id === userIdToken;
                    });

                    if (hasMyLike) setCurrentStyle(styledHeartLike);
                });

            setCanSendLike(true);
        }
    }, [userIdToken]);


    const handleClick = () => {
        if (canSendLike && userIdToken !== null){
            const params = {
                userId: userIdToken,
                postId
            }
            const resultFetch = createFetch(apiURL + `likes`, 'POST', true, params);
            resultFetch
                .then(response => response.json())
                .then(({ data }) => {
                    setCurrentStyle(data.like === 1 ? styledHeartLike : styledHeartNoLike );
                    setCountLikes(data.count);
                });
        }
    }

    return (
        <IconContext.Provider
            value={{ style: currentStyle }}>
            <div 
                className={`mr-2 ${canSendLike && 'clickable'}`}
                onClick={handleClick}>
                    <FaHeart className="mr-1" />
                    {countLikes}
            </div>
        </IconContext.Provider>
    );
}

export default Like;