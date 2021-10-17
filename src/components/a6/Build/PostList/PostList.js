import React from "react"
import posts from "./posts.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
            <ul className="list-group">
                {
                    posts.map(post => {
                        return (
                            <PostItem post={post}/>
                        );
                    })
                }
            </ul>
); }
export default PostList;