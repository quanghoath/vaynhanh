import React, { useState, useEffect } from "react";
import Login from './Login'
import UserDetail from "./UserDetail";
const User = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user,setUser] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
            setIsLogin(true);
        }
    }, [])
    const onSubmitLogin = () => {
        setIsLogin(true);
    }
    const logout = ()=>{
        setIsLogin(false);
        localStorage.removeItem("user");
    }
    return (
        <React.Fragment>
            {/* Start About Area */}
            <header style={{
                backgroundColor: "#edf5ff",
                position: "fixed",
                top: "0px",
                width: "100%",
            }}
            className="pt-2 pb-2 text-center"
            >
                <p>Tài khoản</p>
            </header>
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/* {isLogin ? <span>Thông tin tài khoản</span> : <span>Đăng ký/ Đăng nhập</span>} */}
                        {/* <h3>Vui lòng đăng ký/ đăng nhập để được vay ngay lập tức</h3> */}
                        <p>
                            Lotte Finance cho vay tiền mặt. Không thế chấp tài sản, 18 tuổi vẫn vay được và miễn thẩm định nhà.
                        </p>
                    </div>
                    {isLogin ?
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                Xin chào: {user.phone}
                            </div>
                            {/* <button type="button" class="btn btn-danger" onClick={()=>logout()}>Đăng xuất</button> */}
                        </div>
                        : ""
                    }

                    <div className="row">
                        {!isLogin ? <Login onSubmitLogin={() => onSubmitLogin()} />
                            : <UserDetail logOut={() => logout()} userToken={JSON.parse(localStorage.getItem('user'))} /> 
                        }
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img
                                    src={require("../assets/img/about.png")}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Area */}
        </React.Fragment>
    );

}

export default User;
