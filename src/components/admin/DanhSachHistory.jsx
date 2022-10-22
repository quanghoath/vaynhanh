import React, { useState, useEffect } from "react";

import { axiosGet } from '../../axiosClient';
const DanhSachHistory = (props) => {
    const [users, setUsers] = useState([])
    const loadData = (data) => {
        if (data !== "") {
            axiosGet("/history?sortBy=createdAt&order=desc&search=" + data).then((res) => {
                setUsers(res);
            })
        }
        else {
            axiosGet("/history?sortBy=createdAt&order=desc").then((res) => {
                setUsers(res);
            })
        }
    }
    const [input, setInput] = useState("");
    useEffect(() => {
        const timeOutId = setTimeout(() => loadData(input), 1000);
        return () => clearTimeout(timeOutId);
    }, [input])
    return (
        <div className="mt-5 pt-5">
            <div className="d-flex justify-content-between  align-items-center">
                <p style={{ fontWeight: "bold" }}>Lịch sử thao duyệt/hủy duyệt hợp đồng</p>
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Tìm kiếm" />
            </div>

            <div className="shadow mt-3" style={{ height: "700px", maxheight: "700px", overflow: 'auto' }} >
                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Điện thoại</th>
                            <th scope="col">Số tiền</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Ngày</th>
                            <th scope="col" style={{ maxWidth: "60px" }}>Loại</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((item, i) => (
                            <tr key={item.id}>
                                <th scope="row">#{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.soTien}</td>
                                <td>{item.moTa}</td>
                                <td>
                                    {new Date(item.createdAt).getDate()}  - {new Date(item.createdAt).getMonth() + 1} - {new Date(item.createdAt).getFullYear()}
                                </td>
                                <td style={{ maxWidth: "60px" }}>
                                    <p style={{
                                        background: `${item.isDuyet === true ? "green" : "red"}`,
                                        borderRadius: "10px"
                                    }} className="d-flex justify-content-center">{item.isDuyet ? "Cộng tiền" : "Hủy duyệt"}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default DanhSachHistory;
