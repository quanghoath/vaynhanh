import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Page from "react-page-loading";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template SCSS Style
import "./assets/scss/style.scss";
import "./assets/scss/responsive.scss";

//Component Import
import HomeOne from "./pages/HomeOne";
// import ContactUS from "./pages/ContactUs";
import Login from './pages/Login';
import Footer from './components/versionOne/Footer'
import ScrollUpBtn from "./components/common/ScrollUpBtn";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
const App = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    });
    
    return (
        <div className="App">
            <div>
                <Footer  />
                {/* <Switch>
                    <Route exact path="/">
                        <HomeOne />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch> */}
               
                {/* <Page loader={"bar"} color={"#506CEA"} size={9}> */}
                    <Route
                        render={({ location }) => (
                            <TransitionGroup className="transition-group">
                                <CSSTransition
                                    key={location.key}
                                    timeout={{ enter: 900, exit: 900 }}
                                    classNames="fade"
                                >
                                    <section className="route-section">
                                        <Switch location={location}>
                                        <Route exact path="/">
                                            <HomeOne />
                                        </Route>
                                        <Route  path="/home">
                                            <HomeOne />
                                        </Route>
                                        <Route  path="/login">
                                            <Login />
                                        </Route>
                                        </Switch>
                                    </section>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                    <ScrollUpBtn />
                {/* </Page> */}
            </div>
        </div>
    );
}

export default App;
