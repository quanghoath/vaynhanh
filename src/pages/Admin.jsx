import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";
import Footer from '../components/versionOne/Footer';
import DanhSachTaiKhoan from "../components/admin/DanhSachTaiKhoan";
import DanhSachVay from "../components/admin/DanhSachVay";
import DanhSachHistory from "../components/admin/DanhSachHistory";

const Admin = (props) => {
    const { onLogoutAdmin } = props;
    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //     // let user = JSON.parse(localStorage.getItem('user'));
    //     // if (user) {
    //     //     setUser(user);
    //     // }
    // }, [])
    const logout = () => {
        localStorage.removeItem('userAdmin')
        onLogoutAdmin();
    }
    const [index, setIndex] = useState(1);
    return (
        <React.Fragment>
            <div className="container-fluid admin-page">
                <div className="row">
                    <div className="col-2 vh-100 ">
                        <div className="vh-100 shadow pt-4" style={{ width: '100%' }}>
                            <div className="d-flex justify-content-between  align-items-center pl-2 pr-2">
                                <div>
                                    <p>Xin chào,</p>
                                    <h5>Admin</h5>
                                </div>
                                <button type="button" className="border-0 shadow-lg pt-1 pb-1 pl-3 pr-3" 
                                 style={{maxHeight: '10px !important',backgroundColor: 'red'}}
                                    onClick={() => logout()}
                                 >Đăng xuất</button>
                            </div>

                            <hr />
                            <div>
                                <p style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
                                    className={`p-2 ${index === 1 ? 'active' : ''}`}
                                    onClick={() => setIndex(1)}
                                >
                                    <i className="icofont-users-alt-6 mr-3"></i>
                                    Tài khoản</p>
                                <p style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
                                    className={`p-2 ${index === 2 ? 'active' : ''}`}
                                    onClick={() => setIndex(2)}>
                                    <i className="icofont-institution mr-3"></i>
                                    Hợp đồng vay</p>
                                <p style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
                                    className={`p-2 ${index === 3 ? 'active' : ''}`}
                                    onClick={() => setIndex(3)}>
                                    <i className="icofont-history mr-3"></i>
                                    Lịch sử</p>

                                {/* <button type="button" class="btn btn-danger">Đăng xuất</button> */}
                            </div>
                        </div>

                    </div>
                    <div className="col-10 vh-100 ">
                        {index === 1 ? <DanhSachTaiKhoan />
                            : index === 2 ? <DanhSachVay /> : <DanhSachHistory />
                    }
                    </div>
                </div>

            </div>
        </React.Fragment>
    );

}

export default Admin;
