import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';
import { useHistory } from "react-router-dom";
const UserDetail = (props) => {
    const {logOut} =props;
    const [user, setUser] = useState([]);
    const history = useHistory();
    let userToken = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        axiosGet("/user/" + userToken.id).then((res) => {
            setUser(res);
        })
    }, [])
    useEffect(() => {
        axiosGet("/user/" + userToken.id).then((res) => {
            setUser(res);
        })
    }, [userToken])
    const logout = () => {
        logOut();
    }
    const onClickMenu = (v) => {
        switch (v) {
            case "hdv":
                history.push("/hopdongvay")
                break;
            case "info":
                history.push("/userinfo")
                break;
            default:
                break;
        }
    }
    return (
        <React.Fragment>
            {user.isActive === true ? "":
                <div className="col-md-12  mt-3 pt-2 pb-2 bg-warning text-dark">
                    <p>Xác thực tài khoản</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        {/* <p>Ảnh</p> */}
                        <i class="icofont-camera icofont-2x"></i>
                        <p className="pl-4">Bổ sung CMND/CCCD và chân dung để hoàn tất định danh</p>
                    </div>
                    <p className="pt-3 font-weight-bold" onClick={() => history.push("/xacminh")}>Xác thực ngay</p>
                </div>
        }
           

            <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-info" onClick={() => onClickMenu("hdv")}>
                <p>Hợp đồng vay</p>
            </div>
            <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-info" onClick={() => onClickMenu("info")}>
                <p>Thông tin cá nhân</p>
            </div>
            <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-info">
                <a href="https://zalo.me/0908676629" target="_blank" className="text-dark">
                    Liên hệ tư vấn - hỗ trợ
                </a>
            </div>
            <button type="button" className="btn btn-danger mt-3" onClick={() => logout()}>Đăng xuất</button>
        </React.Fragment>
    );

}


export default UserDetail;
