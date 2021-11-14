import React from "react";

const PostSummaryItem = (
    {
        post
    }) => {

    return (<div>
            <li className="list-group-item">
                <div className="row">
                         <div className="col-9 col-lg-8 col-md-7 col-sm-6">
                             <label className="text-dark">{post.topic}</label>
                             <br></br>
                             <div className="text-dark">
                                 <label className="text-white">{post.userName}</label>
                                 <i className="fas fa-check-circle fa-xs text-white"/> - {post.time}<br></br>{post.title}</div>
                         </div>
                         <div className="col-3 col-lg-4 col-md-5 col-sm-6 d-flex justify-content-end">
                         <img src={post.image} className="rounded wd-thumbnails" width={"100px"} height={"100px"} alt={""}/>
                        </div>
                  </div>
             </li>
    </div>
    );
}
export default PostSummaryItem;