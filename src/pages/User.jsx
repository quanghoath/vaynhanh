import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";
import Footer from '../components/versionOne/Footer';
const User = (props) => {
    const { onSubmitLogin } = props;
    const [user, setUser] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        }
    }, [])
    const logout = () => {
        onSubmitLogin(false);
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
                        <p>
                            Lotte Finance cho vay tiền mặt. Không thế chấp tài sản, 18 tuổi vẫn vay được và miễn thẩm định nhà.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p style={{ fontWeight: 'bold' }}>Xin chào: {user.name}</p>
                    </div>

                    <div className="row">
                        <UserDetail logOut={() => logout()} userToken={JSON.parse(localStorage.getItem('user'))} />
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
            <Footer />
        </React.Fragment>
    );

}

export default User;
