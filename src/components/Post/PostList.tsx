import { useEffect, useState } from 'react';
import { createFetch } from '../../helpers/createFetch';
import { apiURL } from '../../env/env';
import PostListItem from './PostListItem';
import PostSearchForm from './PostSearchForm';
import { PostProps } from '../../interfaces/interfaces';


interface PostListProps {}

const PostList: React.FC<PostListProps> = () => {

    const [loading, setLoading] = useState(true);
    const [postList, setPostList] = useState<PostProps[]>([]);

    useEffect(() => {
        const resultFetch = createFetch(apiURL + 'posts', 'GET', false);
        resultFetch
            .then(response => response.json())
            .then(({ data }) => {
                setLoading(false);
                setPostList(data);
            });
    }, []);


    return (
        <>
            <PostSearchForm setLoading={setLoading} setPostList={setPostList} />

            {loading &&
                <div className="mt-5 alert alert-info" role="alert">
                    Loading...
                </div>
            }
            <div className="postList row justify-content-between">
                {postList.map((post: PostProps) => <PostListItem key={post.id} post={post} />)}
            </div>
        </>
    );
}

export default PostList;