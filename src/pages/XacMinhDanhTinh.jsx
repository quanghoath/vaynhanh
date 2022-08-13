import React, { useState, useEffect,useRef } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';

import { useHistory } from "react-router-dom";
const XacMinhDanhTinh = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const refMatTruoc = useRef();
    useEffect(() => {
        axiosGet("/Order").then(res => {
            setData(res);
        });
    }, [])
    const deleteOrder = async (value) => {
        setLoading(true);
        let res = await axiosDelete("/Order/" + value.id)
        if (res) {
            let resGet = await axiosGet("/Order");
            if (resGet) {
                setData(resGet);
                toast.success('Xóa đơn hàng thành công');
            }
        }
        setLoading(false);
    }
    const handleFileUpload = event => {
        console.log(event.target.files[0].name);
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
                // multiple={false}
                />
                <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{ height: "180px" }}
                    onClick={()=> refMatTruoc.current.click()}
                >
                    
                    <i className="icofont-camera icofont-2x"></i>
                    <p>Mặt trước CMND/CCCD</p>
                </div>
                <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{ height: "180px" }}
                >
                    <i className="icofont-camera icofont-2x"></i>
                    <p>Mặt sau CMND/CCCD</p>
                </div>
                <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{ height: "180px" }}
                >
                    <i className="icofont-camera icofont-2x"></i>
                    <p>Chân dung</p>
                </div>
            </div>
        </React.Fragment>
    );

}


export default XacMinhDanhTinh;
