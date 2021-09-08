import React from "react";
import PostList from "./Post/PostList";

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {


    return (
        <div>
            <h1 className="mb-4">Candelsa Blog</h1>

            <PostList />
        </div>
    );
};

export { Home };
