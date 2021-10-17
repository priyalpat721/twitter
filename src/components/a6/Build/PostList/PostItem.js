import React from "react";

const PostItem = (
    {
        post
    }) => {

    return (
        <div>
            <div className="row mt-2 mb-2">
                <div className="me-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 me-3 col-sm-1">
                    <div>
                        <img src={post.avatarIcon} className="rounded-circle wd-avatar1" width={"50px"} height={"50px"}/>
                    </div>
                </div>
                <div className="me-1 col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-8">
                    <div className="row">
                        <div className="text-white"> {post.userName}
                            <i className="fas fa-check-circle fa-xs"/>
                            <span className="text-dark"> {post.handle} · {post.time}</span>
                        </div>
                        <div className="text-white">{post.pre} {post.mid} {post.post}</div>
                    </div>
                </div>
                <div className="ms-4 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"><i className="fas fa-ellipsis-h"/></div>
            </div>
            <div className="row">
                <div className="col-xxl-1"/>
                <div className="col-xxl-11 text-decoration-none">
                    <figure className="wd-picture">
                        <img className="wd-img-post w-100" src={post.image} style={{"border": "1px solid rgb(110, 118, 125)", "border-radius": "25px 25px 0px 0px"}}/>
                            <div className="wd-title text-white" style={{"border": "1px solid rgb(110, 118, 125)", "border-top": "none"}}>
                                <div className="wd-caption" style={{"padding-left": "15px"}}>{post.caption}</div>
                                <div className="wd-caption text-dark text-decoration-none" style={{"padding-left": "15px"}}>{post.tweets}</div>
                                <div style={{"padding-left": "15px"}}>{post.link}</div>
                                <div>
                                </div>
                            </div>
                    </figure>
                </div>
            </div>
            <div className="row border-bottom border-dark">
                <div className="col-xxl-1"/>
                <div className="col-xxl-11">
                    <div className="row mb-2">
                        <div className="col-3"><a href="#" className="text-decoration-none text-dark"><i className="far fa-comment d-inline pe-5"><span
                            className="wd-num">{post.comments}</span></i></a></div>
                        <div className="col-3"><a href="#" className="text-decoration-none text-dark"><i className="fas fa-retweet d-inline pe-5"><span
                            className="wd-num">{post.retweets}</span></i></a></div>
                        <div className="col-3"><a href="#" className="text-decoration-none text-dark"><i className="fas fa-heart d-inline pe-5"><span
                            className="wd-num">{post.heart}</span></i></a></div>
                        <div className="col-3"><a href="#" className="text-decoration-none text-dark"><i className="fas fa-upload d-inline pe-5"><span
                            className="wd-num">  </span></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostItem;