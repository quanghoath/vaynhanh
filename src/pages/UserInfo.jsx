import React, { useState, useEffect, useRef } from "react";
import { axiosUpload, axiosGet, axiosPut } from '../axiosClient';
import toast from 'react-hot-toast';
import Modal from 'react-modal';

import { useHistory } from "react-router-dom";
const UserInfo = (props) => {
    const [user, setUser] = useState([]);
    const history = useHistory();
    const [modal, setModal] = useState(true);
    const [edit, setEdit] = useState(false);
    const refMatTruoc = useRef();
    const refMatSau = useRef();
    const refChanDung = useRef();
    useEffect(() => {
        let userToken = JSON.parse(localStorage.getItem('user'));
        axiosGet("/user/" + userToken.id).then((res) => {
            setUser(res);
        })
    }, [])
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const closeModal = () => {
        setModal({ view: false, url: "" });
    }
    return (
        <React.Fragment>
            <header style={{
                backgroundColor: "#edf5ff",
                position: "fixed",
                top: "0px",
                width: "100%",
                zIndex: 999
            }}
                className="p-2 text-center mb-5"
            >
                <div className="d-flex justify-content-between  align-items-center">

                    <p onClick={() => history.push('/login')}><i class="icofont-bubble-left icofont-3x"></i></p>
                    <p className="font-weight-bold">Thông tin tài khoản</p>
                </div>
            </header>
            <div style={{ overflow: "auto", marginTop: "80px",marginBottom: "30px"}}>
                <div className="col-12 text-center mb-3">
                    <img src={user.chanDung} alt=""
                        style={{ maxHeight: "100px", width: "100px",
                        borderRadius:'50%',margin:'auto',
                    }}
                        onClick={() => setModal({ view: true, url: user.chanDung })}
                    />
                    <p className="font-weight-bold">{user.phone}</p>
                </div>
                <p className="pl-3 mb-2 font-weight-bold">Thông tin cá nhân</p>
                <div className="row mb-1">
                    <div className="col-5">Họ tên</div>
                    <div className="col-7">{user.name}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Địa chỉ</div>
                    <div className="col-7">{user.address}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Số CMND/CCCD</div>
                    <div className="col-7">{user.soCMND}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5 ">Giới tính</div>
                    <div className="col-7">{user.sex}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Ngày sinh</div>
                    <div className="col-7">{user.birthday}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Nghề nghiệp</div>
                    <div className="col-7">{user.job}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Thu nhập</div>
                    <div className="col-7">{user.thuNhap}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Mục đích vay</div>
                    <div className="col-7">{user.mucDichVay}</div>
                </div>
                <p className="pl-3 mt-4 mb-2 font-weight-bold">Thông tin người thân (Vợ chồng, anh em...)</p>
                <div className="row mb-1">
                    <div className="col-5">Họ tên:</div>
                    <div className="col-7">{user.tenNguoiThan}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Số điện thoại</div>
                    <div className="col-7">{user.sdtNguoiThan}</div>
                </div>
                <p className="pl-3 mt-4 mb-2 font-weight-bold">Thông tin bạn bè</p>
                <div className="row mb-1">
                    <div className="col-5">Họ tên:</div>
                    <div className="col-7">{user.tenBanBe}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Số điện thoại</div>
                    <div className="col-7">{user.sdtBanBe}</div>
                </div>
                <p className="pl-3 mt-4 mb-2 font-weight-bold">Tài khoản ngân hàng</p>
                <div className="row mb-1">
                    <div className="col-5">Tên ngân hàng</div>
                    <div className="col-7">{user.nganHang}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Số TK ngân hàng</div>
                    <div className="col-7">{user.soTKNganHang}</div>
                </div>
                <div className="row mb-1">
                    <div className="col-5">Tên tài khoản</div>
                    <div className="col-7">{user.tenTK}</div>
                </div>
            </div>
            <Modal
                isOpen={modal.view}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={modal.url} style={{ maxHeight: "400px", width: "100%" }} />
            </Modal>
        </React.Fragment>
    );

}


export default UserInfo;
