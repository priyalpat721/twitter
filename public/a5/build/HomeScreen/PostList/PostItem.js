const PostItem = (post) => {

    return `<div class="row mt-2 mb-2">
            <div class="me-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 me-3 col-sm-1">
                <div>
                    <img src="${post.avatarIcon}" class="rounded-circle wd-avatar1">
                </div>
            </div>
            <div class="me-1 col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-8">
                <div class="row">
                    <div class="text-white">${post.userName}
                    <i class="fas fa-check-circle fa-xs"></i>  
                    <span class="text-dark">${post.handle} · ${post.time}</span>
                    </div>   
                    <div class="text-white">${post.title}</div>
                </div>
            </div>
            <div class="ms-4 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"><i class="fas fa-ellipsis-h"></i></div>
         </div>
         <div class="row">
         <div class="col-xxl-1"></div>
         <div class="col-xxl-11 text-decoration-none">
         <figure class="wd-picture">
            <img class="wd-img-post w-100" src="${post.image}">
            <div class="wd-title border-start border-end border-bottom rounded-bottom border-dark text-white">
                <div class="wd-caption">${post.caption}</div>
                <div class="wd-caption text-dark text-decoration-none">${post.tweets}</div>
                <div> 
                </div>
            </div>
        </figure>
        </div>
    </div>
            <div class="row border-bottom border-dark">
            <div class="col-xxl-1"></div>
             <div class="col-xxl-11">
                <div class="wd-icons mb-2">
                    <span class="row"><a href="#" class="text-decoration-none text-dark"><i class="far fa-comment d-inline pe-5"><span
                        class="wd-num">${post.comments}</span></i></a></span>
                    <span class="row"><a href="#" class="text-decoration-none text-dark"><i class="fas fa-retweet d-inline pe-5"><span
                        class="wd-num">${post.retweets}</span></i></a></span>
                    <span class="row"><a href="#" class="text-decoration-none text-dark"><i class="fas fa-heart d-inline pe-5"><span
                        class="wd-num">${post.heart}</span></i></a></span>
                    <span class="row"><a href="#" class="text-decoration-none text-dark"><i class="fas fa-upload d-inline pe-5"><span
                        class="wd-num">  </span></i></a></span>
                </div>
            </div>
        </div>`;
}
export default PostItem;