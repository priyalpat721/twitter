import {Link} from "react-router-dom";
import React from "react";
import Movies from "./Movies";
const Practice = () => {
    return(
        <div>
            <h1>Assignment 9</h1>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            <Movies/>
        </div>
    )
};
export default Practice;