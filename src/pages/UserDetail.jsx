import React, { useState,useEffect } from "react";
import { axiosPost, axiosGet } from '../axiosClient';

const UserDetail = (props) => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        axiosGet("/Order").then(res=>{
            setData(res);
        });
    },[])
    return (
        <React.Fragment>
            <div className="col-lg-6 col-md-12 shadow-lg pb-5 mt-2 pt-2" style={{overflow:"auto", maxHeight:"500px"}}>
                <h6>Danh sách vay</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Điện thoại</th>
                            <th scope="col">Số tiền</th>
                            <th scope="col">Thời hạn</th>
                            <th scope="col">Ngày vay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item)=>{
                         return   <tr key={item.id}>
                                <th scope="row">1</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.soTien}</td>
                                <td>{item.thoiHan}</td>
                             <td>{item.createdAt}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );

}


export default UserDetail;
