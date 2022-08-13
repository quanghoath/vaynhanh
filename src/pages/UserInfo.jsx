import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';

import { useHistory } from "react-router-dom";
const UserInfo = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

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
               <p>Họ và tên: Nguyễn Quang Hòa</p>
               <p>Giởi tính: </p>
               <p>Điện thoại: 0923716866</p>
               <p>Nơi ở hiện tại: 21 - Lê Văn Lương</p>
               <div className="mt-4">
                    <p>Ảnh CMND/CCCD mặt trước</p>
                    <img src="https://vcdn-dulich.vnecdn.net/2021/12/24/An-Giang-0-jpeg-1470-1640315739.jpg"  alt=""
                    style={{maxHeight:"200px",width:"100%"}}
                    />
                    <p>Ảnh CMND/CCCD mặt sau</p>
                    <img src="https://vcdn-dulich.vnecdn.net/2021/12/24/An-Giang-0-jpeg-1470-1640315739.jpg" alt=""
                        style={{ maxHeight: "200px", width: "100%" }}
                    />
                    <p>Ảnh chân chung</p>
                    <img src="https://vcdn-dulich.vnecdn.net/2021/12/24/An-Giang-0-jpeg-1470-1640315739.jpg" alt=""
                        style={{ maxHeight: "200px", width: "100%" }}
                    />
               </div>
            </div>
        </React.Fragment>
    );

}


export default UserInfo;
