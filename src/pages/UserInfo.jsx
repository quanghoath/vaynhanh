import React, { useState, useEffect,useRef } from "react";
import { axiosUpload, axiosGet, axiosPut } from '../axiosClient';
import toast from 'react-hot-toast';
import Modal from 'react-modal';

import { useHistory } from "react-router-dom";
const UserInfo = (props) => {
    const [user, setUser] = useState([]);
    const history = useHistory();
    const [modal, setModal] = useState(true);
    const [edit,setEdit] = useState(false);
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
    const onClickEdit = ()=>{
        setEdit(!edit);
        let userToken = JSON.parse(localStorage.getItem('user'));
        axiosPut("/user/" + userToken.id, user)
    }
    const [matTruoc, setMatTruoc] = useState("");
    const [matSau, setMatSau] = useState("");
    const [chanDung, setChanDung] = useState("");
    const [loading, setLoading] = useState(false);
    const uploadMatTruoc = async (event)=>{
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setMatTruoc(res.url);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                cmndMatTruoc: res.url
            })
        }
        setLoading(false);
    }
    const uploadMatSau = async (event) => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setMatSau(res.url);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                cmndMatSau: res.url
            })
        }
        setLoading(false);
    }
    const upLoadChanDung = async (event) => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setChanDung(res.url);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                chanDung: res.url,
                isActive: true
            })
        }
        setLoading(false);
    }
    const onChangeInput = (e,type)=>{
        let data = Object.create(user);
        data[type] = e.target.value;
        setUser(data);
    }
    return (
        <React.Fragment>
            <input
                ref={refMatTruoc}
                onChange={uploadMatTruoc}
                type="file"
                style={{ display: "none" }}
            />
            <input
                ref={refMatSau}
                onChange={uploadMatSau}
                type="file"
                style={{ display: "none" }}
            />
            <input
                ref={refChanDung}
                onChange={upLoadChanDung}
                type="file"
                style={{ display: "none" }}
            />
            <header style={{
                backgroundColor: "#edf5ff",
                position: "fixed",
                top: "0px",
                width: "100%",
                zIndex: 999
            }}
                className="p-2 text-center"
            >
                <div className="d-flex justify-content-between">

                    <p onClick={() => history.push('/login')}>Trở lại</p>
                    <p className="font-weight-bold">Thông tin tài khoản</p>
                </div>
            </header>
            <div className="col-lg-6 col-md-12 pb-5 mt-5 pt-2" style={{ overflow: "auto" }}>
                <p className="mb-2">Họ và tên: 
                { edit === false ? 
                     user.name :
                    <input type="text" value={user.name} className="pl-2 ml-2 " onChange={(e) => onChangeInput(e,"name")} />
                }
                </p>
                <p className="mb-2">Giởi tính:
                    {edit === false ?
                        user.sex :
                        <input type="text" value={user.sex} className="pl-2  ml-2" onChange={(e) => onChangeInput(e,"sex")} />
                    }
                </p>
                <p className="mb-2">Điện thoại: 
                    {edit === false ?
                        user.phone :
                        <input type="text" value={user.phone} className="pl-2  ml-2" onChange={(e) => onChangeInput(e,"phone")} />
                    }
                </p>
                <p className="mb-2">Nơi ở hiện tại:
                    {edit === false ?
                        user.address :
                        <input type="text" value={user.address} className="pl-2 ml-2" onChange={(e) => onChangeInput(e,"address")} />
                    }
                </p>
                <div className="mt-4">

                    <p>Ảnh CMND/CCCD mặt trước</p>
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                        <img src={matTruoc.length > 0 ? matTruoc : user.cmndMatTruoc} alt=""
                            style={{ maxHeight: "200px", width: "100%" }}
                            onClick={() => setModal({ view: true, url: matTruoc.length > 0 ? matTruoc : user.cmndMatTruoc })}
                        />
                        {edit ===true && 
                            <div
                                onClick={() => refMatTruoc.current.click()}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%', display: "block",
                                backgroundColor: " rgba(0, 0, 0, .6)",
                                color: "white"
                            }}
                                className="d-flex justify-content-center align-items-center flex-column"
                            >
                                {loading ? <i class="icofont-spinner icofont-3x"></i> :<>
                                <i className="icofont-camera icofont-2x"></i>
                                <p>Mặt trước CMND/CCCD</p></> }
                            </div>
                        }
                       
                    </div>

                    <p>Ảnh CMND/CCCD mặt sau</p>
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                        <img src={matSau.length > 0 ? matSau : user.cmndMatSau} alt=""
                        style={{ maxHeight: "200px", width: "100%" }}
                            onClick={() => setModal({ view: true, url: matSau.length > 0 ? matSau : user.cmndMatSau })}
                    />
                        {edit === true &&
                            <div
                                onClick={() => refMatSau.current.click()}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%', display: "block",
                                backgroundColor: " rgba(0, 0, 0, .6)",
                                color: "white"
                            }}
                                className="d-flex justify-content-center align-items-center flex-column"
                            >
                                {loading ? <i class="icofont-spinner icofont-3x"></i> : <>
                                    <i className="icofont-camera icofont-2x"></i>
                                    <p>Mặt sau CMND/CCCD</p></>}
                               
                            </div>
                        }
                    </div>
                    <p>Ảnh chân chung</p>
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                        <img src={chanDung.length > 0 ? chanDung : user.chanDung} alt=""
                        style={{ maxHeight: "200px", width: "100%" }}
                            onClick={() => setModal({ view: true, url: chanDung.length > 0 ? chanDung : user.chanDung })}
                        />
                        {edit === true &&
                            <div
                                onClick={() => refChanDung.current.click()}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%', display: "block",
                                backgroundColor: " rgba(0, 0, 0, .6)",
                                color: "white"
                            }}
                                className="d-flex justify-content-center align-items-center flex-column"
                            >
                               
                                {loading ? <i class="icofont-spinner icofont-3x"></i> : <>
                                    <i className="icofont-camera icofont-2x"></i>
                                    <p>Chân dung</p></>}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="mb-5 ml-2">
                <button type="button" className="btn btn-primary mt-1 mb-5" onClick={() =>onClickEdit()}>
                    {edit === true? "Lưu" : "Chỉnh sửa"}
                </button>
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
