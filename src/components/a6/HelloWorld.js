import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>
        </>
    )
};

export default HelloWorld;

// <BrowserRouter>
//     <div className="container">
//         <Route path="/a6/hello" exact={true}>
//             <HelloWorld/>
//         </Route>
//         <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
//             <Practice/>
//         </Route>
//         <Route path="/a6/build" exact={true}>
//             <Build/>
//         </Route>
//     </div>
// </BrowserRouter>

// import {BrowserRouter, Route} from "react-router-dom";
// function App() {
//     return (
//         <BrowserRouter>
//             <div className="container">
//                 <Route path="/a6/hello">
//                     <HelloWorld/>
//                 </Route>
//                 <Route path="/a6/practice">
//                     <Practice/>
//                 </Route>
//                 <Route path="/a6/build">
//                     <Build/>
//                 </Route>
//             </div>
//         </BrowserRouter>
//     );
// }

// import {BrowserRouter} from "react-router-dom";
// function App() {
//     return (
//         <BrowserRouter>
//             <div className="container">
//                 <HelloWorld/>
//                 <Practice/>
//                 <Build/>
//             </div>
//         </BrowserRouter>
//     );
// }

// import HelloWorld from "./components/a6/HelloWorld";
// import Practice from "./components/a6/Practice";
// import Build from "./components/a6/Build";
// function App() {
//     return (
//         <div className="container">
//             <HelloWorld/>
//             <Practice/>
//             <Build/>
//         </div>
//     );
// }

// import React from "react";
//
// const HelloWorld = () => {
//     return(
//         <h1>Hello World!</h1>
//     )
// };
//
// export default HelloWorld;

