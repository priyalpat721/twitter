import PostSummaryItem from "./PostSummaryItem";
import post from "./posts.json"
const PostSummaryList = () => {
    return (
        <div>
            <ul class="list-group">
                {
        post.map(p => {
            return(
                <PostSummaryItem post ={p}/>
        );
        })
    }
            </ul>
        </div>
); }
export default PostSummaryList;