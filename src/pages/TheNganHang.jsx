import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";
import Footer from '../components/versionOne/Footer';
const TheNganHang = (props) => {
    const { onSubmitLogin } = props;
    const [user, setUser] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        }
    }, [])
    const logout = () => {
        localStorage.removeItem('user')
        onSubmitLogin();
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
                <p>Thẻ ngân hàng</p>
            </header>
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            {/* <div className="p-3">
                                <p>Nguyễn Quang hòa</p>
                                <p style={{
                                    fontSize: "25px", fontWeight: "200"
                                }}>1234 5678 9101 1112</p>
                                <p className="pt-2 text-right">.</p>
                                <p style={{ fontSize: "36px", fontWeight: "bold" }}
                                    className="text-right"
                                >.</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="row border mt-4 mb-4 m-2 p-2">
                    <p className="col-8 font-weight-bold font-size-medium">Số dư</p>
                    <p className="col-3 font-weight-bold font-size-medium"
                    style={{color: 'red'}}
                    >0 VNĐ</p>
                </div>
                <div className="text-center mt-2 mb-2">
                    <button className="btn btn-outline-success">Rút tiền về tài khoản liên kết</button>
                </div>
              
                <img src={require("../assets/img/home/bank.jpg")} />
            </section>
            {/* End About Area */}
            <Footer />
        </React.Fragment>
    );

}

export default TheNganHang;
