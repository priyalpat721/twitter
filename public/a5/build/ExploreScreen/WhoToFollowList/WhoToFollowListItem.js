const WhoToFollowListItem = (who) => {
    let userName = who.userName;
    let handleName = who.handle;
    let avatar = who.avatarIcon;
    let image =  '<img src="';
    image += avatar + '"class="rounded-pill" + style="width: 40px; height: 40px"/>';
    console.log(image);
    let htmlString = `<li class="list-group-item">
        <div class="row">
            <div class="col-2 ">` +
                image +
            `</div>
            <div class="col-xxl-7 col-lg-6 text-nowrap">
                <label>` + userName + `</label>
                <i class="fas fa-check-circle fa-xs"></i>
            </br>
            <label>` + handleName + `</label>
            </div>
            <div class="col-xxl-3 col-lg-4 ms-0">
                <button class="btn btn-primary override-bs1 align-content-between">Follow</button>
            </div>
        </div>
    </li>`
    return htmlString;
}
export default WhoToFollowListItem;