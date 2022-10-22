import React, { useState, useEffect } from "react";
import Footer from '../components/versionOne/Footer';
import { axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';
import { isMobile } from 'react-device-detect';
const TheNganHang = (props) => {
    const [soTien, setSoTien] = useState(0);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        axiosGet("/Order?idUser=" + user.id).then(res => {
            if (res) {
                let daDuyet = res.filter((item) => item.isDuyet === true)
                let sotien = daDuyet.reduce((previous, current) => {
                    return Number(previous) + Number(current.soTien)
                }, 0)
                setSoTien(sotien);
            }
        })
    }, [])
    const rutTien = () => {
        if (soTien === 0) {
            toast.error("Số dư không đủ để rút")
            return;
        }
    }
    if (isMobile) {
        return (
            <React.Fragment>
                <header style={{
                    backgroundColor: "#edf5ff",
                    position: "fixed",
                    top: "0px",
                    width: "100%",
                }}
                    className="pt-2 pb-2 text-center"
                >
                    <p>Thẻ ngân hàng</p>
                </header>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="card">
                            <div className="card-content">
                            </div>
                        </div>
                    </div>
                    <div className="row border mt-4 mb-4 m-2 p-2">
                        <p className="col-8 font-weight-bold font-size-medium">Số dư</p>
                        <p className="col-3 font-weight-bold font-size-medium"
                            style={{ color: 'red' }}
                        >
                            {
                                new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien)
                            }
                        </p>
                    </div>
                    <div className="text-center mt-2 mb-2">
                        <button className="btn btn-outline-success" onClick={() => rutTien()}>Rút tiền về tài khoản liên kết</button>
                    </div>

                    <img src={require("../assets/img/home/bank.jpg")} />
                </section>
                {/* End About Area */}
                <Footer />
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

export default TheNganHang;
