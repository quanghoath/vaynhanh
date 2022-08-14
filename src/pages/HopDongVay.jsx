import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';
import toast from 'react-hot-toast';

import { useHistory } from "react-router-dom";
const HopDongVay = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user.isAdmin) {
            axiosGet("/Order").then(res => {
                setData(res);
            });
        }
        else{
            axiosGet("/Order?phone="+user.phone).then(res => {
                setData(res);
            });
        }
    }, [])
    const deleteOrder = async (value) => {
        setLoading(true);
        let res = await axiosDelete("/Order/" + value.id)
        if (res) {
            let user = JSON.parse(localStorage.getItem('user'));
            if (user.isAdmin) {
                axiosGet("/Order").then(res => {
                    setData(res);
                    toast.success('Xóa đơn hàng thành công');
                });
            }
            else {
                axiosGet("/Order?phone=" + user.phone).then(res => {
                    setData(res);
                    toast.success('Xóa đơn hàng thành công');
                });
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
                <p className="font-weight-bold">Danh sách vay</p>
                </div>
            </header>
            <div className="col-lg-6 col-md-12 shadow-lg pb-5 mt-5 pt-2 mb-5" style={{ overflow: "auto"}}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Điện thoại</th>
                            <th scope="col">Số tiền</th>
                            <th scope="col">Thời hạn</th>
                            <th scope="col">Ngày vay</th>
                            <th scope="col">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => {
                            return <tr key={item.id}>
                                <th scope="row">1</th>
                                <td>{item.phone}</td>
                                <td>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.soTien)}
                                </td>
                                <td>{item.soThang} tháng</td>
                                <td>
                                    {new Date(item.createdAt).getDate()}  - {new Date(item.createdAt).getMonth() + 1} - {new Date(item.createdAt).getFullYear()}
                                </td>
                                <td>

                                    <button type="button" class="btn btn-danger pt-1 pb-1"
                                        disabled={loading ? true : false}
                                        onClick={() => deleteOrder(item)}>Xóa</button>

                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );

}


export default HopDongVay;
