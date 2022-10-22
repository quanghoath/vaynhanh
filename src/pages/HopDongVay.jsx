import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';

import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import { isMobile } from 'react-device-detect';
const HopDongVay = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [user, setUser] = useState({})

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user.isAdmin) {
            axiosGet("/Order").then(res => {
                setData(res);
            });
        }
        else {
            axiosGet("/Order?phone=" + user.phone).then(res => {
                setData(res);
            });
        }
        setUser(user);
    }, [])
    const customStyles = {
        content: {
            width: "100%",
            height: "40%",
            left: "0px",
            top: '10%',
            // left: '50%',
            // right: 'auto',
            // bottom: 'auto',
            // marginRight: '-50%',
            // transform: 'translate(-50%, -50%)',
        },
    };
    const [modal, setModal] = useState({ view: false, data: {} });
    const closeModal = () => {
        setModal({ view: false, data: {} });
    }
    if (isMobile) {
        return (
            <React.Fragment>
                <header style={{
                    backgroundColor: "#edf5ff",
                    position: "fixed",
                    top: "0px",
                    width: "100%",
                    zIndex: 999
                }}
                    className="p-2 text-center"
                >
                    <div className="d-flex justify-content-between align-items-center">

                        <p onClick={() => history.push('/login')}><i className="icofont-bubble-left icofont-3x"></i></p>
                        <p className="font-weight-bold">Danh sách vay</p>
                    </div>
                </header>
                <div className="col-lg-6 col-md-12 shadow-lg mt-5 pt-5 mb-5" style={{ overflow: "auto" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                {/* <th scope="col" style={{minWidth:"100px"}}>Điện thoại</th> */}
                                <th scope="col" style={{ minWidth: "100px" }}>Số tiền</th>
                                <th scope="col" style={{ minWidth: "100px" }}>Ngày vay</th>
                                <th scope="col" style={{ minWidth: "100px" }}>Trạng thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, i) => {
                                return <tr key={item.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.soTien)}
                                    </td>
                                    <td style={{ minWidth: "150px" }}>
                                        {new Date(item.createdAt).getDate()}  - {new Date(item.createdAt).getMonth() + 1} - {new Date(item.createdAt).getFullYear()}
                                    </td>
                                    <td>Chờ duyệt</td>
                                    <td>
                                        <div style={{ backgroundColor: '#edf5ff', padding: "8px", borderRadius: '20%' }} onClick={() => setModal({ view: true, data: item })}>
                                            <i className="icofont-eye-alt"></i>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <Modal
                    isOpen={modal.view}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="text-center pt-2 pb-3">
                        <p className="font-weight-bold">Thông tin hợp đồng</p>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            Số tiền vay
                        </div>
                        <div className="col-5">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(modal.data.soTien)}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            Hạn thanh toán
                        </div>
                        <div className="col-5">{modal.data.soThang} tháng</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            Ngày tạo
                        </div>
                        <div className="col-5">
                            {new Date(modal.data.createdAt).getDate()}  - {new Date(modal.data.createdAt).getMonth() + 1} - {new Date(modal.data.createdAt).getFullYear()}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            Trạng thái
                        </div>
                        <div className="col-7" >
                            <p style={{ backgroundColor: 'red', padding: "2px", paddingLeft: "10px", borderRadius: "5px", width: "90px" }}>Chờ duyệt</p>
                        </div>
                    </div>
                </Modal>
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


export default HopDongVay;
