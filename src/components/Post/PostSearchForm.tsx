import { useEffect, useState } from 'react';
import { createFetch } from '../../helpers/createFetch';
import { apiURL } from '../../env/env';
import { PostProps } from './PostList';

interface SetPostSearchFormProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setPostList: React.Dispatch<React.SetStateAction<PostProps[]>>
}

const PostSearchForm: React.FC<SetPostSearchFormProps> = ({ setLoading, setPostList }) => {
    const [input, setInput] = useState('');
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const finalInput = input.trim();

        setLoading(true);

        let resultFetch;
        if (finalInput === ''){
            resultFetch = createFetch(apiURL + 'posts', 'GET', false);
        }else{
            resultFetch = createFetch(apiURL + 'posts', 'GET', false, { 'content': finalInput});
        }
        resultFetch
            .then(response => response.json())
            .then(({ data }) => {
                setLoading(false);
                setPostList(data);
            });
    }

    // useEffect(() => {
    //     const resultFetch = createFetch(apiURL + 'posts', 'GET', false);
    //     resultFetch
    //         .then(response => response.json())
    //         .then(({ data }) => {
    //             setPostList(data);
    //         });
    // }, []);


    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                className="form-control mb-4"
                placeholder="Search Posts..." />
        </form>
    );
}

export default PostSearchForm;