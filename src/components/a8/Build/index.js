import React from "react";
import {Link} from "react-router-dom";

const Index = () => {
    return(
        <>
            <Link to="/a8/practice">
                Practice
            </Link> |
            <Link to="/a8/twitter/home">
                Home
            </Link>
            <Link to="/a8/twitter/explore">
                Explore
            </Link>
            <Link to="/a8/twitter/profile">
                Profile
            </Link>

        </>
    )
};

export default Index;

