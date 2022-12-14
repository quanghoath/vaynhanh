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
            toast.success("L??u th??nh vi??n th??nh c??ng!");
        }
        setLoading(false);
    }
    
    return (
        <div className="mt-5 pt-5">
            <div className="d-flex justify-content-between  align-items-center">
                <p style={{ fontWeight: "bold" }}>Danh s??ch t??i kho???n</p>
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="T??m ki???m" />
            </div>
            <div className="shadow mt-3" style={{height:"700px",maxheight:"700px",overflow:'auto'}} >
                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">H??? t??n</th>
                            <th scope="col">??i???n tho???i</th>
                            <th scope="col">?????a ch???</th>
                            <th scope="col">S??? CMND/CCCD</th>
                            <th scope="col">Ng??n H??ng</th>
                            <th scope="col">S??? t??i kho???n</th>
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
                    <h6 className="pb-3">S???a th??ng tin ng?????i d??ng</h6>
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="form-group col-6">
                                    <label style={{ fontWeight: 'bold' }}>H??? v?? t??n</label>
                                    <input type="text" className="form-control"
                                        value={data.name}
                                        onChange={(e) => onChangeInput(e, "name")}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label style={{ fontWeight: 'bold' }}>?????a ch???</label>
                                    <input type="text" className="form-control"
                                        value={data.address}
                                        onChange={(e) => onChangeInput(e, "address")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>S??? CMND</label>
                                    <input type="text" className="form-control"
                                        value={data.soCMND}
                                        onChange={(e) => onChangeInput(e, "soCMND")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Gi???i t??nh</label>
                                    <input type="text" className="form-control"
                                        value={data.sex}
                                        onChange={(e) => onChangeInput(e, "sex")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Ng??y sinh</label>
                                    <input type="date" className="form-control"
                                        value={data.birthday}
                                        onChange={(e) => onChangeInput(e, "birthday")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Ngh??? nghi???p</label>
                                    <input type="text" className="form-control"
                                        value={data.job}
                                        onChange={(e) => onChangeInput(e, "job")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>Thu nh???p</label>
                                    <input type="text" className="form-control"
                                        value={data.thuNhap}
                                        onChange={(e) => onChangeInput(e, "thuNhap")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>M???c ????ch vay</label>
                                    <input type="text" className="form-control"
                                        value={data.mucDichVay}
                                        onChange={(e) => onChangeInput(e, "mucDichVay")}
                                    />
                                </div>
                                <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                    <p>Li??n h??? ng?????i th??n (V??? ch???ng, anh ch??? ...)</p>
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>T??n</label>
                                    <input type="text" className="form-control"
                                        value={data.tenNguoiThan}
                                        onChange={(e) => onChangeInput(e, "tenNguoiThan")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>S??? ??i???n tho???i</label>
                                    <input type="text" className="form-control"
                                        value={data.sdtNguoiThan}
                                        onChange={(e) => onChangeInput(e, "sdtNguoiThan")}
                                    />
                                </div>
                                <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                    <p>Li??n h??? v???i b???n b??</p>
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>T??n</label>
                                    <input type="text" className="form-control"
                                        value={data.tenBanBe}
                                        onChange={(e) => onChangeInput(e, "tenBanBe")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>S??? ??i???n tho???i</label>
                                    <input type="text" className="form-control"
                                        value={data.sdtBanBe}
                                        onChange={(e) => onChangeInput(e, "sdtBanBe")}
                                    />
                                </div>
                                <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                    <p>T??i kho???n ng??n h??ng</p>
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>T??n ng??n h??ng</label>
                                    <input type="text" className="form-control"
                                        value={data.tenNganHang}
                                        onChange={(e) => onChangeInput(e, "tenNganHang")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>S??? TK ng??n h??ng</label>
                                    <input type="text" className="form-control"
                                        value={data.soTKNganHang}
                                        onChange={(e) => onChangeInput(e, "soTKNganHang")}
                                    />
                                </div>
                                <div className="form-group  col-6">
                                    <label style={{ fontWeight: 'bold' }}>T??n t??i kho???n</label>
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
                        >X??c nh???n</button>
                        <button type="button" className="border-0 shadow-lg mt-3 pt-1 pb-1 pl-3 pr-3 ml-2"
                            onClick={closeModal}
                            style={{ maxHeight: '10px !important', backgroundColor: 'white' }}
                            disabled={loading === true ? true : false}
                        >H???y</button>
                    </div>
                </div>

            </Modal>
        </div>
    );

}

export default DanhSachTaiKhoan;
