const WhoToFollowListItem = (who) => {
    return `<li class="list-group-item">
        <div class="row">
            <div class="col-2">
            <img src="${who.avatarIcon}" class="rounded-circle wd-thumbnails1"/></div>
            <div class="col-xxl-6 col-lg-6 text-nowrap ms-1">
                <label>${who.userName}</label>
                <i class="fas fa-check-circle fa-xs"></i>
            </br>
            <label>${who.handle}</label>
            </div>
            <div class="col-xxl-3 col-lg-3 ms-0">
                <button class="btn btn-primary override-bs1 align-content-between">Follow</button>
            </div>
        </div>
    </li>`;
}
export default WhoToFollowListItem;