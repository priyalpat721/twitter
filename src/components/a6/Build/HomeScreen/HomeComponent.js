import React from "react"
import PostList from "../PostList/PostList";
import posts from "../PostList/posts";

const HomeComponent = () => {
    return(
            <div>
                <PostList posts={posts}/>
            </div>
    );
}
export default HomeComponent;
