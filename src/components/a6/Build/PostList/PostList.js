import React from "react"
import posts from "./posts.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
            <ul className="list-group">
                {
                    posts.map((post, key) => {
                        return (
                            <PostItem post={post} key={key}/>
                        );
                    })
                }
            </ul>
); }
export default PostList;