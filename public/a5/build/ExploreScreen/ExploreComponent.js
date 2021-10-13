import PostSummaryList from "./PostSummaryList/PostSummaryLis.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-1">
                 <div class="col-11">
                        <label style="padding-left: 10px"><i class="fas fa-search"></i></label>
                        <input type ="text"
                               class="form-control rounded-pill"
                               placeholder="Search Twitter"
                               style="margin-top: -30px; padding-left: 40px"/>
                    </div>
                    <div class="col-1">
                        <a  class="wd-configuration"
                            href="explore-settings.html">
                            <i class="fas fa-cog fa-2x"></i>
                        </a>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                 <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="card overflow-hidden mt-2 rounded-0">
                <img class="card-img-top rounded-0"
                     src="../../images/starship.jpg"
                     style="width: 650px; height: 400px"/>
                <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h3 class="card-title text-white font-weight-bold">SpaceX's Starship</h3>
                </div>
           </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
