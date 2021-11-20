import React from "react";

import whoReducer from "../../../reducers/whoReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(whoReducer);

const Build = () => {
    return(
        <Provider store={store}/>
    );
};
export default Build;