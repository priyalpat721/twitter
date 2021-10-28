import PostSummaryList from "../../Build/PostSummaryList/PostSummaryLis";

const ExploreComponent = ({posts}) => {
    return(
        <div>
            <div className={"row mb-1"}>
                 <div className={"col-11 mt-2 mb-1"}>
                        <div><label><i className={"fas fa-search"} style={{"padding-left": "10px"}} /></label></div>
                        <div><input type ="text"
                               className={"form-control rounded-pill"} style={{"margin-top": "-30px", "padding-left": "30px"}}
                                    placeholder="Search Twitter"/></div>
                    </div>
                    <div className={"col-1"}>
                        <a  className={"wd-configuration"}
                            href="explore-settings.html">
                            <i className={"fas fa-cog fa-2x pt-1"}/>
                        </a>
                    </div>
           </div>
           <ul className={"nav mb-2 nav-tabs"}>
                 <li className={"nav-item"}>
                    <a className={"nav-link active"} href="for-you.html">For you</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"} href="trending.html">Trending</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"} href="news.html">News</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"} href="sports.html">Sports</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link d-none d-md-block"} href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div className={"card overflow-hidden mt-2 rounded-0"}>
                <img className={"card-img-top rounded-0"} width={"650px"} height={"400px"} src={"../../images/starship.jpg"}/>
                <div className={"card-img-overlay h-100 d-flex flex-column justify-content-end"}>
                    <h3 className={"card-title text-white font-weight-bold"}>SpaceX's Starship</h3>
                </div>
           </div>
           <PostSummaryList posts={posts}/>
        </div>
    );
}
export default ExploreComponent;