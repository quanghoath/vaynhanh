import React, { useState, useEffect } from "react";
import { axiosDelete, axiosGet } from '../axiosClient';

import toast from 'react-hot-toast';
const UserDetail = (props) => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        axiosGet("/Order").then(res => {
            setData(res);
        });
    }, [])
    const deleteOrder =async (value)=>{
        setLoading(true);
       let res = await axiosDelete("/Order/" + value.id)
        if (res) {
           let resGet = await axiosGet("/Order");
           if(resGet){
               setData(res);
               toast.success('Xóa đơn hàng thành công')
           }
        }
        setLoading(false);
    }
    return (
        <React.Fragment>
            <div className="col-lg-6 col-md-12 shadow-lg pb-5 mt-2 pt-2" style={{ overflow: "auto", maxHeight: "500px" }}>
                <h6>Danh sách vay</h6>
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
                                <td>{item.soThang}</td>
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


export default UserDetail;
