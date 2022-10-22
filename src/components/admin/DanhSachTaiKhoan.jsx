import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { axiosGet, axiosPut } from '../../axiosClient';
import _ from 'lodash';
const DanhSachTaiKhoan = (props) => {
    const [users,setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const loadData = (data)=>{
        if (data !== ""){
            axiosGet("/user?sortBy=createdAt&order=desc&search=" + data).then((res) => {
                setUsers(res);
            })
        }
        else{
            axiosGet("/user?sortBy=createdAt&order=desc").then((res) => {
                setUsers(res);
            })
        }
    }
    const [input, setInput] = useState("");
    useEffect(() => {
        const timeOutId = setTimeout(() => loadData(input), 1000);
        return () => clearTimeout(timeOutId);
    }, [input])

    const closeModal = () => {
        setModal(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "800px", height: "700px"
        },
    };
    const onClickEdit = (item) => {
        setModal(true);
        setData(item);
    }
    const onChangeInput = (e, type) => {
        let vl = _.cloneDeep(data);
        vl[type] = e.target.value;
        setData(vl);
    }
    const saveUser =async ()=>{
        setLoading(true);
        let res = await axiosPut("/user/" + data.id, {
            ...data
        });
        if(res){
            let vl = _.cloneDeep(users);
            vl.map((item) => {
                if (item.id === data.id) {
                    let key = Object.keys(item);
                    for(let prop of key){
                        item[prop] = data[prop];
                    }
                    return item
                }
            })
            setUsers(vl);
            setModal(false);
            toast.success("Lưu thành viên thành công!");
        }
        setLoading(false);
    }
    
    return (
        <div className="mt-5 pt-5">
            <div className="d-flex justify-content-between  align-items-center">
                <p style={{ fontWeight: "bold" }}>Danh sách tài khoản</p>
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="Tìm kiếm" />
            </div>
            <div className="shadow mt-3" style={{height:"700px",maxheight:"700px",overflow:'auto'}} >
                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Điện thoại</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Số CMND/CCCD</th>
                            <th scope="col">Ngân Hàng</th>
                            <th scope="col">Số tài khoản</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((item,i)=>(
                            <tr key={item.id}>
                                <th scope="row">#{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.soCMND}</td>
                                <td>{item.tenNganHang}</td>
                                <td>{item.soTKNganHang}</td>
                                <td>
                                    <i className="icofont-ui-edit p-1" style={{ cursor: "pointer", border: "1px solid green" }}
                                        onClick={() => onClickEdit(item)}
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6 className="pb-3">Sửa thông tin người dùng</h6>
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="form-group col-6">
                                    <label style={{ fontWeight: 'bold' }}>Họ và tên</label>
                                    <input type="text" className="form-control"
                                        value={data.name}
                                        onChange={(e) => onChangeInput(e, "name")}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label style={{ fontWeight: 'bold' }}>Địa chỉ</label>
                                    <input type="text" className="form-control"
                                        value={data.address}
                                        onChange={(e) => onChangeInput(e, "address")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Số CMND</label>
                                    <input type="text" className="form-control"
                                        value={data.soCMND}
                                        onChange={(e) => onChangeInput(e, "soCMND")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Giới tính</label>
                                    <input type="text" className="form-control"
                                        value={data.sex}
                                        onChange={(e) => onChangeInput(e, "sex")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Ngày sinh</label>
                                    <input type="date" className="form-control"
                                        value={data.birthday}
                                        onChange={(e) => onChangeInput(e, "birthday")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Nghề nghiệp</label>
                                    <input type="text" className="form-control"
                                        value={data.job}
                                        onChange={(e) => onChangeInput(e, "job")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Thu nhập</label>
                                    <input type="text" className="form-control"
                                        value={data.thuNhap}
                                        onChange={(e) => onChangeInput(e, "thuNhap")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Mục đích vay</label>
                                    <input type="text" className="form-control"
                                        value={data.mucDichVay}
                                        onChange={(e) => onChangeInput(e, "mucDichVay")}
                                    />
                                </div>
                                <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                    <p>Liên hệ người thân (Vợ chồng, anh chị ...)</p>
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Tên</label>
                                    <input type="text" className="form-control"
                                        value={data.tenNguoiThan}
                                        onChange={(e) => onChangeInput(e, "tenNguoiThan")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Số điện thoại</label>
                                    <input type="text" className="form-control"
                                        value={data.sdtNguoiThan}
                                        onChange={(e) => onChangeInput(e, "sdtNguoiThan")}
                                    />
                                </div>
                                <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                    <p>Liên hệ với bạn bè</p>
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Tên</label>
                                    <input type="text" className="form-control"
                                        value={data.tenBanBe}
                                        onChange={(e) => onChangeInput(e, "tenBanBe")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Số điện thoại</label>
                                    <input type="text" className="form-control"
                                        value={data.sdtBanBe}
                                        onChange={(e) => onChangeInput(e, "sdtBanBe")}
                                    />
                                </div>
                                <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                    <p>Tài khoản ngân hàng</p>
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Tên ngân hàng</label>
                                    <input type="text" className="form-control"
                                        value={data.tenNganHang}
                                        onChange={(e) => onChangeInput(e, "tenNganHang")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Số TK ngân hàng</label>
                                    <input type="text" className="form-control"
                                        value={data.soTKNganHang}
                                        onChange={(e) => onChangeInput(e, "soTKNganHang")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Tên tài khoản</label>
                                    <input type="text" className="form-control"
                                        value={data.tenTK}
                                        onChange={(e) => onChangeInput(e, "tenTK")}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div>
                        <button type="button" className="border-0 shadow-lg mt-3 pt-1 pb-1 pl-3 pr-3 mr-2"
                            onClick={() => saveUser()}
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

export default DanhSachTaiKhoan;
