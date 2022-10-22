import React, { useState, useEffect } from "react";

import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { axiosGet, axiosPut, axiosPost } from '../../axiosClient';
import _ from 'lodash';
const DanhSachVay = (props) => {
    const [users, setUsers] = useState([])
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const loadData = (data) => {
        if (data !== "") {
            axiosGet("/Order?sortBy=createdAt&order=desc&search=" + data).then((res) => {
                setUsers(res);
            })
        }
        else {
            axiosGet("/Order?sortBy=createdAt&order=desc").then((res) => {
                setUsers(res);
            })
        }
    }
    const [input, setInput] = useState("");
    useEffect(() => {
        const timeOutId = setTimeout(() => loadData(input), 1000);
        return () => clearTimeout(timeOutId);
    }, [input])

    const onClickXuLy = (id, value, item) => {
        if (item.isDuyet === true) {
            toast.error("Hợp đồng đã duyệt trước đó");
            return;
        }
        if (item.isDuyet === false) {
            toast.error("Hợp đồng đã hủy duyệt trước đó");
            return;
        }
        setModal(true);
        setData({ id: id, status: value, data: item });
    }
    const closeModal = () => {
        setModal(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "400px", height: "130px"
        },
    };
    const duyet = async () => {
        setLoading(true);
        let resHis = await axiosPost("/history", {
            idUser: data.data.idUser,
            createdAt: new Date(),
            idOrder: data.id,
            name: data.data.name,
            phone: data.data.name,
            soTien: data.data.soTien,
            soThang: data.data.soThang,
            moTa: data.status === true ?
                `+${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.data.soTien)} duyệt hợp đồng vay số #${data.id}`
                : `Hủy duyệt hợp đồng vay số #${data.id}`,
            isDuyet: data.status
        })
        if (resHis) {
            let res = await axiosPut("/Order/" + data.id, {
                isDuyet: data.status
            })
            if (res) {

                let vl = _.cloneDeep(users);
                vl.map((item) => {
                    if (item.id === data.id) {
                        item.isDuyet = data.status
                    }
                })
                setUsers(vl);
            }
            setModal(false);
            setLoading(false);
            toast.success('Thao tác thành công!')
        }
    }
    return (
        <div className="mt-5 pt-5">
            <div className="d-flex justify-content-between  align-items-center">
                <p style={{ fontWeight: "bold" }}>Danh sách hợp đồng vay</p>
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Tìm kiếm" />
            </div>

            <div className="shadow mt-3" style={{ height: "700px", maxheight: "700px", overflow: 'auto' }} >
                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Tên khách vay</th>
                            <th scope="col">Điện thoại</th>
                            <th scope="col">Ngày vay</th>
                            <th scope="col">Số tiền</th>
                            <th scope="col">Số tháng</th>
                            <th scope="col" style={{ maxWidth: "60px" }}>Trạng thái</th>
                            <th scope="col">Xử lý</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((item, i) => (
                            <tr key={item.id}>
                                <th scope="row">#{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>
                                    {new Date(item.createdAt).getDate()}  - {new Date(item.createdAt).getMonth() + 1} - {new Date(item.createdAt).getFullYear()}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.soTien)}
                                </td>
                                <td>{item.soThang} tháng</td>
                                <td style={{ maxWidth: "60px" }}>
                                    <p style={{
                                        background: `${item.isDuyet === true ? "green" : item.isDuyet === false ? "red" : "yellow"}`,
                                        borderRadius: "10px"
                                    }} className="d-flex justify-content-center">
                                        {item.isDuyet === true ? "Đã duyệt" :
                                            item.isDuyet === false ? "Từ chối" : "Chờ duyệt"
                                        }
                                    </p>
                                </td>
                                <td >
                                    <i className="icofont-check p-1" style={{ cursor: "pointer", border: "1px solid green" }}
                                        onClick={() => onClickXuLy(item.id, true, item)}
                                    ></i>
                                    <i className="icofont-close-line ml-2 p-1" style={{ cursor: "pointer", border: "1px solid red" }}
                                        data-target="#exampleModal"
                                        onClick={() => onClickXuLy(item.id, false, item)}
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={modal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>Bạn có chắc chắn muốn {data.status === true ? "duyệt ?" : "từ chối ?"}</h6>
                    <div>
                        <button type="button" className="border-0 shadow-lg mt-3 pt-1 pb-1 pl-3 pr-3 mr-2"
                            onClick={() => duyet()}
                            style={{ maxHeight: '10px !important', backgroundColor: 'green' }}
                            disabled={loading === true ? true : false}
                        >Xác nhận</button>
                        <button type="button" className="border-0 shadow-lg mt-3 pt-1 pb-1 pl-3 pr-3 ml-2"
                            onClick={closeModal}
                            style={{ maxHeight: '10px !important', backgroundColor: 'white' }}
                            disabled={loading === true ? true : false}
                        >Hủy</button>
                    </div>

                </div>

            </Modal>
        </div>
    );

}

export default DanhSachVay;
