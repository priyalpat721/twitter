import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import Index from "./components/a6/Practice";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a6"]} exact={true}>
                    <Index/>
                </Route>
                <Route path="/a6/twitter/home" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a6/twitter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>

            </div>
        </BrowserRouter>

    );

}
export default App;

// import HelloWorld from "./components/a6/HelloWorld";
//
// function App() {
//     return (
//         <div className="container">
//             <HelloWorld/>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div className="container">
//             <h1>Hello World!</h1>
//         </div>
//     );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
