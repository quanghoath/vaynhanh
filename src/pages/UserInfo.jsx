import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';
import Modal from 'react-modal';

import { useHistory } from "react-router-dom";
const UserInfo = (props) => {
    const [user, setUser] = useState([]);
    const history = useHistory();
    const [modal,setModal] = useState(true);
    useEffect(() => {
        let userToken = JSON.parse(localStorage.getItem('user'));
        axiosGet("/user/"+userToken.id).then((res)=>{
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
    const closeModal = ()=>{
        setModal({view:false,url:""});
    }
    return (
        <React.Fragment>
            <header style={{
                backgroundColor: "#edf5ff",
                position: "fixed",
                top: "0px",
                width: "100%",
                zIndex:999
            }}
                className="p-2 text-center"
            >
                <div className="d-flex justify-content-between">

                <p onClick={()=>history.push('/login')}>Trở lại</p>
                <p className="font-weight-bold">Thông tin tài khoản</p>
                </div>
            </header>
            <div className="col-lg-6 col-md-12 pb-5 mt-5 pt-2" style={{ overflow: "auto"}}>
                <p>Họ và tên: {user.name}</p>
                <p>Giởi tính: {user.sex}</p>
                <p>Điện thoại: {user.phone}</p>
                <p>Nơi ở hiện tại: {user.address}</p>
               <div className="mt-4">
                    <p>Ảnh CMND/CCCD mặt trước</p>
                    <img src={user.cmndMatTruoc}  alt=""
                    style={{maxHeight:"200px",width:"100%"}}
                        onClick={() => setModal({ view: true, url: user.cmndMatTruoc })}
                    />
                    <p>Ảnh CMND/CCCD mặt sau</p>
                    <img src={user.cmndMatSau} alt=""
                        style={{ maxHeight: "200px", width: "100%" }}
                        onClick={() => setModal({ view: true, url: user.cmndMatSau })}
                    />
                    <p>Ảnh chân chung</p>
                    <img src={user.chanDung} alt=""
                        style={{ maxHeight: "200px", width: "100%" }}
                        onClick={() => setModal({ view: true, url: user.chanDung })}
                    />
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
