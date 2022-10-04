import React, { useState, useEffect, useRef } from "react";
import { axiosPut, axiosGet, axiosUpload } from '../axiosClient';
import toast from 'react-hot-toast';
import { useHistory } from "react-router-dom";
import _ from 'lodash';

const XacMinhDanhTinh = (props) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const refMatTruoc = useRef();
    const refMatSau = useRef();
    const refChanDung = useRef();
    useEffect(() => {
        let userToken = JSON.parse(localStorage.getItem('user'));
        axiosGet("/user/" + userToken.id).then((res) => {
            setUser(res);
        })
    }, [])
    const [matTruoc, setMatTruoc] = useState("");
    const [matSau, setMatSau] = useState("");
    const [chanDung, setChanDung] = useState("");
    const [isErrr,setIsErr] = useState(false);
    const handleFileUpload = async event => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setMatTruoc(res.url);
            let _user = Object.create(user);
            _user.cmndMatTruoc = res.url;
            setUser(_user);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                cmndMatTruoc: res.url
            })
        }
        setLoading(false);
    };
    const handleFileUploadMatSau = async event => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            let _user = Object.create(user);
            _user.cmndMatSau = res.url;
            setUser(_user);
            setMatSau(res.url);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                cmndMatSau: res.url
            })
        }
        setLoading(false);
    };
    const handleFileUploadChanDung = async event => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setChanDung(res.url);
            let _user = Object.create(user);
            _user.chanDung = res.url
            setUser(_user);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                chanDung: res.url
            })
        }
        setLoading(false);
    };
    const [index, setIndex] = useState(1);
    const nextStep = () => {
        if (!user.cmndMatTruoc ||
            !user.cmndMatSau||
            !user.chanDung) {
            setIsErr(true);
            return
        }
        setIndex(index + 1);
        if(index === 2){
            debugger
            setIsErr(false);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                ...user,
                isActive: true
            });
            history.push('/xacnhanvay', {
                item: {
                    phone: user.phone,
                    name: user.name,
                    createdAt: new Date(),
                    idUser: user.id,
                    soTien: 20000000,
                    soThang: 6
                }
            });
        }
    }
    const onChangeInput = (e, type) => {
        let data = _.cloneDeep(user);
        data[type] = e.target.value;
        setUser(data);
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
                className="p-2 text-center"
            >
                <div className="d-flex justify-content-between  align-items-center">

                    <p onClick={() => history.push('/login')}><i class="icofont-bubble-left icofont-3x"></i></p>
                    <p className="font-weight-bold">Xác minh danh tính</p>
                </div>
            </header>
            {index === 1 ?
                <div className="col-lg-6 col-md-12 pb-2 mt-5 pt-2" style={{ overflow: "auto" }}>
                    <input
                        ref={refMatTruoc}
                        onChange={handleFileUpload}
                        type="file"
                        style={{ display: "none" }}
                    />
                    <div className="col-md-12 shadow mt-3 pt-3 pb-3 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{
                            height: "180px",
                            backgroundImage: `url(${matTruoc.length > 0 ? matTruoc : user.cmndMatTruoc})`,
                            backgroundSize: '360px 180px',
                            backgroundRepeat: 'no-repeat',
                        border: `1px solid ${user.cmndMatTruoc ? "": "red"}`
                        }}
                        onClick={() => refMatTruoc.current.click()}
                    >
                        {loading ? <i class="icofont-spinner icofont-3x"></i>
                            : <>  <i className="icofont-camera icofont-2x"></i>
                                <p>Mặt trước CMND/CCCD</p></>
                        }

                    </div>
                    <input
                        ref={refMatSau}
                        onChange={handleFileUploadMatSau}
                        type="file"
                        style={{ display: "none" }}
                    />
                    <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{
                            height: "180px",
                            backgroundImage: `url(${matSau.length > 0 ? matSau : user.cmndMatSau})`,
                            backgroundSize: '360px 180px',
                            backgroundRepeat: 'no-repeat',
                        border: `1px solid ${user.cmndMatSau ? "" : "red"}`
                        }}
                        onClick={() => refMatSau.current.click()}

                    > {loading ? <i class="icofont-spinner icofont-3x"></i>
                        : <>  <i className="icofont-camera icofont-2x"></i>
                            <p>Mặt sau CMND/CCCD</p></>
                        }

                    </div>
                    <input
                        ref={refChanDung}
                        onChange={handleFileUploadChanDung}
                        type="file"
                        style={{ display: "none" }}
                    />
                    <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{
                            height: "180px",
                            backgroundImage: `url(${chanDung.length > 0 ? chanDung : user.chanDung})`,
                            backgroundSize: '180px 180px',
                            backgroundRepeat: 'no-repeat',
                        border: `1px solid ${user.chanDung ? "" : "red"}`

                        }}
                        onClick={() => refChanDung.current.click()}
                    >
                        {loading ? <i class="icofont-spinner icofont-3x"></i>
                            : <>   <i className="icofont-camera icofont-2x"></i>
                                <p>Chân dung</p></>
                        }

                    </div>

                </div>
                :
                <div className="col-lg-6 col-md-12 pb-2 mt-5 pt-5" style={{ overflow: "auto" }}>
                    <div className="d-flex justify-content-between align-items-center mb-1" style={{
                        border: "1px solid gray",
                        backgroundColor: '',
                        borderRadius: '30px',
                        padding: '2px 15px'
                    }}>
                        <p style={{ color: "orange" }}>Họ và tên</p>
                       
                            <input type="text" value={user.name} className="p-0 m-0" style={{
                                border: "none",
                                borderBottom: "1px solid red"
                            }}
                             onChange={(e) => onChangeInput(e, "name")}
                             />
                       
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-1" style={{
                        border: "1px solid gray",
                        backgroundColor: '',
                        borderRadius: '30px',
                        padding: '2px 15px'
                    }}>
                        <p style={{ color: "orange" }}>Điện thoại</p>
                        {/* <p> {edit === false ?
                            user.phone : */}
                            <input type="text" disabled value={user.phone} className="p-0 m-0" 
                            style={{ border: "none", borderBottom: "1px solid red" }} 
                            // onChange={(e) => onChangeInput(e, "phone")}
                             />
                        {/* }</p> */}
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-1" style={{
                        border: "1px solid gray",
                        backgroundColor: '',
                        borderRadius: '30px',
                        padding: '2px 15px'
                    }}>
                        <p style={{ color: "orange" }}>Giới tính</p>

                        <input type="text" value={user.sex} className="p-0 m-0" style={{
                            border: "none",
                            borderBottom: "1px solid red"
                        }}
                         onChange={(e) => onChangeInput(e, "sex")}
                        />

                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-1" style={{
                        border: "1px solid gray",
                        backgroundColor: '',
                        borderRadius: '30px',
                        padding: '2px 15px'
                    }}>
                        <p style={{ color: "orange" }}>Nơi ở hiện tại</p>
                            <input type="text" value={user.address} className="p-0 m-0" 
                            style={{ border: "none", borderBottom: "1px solid red" }}
                             onChange={(e) => onChangeInput(e, "address")} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-1" style={{
                        border: "1px solid gray",
                        backgroundColor: '',
                        borderRadius: '30px',
                        padding: '2px 15px'
                    }}>
                        <p style={{ color: "orange" }}>Số CMND</p>
                            <input type="text" value={user.soCMND} className="p-0 m-0" 
                            style={{ border: "none", borderBottom: "1px solid red" }}
                             onChange={(e) => onChangeInput(e, "soCMND")} />

                    </div>
                </div>
            }

            <div className="col-12">
                {isErrr ?
                <p style={{color:"red"}}>Vui lòng tải đủ các ảnh</p>
                :""
                }
                <button className="col-12 btn btn-primary mt-2 "  onClick={() => nextStep()}>Tiếp tục</button>
            </div>
        </React.Fragment>
    );

}


export default XacMinhDanhTinh;
