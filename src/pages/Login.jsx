import React, { useState, useEffect } from "react";
import { isMobile } from 'react-device-detect';
// import i from "react-icofont";
import PropTypes from "prop-types";
import { axiosPost, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';
// import { v4 as uuid } from 'uuid';
const Login = (props) => {
    const { onSubmitLogin } = props;
    const [login, setLogin] = useState(true);
    const [data, setData] = useState({});
    const [err, setErr] = useState("");
    const [valid, setValid] = useState({});
    const [loading, setLoading] = useState(false);
    const onChangeType = (v) => {
        setErr("");
        setValid({ phone: "", password: "" });
        setLogin(v);
    }
    console.log(login)
    const appleChange = (type, value) => {
        let newData = Object.create(data);
        newData[type] = value;
        setData(newData);
    }
    const validate = () => {
        let newValid = Object.create(valid);
        if (typeof data.phone === "undefined" || data.phone?.length !== 10) {
            newValid["phone"] = "Số điện thoại không được để trống";
            if (data.phone?.length !== 10) {
                newValid["phone"] = "Số điện thoại không đúng 10 số";
            }
            setValid(newValid);
            return false;
        }
        if (typeof data.password === "undefined" || data.password?.length === 0) {
            newValid["password"] = "Mật khẩu không được để trống";
            setValid({ ...newValid, phone: "" });
            return false;
        }
        setValid({ phone: "", password: "" });
        return true;
    }
    const onSubmit = async () => {
        setLoading(true);
        let validation = validate();
        if (validation === false) {
            setLoading(false);
            return;
        }
        let res = await axiosGet(`/user?phone=${data.phone}`);
        if (res.length > 0) {
            if (res[0].password === data.password) {
                localStorage.setItem("user", JSON.stringify(res[0]));
                setErr("");
                setValid({ phone: "", password: "" });
                onSubmitLogin();
                toast.success('Đăng nhập thành công!')
            }
            else {
                toast.error("Mật khẩu không đúng!")
                // setErr("Mật khẩu không đúng!")
            }
        }
        else {
            toast.error("Số điện thoại chưa được đăng ký!")
            // setErr("Số điện thoại chưa được đăng ký!")
        }
        setLoading(false);
    }

    const validateRegister = () => {
        let newValid = Object.create(valid);
        if (typeof data.phone === "undefined" || data.phone?.length !== 10) {
            newValid["phone"] = "Số điện thoại không được để trống";
            if (data.phone?.length !== 10) {
                newValid["phone"] = "Số điện thoại không đủ 10 số";
            }
            setValid(newValid);
            return false;
        }
        if (typeof data.password === "undefined" || data.password?.length === 0) {
            newValid["password"] = "Mật khẩu không được để trống";
            setValid({ ...newValid, phone: "" });
            return false;
        }
        if (typeof data.repassword === "undefined" || data.repassword?.length === 0) {
            newValid["repassword"] = "Mật khẩu nhập lại không được để trống";
            setValid({ ...newValid, phone: "" });
            return false;
        }
        if (data.repassword !== data.password) {
            newValid["repassword"] = "Mật khẩu không khớp";
            setValid({ ...newValid, phone: "" });
            return false;
        }
        setValid({ phone: "", password: "" });
        return true;
    }
    const onSubmitRegister = async () => {
        setLoading(true);
        let validation = validateRegister();
        if (validation === false) {
            setLoading(false);
            return;
        }
        let res = await axiosGet(`/user?phone=${data.phone}`);
        if (res.length > 0) {
            toast.error("Số điện thoại đã được đăng ký trước đó!")
            // setErr("Số điện thoại đã được đăng ký trước đó!");
        }
        else {
            // const unique_id = uuid();
            let regis = await axiosPost("/user", {
                phone: data.phone,
                password: data.password,
                name: data.phone,
                createdAt: new Date()
                // id: unique_id
            });
            if (regis) {
                toast.success('Đăng ký thành công!')
                setLogin(true);
                // setErr("");
                setValid({ phone: "", password: "" });

            }
        }
        setLoading(false);
    }
    const renderForm = () => {
        if (login === true) {
            return (
                <div className="pt-4 text-center">
                    <p className="text-center font-weight-bold mb-3" >Đăng nhập thành viên</p>
                    <p className="font-weight-bold text-left">Số điện thoại</p>
                    <div className="input-group has-validation pt-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="icofont-ui-touch-phone"></i></span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập số điện thoại"
                            onChange={(e) => appleChange("phone", e.target.value)}
                        />

                    </div>
                    <div className="text-left text-danger">
                        {valid.phone?.length > 0 ? valid.phone : ""}
                    </div>
                    <p className="font-weight-bold mt-3 text-left">Mật khẩu</p>
                    <div className="input-group has-validation pt-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="icofont-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập mật khẩu"
                            onChange={(e) => appleChange("password", e.target.value)}
                        />
                    </div>
                    <div className="text-left text-danger">
                        {valid.password?.length > 0 ? valid.password : ""}
                    </div>
                    <div className="col-12 col-sm-12">

                        <button type="button" className="btn btn-primary mt-3" onClick={() => onSubmit()}>
                            {loading ? <i className="icofont-spinner-alt-6"></i> :
                                "Đăng nhập thành viên"
                            }
                        </button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="text-center pt-4">
                    <p className="text-center font-weight-bold mb-3">Đăng ký thành viên</p>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="icofont-ui-touch-phone"></i></span>
                        </div>
                        <input type="text" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập số điện thoại"
                            onChange={(e) => appleChange("phone", e.target.value)}
                        />
                    </div>
                    <div className="text-left text-danger">
                        {valid.phone?.length > 0 ? valid.phone : ""}
                    </div>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="icofont-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập mật khẩu"
                            onChange={(e) => appleChange("password", e.target.value)}
                        />
                    </div>
                    <div className="text-left text-danger">
                        {valid.password?.length > 0 ? valid.password : ""}
                    </div>
                    <div className="input-group has-validation pt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="icofont-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" required style={{ border: "1px solid" }}
                            placeholder="Nhập lại mật khẩu"
                            onChange={(e) => appleChange("repassword", e.target.value)}
                        />
                    </div>
                    <div className="text-left text-danger">
                        {valid.repassword?.length > 0 ? valid.repassword : ""}
                    </div>
                    <button type="button" className="btn btn-primary mt-3" onClick={() => onSubmitRegister()}>
                        {loading ? <i className="icofont-spinner-alt-6"></i> :
                            " Đăng ký thành viên"
                        }
                    </button>
                </div>
            )
        }
    }
    if (isMobile) {
        return (

            <React.Fragment>
                <img src={require('../assets/img/logo.png')} style={{
                    height: "50%",
                    width: "150px",
                    marginTop: "30%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block"
                }} alt="" />
                <div className="col-lg-6 col-md-12 shadow-lg pb-5 mt-4 " >

                    <ul className="nav nav-pills nav-fill " style={{ paddingLeft: "-15px" }}>
                        <li className="nav-item shadow-sm " onClick={() => onChangeType(true)} style={{ cursor: "pointer" }} >
                            <p className={`nav-link ${login ? "active" : ""}`} ><i className="icofont-login"></i> Đăng nhập</p>
                        </li>
                        <li className="nav-item shadow-sm " style={{ cursor: "pointer" }} onClick={() => onChangeType(false)} >
                            <p className={`nav-link ${login ? "" : "active"}`}><i className="icofont-logout"></i>  Đăng ký</p>
                        </li>
                    </ul>
                    {renderForm()}
                    {err && err.length > 0 ?
                        (<p className="pt-3 text-danger">{err}</p>) : ""
                    }
                </div>

            </React.Fragment>
        );
    }
    else {
        return <div className="vh-100 " style={{
            width: '100%', marginTop: '10%'
        }}>
            <h3 className="text-center">Thiết bị không hỗ trợ. Vui lòng truy cập bằng điện thoại</h3>
        </div>
    }


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
