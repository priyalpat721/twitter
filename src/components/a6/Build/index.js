import React from "react";
import {Link} from "react-router-dom";

const Index = () => {
    return(
        <>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/twitter/home">
                Home
            </Link>
            <Link to="/a6/twitter/explore">
                Explore
            </Link>
        </>
    )
};

export default Index;

