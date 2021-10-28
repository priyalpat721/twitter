import React from "react";
import {Link} from "react-router-dom";

import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a7/twitter/home">
                Build
            </Link> |
            <Link to="/a7/hello">
                Hello
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};
export default Practice;
