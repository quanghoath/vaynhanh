import React, { useEffect, useState } from "react";
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
import User from './pages/User'
import Footer from './components/versionOne/Footer';
import HopDongVay from './pages/HopDongVay'
import UserInfo from "./pages/UserInfo";
import XacMinhDanhTinh from "./pages/XacMinhDanhTinh"
import XacNhanVay from "./pages/XacNhanVay";
import TheNganHang from "./pages/TheNganHang"

import ScrollUpBtn from "./components/common/ScrollUpBtn";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, Redirect } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Login from "./pages/Login"

const App = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    });
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
            setIsLogin(true);
        }
    }, [])
    const onSubmitLogin = ()=>{
        setIsLogin(true);
    }
    const onLogout = ()=>{
        setIsLogin(false);
    }
    return (
        <div className="App login_bg">
            <div>
                <div><Toaster /></div>
                
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
                        <TransitionGroup className="transition-group ">
                            <CSSTransition
                                key={location.key}
                                timeout={{ enter: 900, exit: 900 }}
                                classNames="fade"
                            >
                                <section className="route-section ">
                                    <Switch location={location}>
                                        <Route exact path="/">
                                            {isLogin ? <HomeOne /> : <Redirect to="/login" />}
                                         
                                        </Route>
                                        <Route path="/home">
                                            <HomeOne />
                                        </Route>
                                        <Route path="/xacnhanvay">
                                            <XacNhanVay />
                                        </Route>
                                        <Route path="/login">
                                            {isLogin ? <Redirect to="/user" /> : <Login onSubmitLogin={() => onSubmitLogin()} />}
                                           
                                        </Route>
                                        <Route path="/user">
                                            {isLogin ? <User onSubmitLogin={() => onLogout()} /> :
                                                <Redirect to="/login" />
                                            }
                                           
                                        </Route>
                                        <Route path="/thenganhang">
                                            <TheNganHang />
                                        </Route>
                                        <Route path="/hopdongvay">
                                            <HopDongVay />
                                        </Route>
                                        <Route path="/userinfo">
                                            <UserInfo />
                                        </Route>
                                        <Route path="/xacminh">
                                            <XacMinhDanhTinh />
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
