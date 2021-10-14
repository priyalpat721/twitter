const PostSummaryItem = (post) => {

    return `<li class="list-group-item">
            <div class="row">
                     <div class="col-9 col-lg-8 col-md-7 col-sm-6">
                         <label class="text-dark">${post.topic}</label>
                         </br>
                         <div class="text-dark">
                             <label class="text-white">${post.userName}</label>
                             <i class="fas fa-check-circle fa-xs text-white"></i> - ${post.time}</br>${post.title}</div>
                     </div>
                     <div class="col-3 col-lg-4 col-md-5 col-sm-6 d-flex justify-content-end">
                     <img src="${post.image}" class="rounded wd-thumbnails">
                    </div>
              </div>
         </li>`;
}
export default PostSummaryItem;