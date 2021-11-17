import React from "react"
import PostItem from "./PostItem";

const PostList = ({posts}) => {
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