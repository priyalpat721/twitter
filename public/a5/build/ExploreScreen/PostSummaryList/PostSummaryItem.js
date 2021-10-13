const PostSummaryItem = (post) => {
    let topic = post.topic;
    let username = post.userName;
    let timestamp = post.time;
    let title = post.title;
    let picture = post.image;
    let image = '<img src="';
    image += picture + '"class="rounded-3" style="height:100px" />';

    let htmlString =`<li class="list-group-item">
            <div class="row">
                     <div class="col-9 col-lg-8 col-md-7 col-sm-6">
                         <label">` + topic + `</label>
                         </br>
                         <div>
                             <label>` + username + `</label>
                             <i class="fas fa-check-circle fa-xs"></i>` + ' - ' + timestamp + `</br>`
                             + title + `</div>
                     </div>
                     <div class="col-3 col-lg-4 col-md-5 col-sm-6 d-flex justify-content-end">` +
                        image +
                    `</div>
              </div>
         </li>`
    return htmlString;
}
export default PostSummaryItem;