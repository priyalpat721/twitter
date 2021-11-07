import PostSummaryItem from "./PostSummaryItem";
import post from "./posts.json"
import React from "react";

const PostSummaryList = () => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">What's Happening</li>
                {
                    post.map((p, key) => {
                        return (
                            <PostSummaryItem post={p} key={key}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default PostSummaryList;