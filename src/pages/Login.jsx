import React, { useState } from "react";
// import i from "react-icofont";
import PropTypes from "prop-types";

const Login = (props) => {
    const [login, setLogin] = useState(true);
    const onChangeType = (v) => {
        setLogin(v);
    }
    const renderForm = ()=>{
        if(login === true){
            return (
                <div className="text-center pt-5">
                    <p className="">Đăng nhập thành viên</p>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="icofont-ui-touch-phone"></i></span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập số điện thoại"
                        />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="icofont-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập mật khẩu"
                        />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mt-3">Đăng nhập thành viên</button>
                </div>
            )
        }
        else{
            return (
                <div className="text-center pt-5">
                    <p className="">Đăng ký thành viên</p>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="icofont-ui-touch-phone"></i></span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập số điện thoại"
                        />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="icofont-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập mật khẩu"
                        />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="icofont-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập lại mật khẩu"
                        />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mt-3">Đăng ký thành viên</button>
                </div>
            )
        }
    }
    return (
        <React.Fragment>
            {/* Start About Area */}
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Đăng ký/ Đăng nhập</span>
                        {/* <h3>Vui lòng đăng ký/ đăng nhập để được vay ngay lập tức</h3> */}
                        <p>
                            Lotte Finance cho vay tiền mặt. Không thế chấp tài sản, 18 tuổi vẫn vay được và miễn thẩm định nhà.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 shadow-lg pb-5">
                            <ul className="nav nav-pills nav-fill " style={{ paddingLeft: "-15px" }}>
                                <li className="nav-item shadow-sm " onClick={() => onChangeType(true)} style={{cursor: "pointer" }} >
                                    <p className={`nav-link ${login ? "active" : ""}`} ><i className="icofont-login"></i> Đăng nhập</p>
                                </li>
                                <li className="nav-item shadow-sm " style={{ cursor: "pointer" }} onClick={() => onChangeType(false)} >
                                    <p className={`nav-link ${!login ? "active" : ""}`}><i className="icofont-logout"></i>  Đăng ký</p>
                                </li>
                            </ul>
                            { renderForm()}
                           
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img
                                    src={props.aboutImage}
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

//Props Types
Login.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutImage: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutDescription: PropTypes.string,
    aboutListItemOne: PropTypes.string,
    aboutListItemTwo: PropTypes.string,
    aboutListItemThree: PropTypes.string,
    aboutListItemFour: PropTypes.string,
    aboutListItemFive: PropTypes.string,
    aboutListItemSix: PropTypes.string,
    aboutListItemSeven: PropTypes.string,
    aboutListItemEight: PropTypes.string,
    aboutBtnText: PropTypes.string,
    aboutBtnLink: PropTypes.string,
};

//Default Props
Login.defaultProps = {
    sectionName: "Đăng ký/ Đăng nhập",
    sectionTitle: "Vui lòng đăng ký/ đăng nhập để được vay ngay lập tực",
    sectionDescription:
        "Lotte Finance cho vay tiền mặt. Không thế chấp tài sản, 18 tuổi vẫn vay được và miễn thẩm định nhà.",

    aboutImage: require("../assets/img/about.png"),
    aboutTitle: "We are branding strategy service from 2001 for our customers.",
    aboutDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aboutListItemOne: "Creative Design",
    aboutListItemTwo: "Retina Ready",
    aboutListItemThree: "Responsive Design",
    aboutListItemFour: "Creative Design",
    aboutListItemFive: "Modern Design",
    aboutListItemSix: "Awesome Design",
    aboutListItemSeven: "Digital Marketing & Branding",
    aboutListItemEight: "Creative Design",
    aboutBtnText: "Read More",
    aboutBtnLink: "#0",

};

export default Login;
