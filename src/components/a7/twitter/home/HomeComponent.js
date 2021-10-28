import React from "react"
import PostList from "../../Build/PostList/PostList";
import posts from "../../Build/PostList/posts.json";

const HomeComponent = () => {
    return(
            <div>
                <PostList posts={posts}/>
            </div>
    );
}
export default HomeComponent;
