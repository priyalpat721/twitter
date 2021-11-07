import post from "./posts.json"
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return (
        <div>
            <ul className="list-group">
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