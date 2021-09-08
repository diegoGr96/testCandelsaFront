import { useEffect, useState } from 'react';
import { createFetch } from '../../helpers/createFetch';
import { apiURL } from '../../env/env';
import PostListItem from './PostListItem';
import PostSearchForm from './PostSearchForm';
import { IToken, PostProps } from '../../interfaces/interfaces';
import jwt_decode from 'jwt-decode';


interface PostListProps { }

const MyPostsScreen: React.FC<PostListProps> = () => {

    const [loading, setLoading] = useState(true);
    const [postList, setPostList] = useState<PostProps[]>([]);

    useEffect(() => {

        const token: IToken = jwt_decode(localStorage.token);

        const resultFetch = createFetch(apiURL + `user/${token.sub}/posts`, 'GET', false);
        resultFetch
            .then(response => response.json())
            .then(({ data }) => {
                setLoading(false);
                setPostList(data);
            });
    }, []);


    return (
        <>
            <h1 className="mb-5">My posts</h1>

            {loading &&
                <div className="mt-5 alert alert-info" role="alert">
                    Loading...
                </div>
            }
            <div className="postList row justify-content-between">
                {postList.length > 0 &&
                    postList.map((post: PostProps) => <PostListItem key={post.id} post={post} />)
                }

                {postList.length === 0 && !loading && <h2 className="mt-5">You have no posts.</h2>}
            </div>
        </>
    );
}

export default MyPostsScreen;