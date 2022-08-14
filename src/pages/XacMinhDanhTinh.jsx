import React, { useState, useEffect,useRef } from "react";
import { axiosPut, axiosGet, axiosUpload } from '../axiosClient';
import toast from 'react-hot-toast';
import { useHistory } from "react-router-dom";

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
    const [matTruoc,setMatTruoc] = useState("");
    const [matSau,setMatSau] = useState("");
    const [chanDung,setChanDung] = useState("");
    const handleFileUpload = async event => {
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset","bkbompjf");
        let res =await axiosUpload(formdata);
        if(res){
            setMatTruoc(res.url);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/"+userToken.id,{
                cmndMatTruoc: res.url
            })
        }
    };
    const handleFileUploadMatSau = async event => {
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
    };
    const handleFileUploadChanDung = async event => {
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
    };
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
                <div className="d-flex justify-content-between">

                    <p onClick={() => history.push('/login')}>Trở lại</p>
                    <p className="font-weight-bold">Xác minh danh tính</p>
                </div>
            </header>
            <div className="col-lg-6 col-md-12 pb-5 mt-5 pt-2" style={{ overflow: "auto" }}>
                <input
                    ref={refMatTruoc}
                    onChange={handleFileUpload}
                    type="file"
                    style={{ display: "none" }}
                />
                <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{ height: "180px",
                        backgroundImage: `url(${matTruoc.length > 0 ? matTruoc : user.cmndMatTruoc})`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat'
                    }}
                    onClick={()=> refMatTruoc.current.click()}
                    
                >
                    
                    <i className="icofont-camera icofont-2x"></i>
                    <p>Mặt trước CMND/CCCD</p>
                </div>
                <input
                    ref={refMatSau}
                    onChange={handleFileUploadMatSau}
                    type="file"
                    style={{ display: "none" }}
                />
                <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{ height: "180px",
                        backgroundImage: `url(${matSau.length > 0 ? matSau : user.cmndMatSau})`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat'
                    }}
                    onClick={() => refMatSau.current.click()}
                    
                >
                    <i className="icofont-camera icofont-2x"></i>
                    <p>Mặt sau CMND/CCCD</p>
                </div>
                <input
                    ref={refChanDung}
                    onChange={handleFileUploadChanDung}
                    type="file"
                    style={{ display: "none" }}
                />
                <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{ height: "180px",
                        backgroundImage: `url(${chanDung.length > 0 ? chanDung : user.chanDung})`,
                        backgroundSize:'auto',
                        backgroundRepeat:'no-repeat'
                        
                    }}
                    onClick={() => refChanDung.current.click()}
                >
                    <i className="icofont-camera icofont-2x"></i>
                    <p>Chân dung</p>
                </div>
            </div>
        </React.Fragment>
    );

}


export default XacMinhDanhTinh;
