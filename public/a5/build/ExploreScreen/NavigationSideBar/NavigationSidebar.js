const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>

                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Home</label>
                        </div>
                    </div>
                </a>

                <a class="list-group-item active" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-hashtag"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Explore</label>
                        </div>
                    </div>
                </a>

                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Notifications</label>
                        </div>
                    </div>
                </a>

                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Messages</label>
                        </div>
                    </div>
                </a>

                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Bookmarks</label>
                        </div>
                    </div>
                </a>

                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-list"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Lists</label>
                        </div>
                    </div>
                </a>

                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>Profile</label>
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <span class="iconify" data-icon="gridicons:ellipsis-circle"></span>
                        </div>
                        <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                            <label>More</label>
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            `);
}
export default NavigationSidebar;