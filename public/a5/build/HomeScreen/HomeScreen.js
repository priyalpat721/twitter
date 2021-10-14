import NavigationSidebar from "../ExploreScreen/NavigationSideBar/NavigationSidebar.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../ExploreScreen/PostSummaryList/PostSummaryLis.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 mt-2 border-1 border-dark">
            ${HomeComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);
