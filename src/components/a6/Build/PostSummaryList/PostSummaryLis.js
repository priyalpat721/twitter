import PostSummaryItem from "./PostSummaryItem";
import post from "./posts.json"

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