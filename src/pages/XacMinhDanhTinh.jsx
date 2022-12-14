import React, { useState, useEffect, useRef } from "react";
import { axiosPut, axiosGet, axiosUpload } from '../axiosClient';
import toast from 'react-hot-toast';
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import { isMobile } from 'react-device-detect';

const XacMinhDanhTinh = (props) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const refMatTruoc = useRef();
    const refMatSau = useRef();
    const refChanDung = useRef();
    useEffect(() => {
        let userToken = JSON.parse(localStorage.getItem('user'));
        axiosGet("/user/" + userToken.id).then((res) => {
            setUser(res);
        })
    }, [])
    const [matTruoc, setMatTruoc] = useState("");
    const [matSau, setMatSau] = useState("");
    const [chanDung, setChanDung] = useState("");
    const [isErrr, setIsErr] = useState(false);
    const handleFileUpload = async event => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setMatTruoc(res.url);
            let _user = Object.create(user);
            _user.cmndMatTruoc = res.url;
            setUser(_user);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                cmndMatTruoc: res.url
            })
        }
        setLoading(false);
    };
    const handleFileUploadMatSau = async event => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            let _user = Object.create(user);
            _user.cmndMatSau = res.url;
            setUser(_user);
            setMatSau(res.url);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                cmndMatSau: res.url
            })
        }
        setLoading(false);
    };
    const handleFileUploadChanDung = async event => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        formdata.append("upload_preset", "bkbompjf");
        let res = await axiosUpload(formdata);
        if (res) {
            setChanDung(res.url);
            let _user = Object.create(user);
            _user.chanDung = res.url
            setUser(_user);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                chanDung: res.url
            })
        }
        setLoading(false);
    };
    const [index, setIndex] = useState(1);
    const nextStep = () => {
        if (!user.cmndMatTruoc ||
            !user.cmndMatSau ||
            !user.chanDung) {
            setIsErr(true);
            return
        }
        setIndex(index + 1);
        if (index === 2) {
            debugger
            setIsErr(false);
            let userToken = JSON.parse(localStorage.getItem('user'));
            axiosPut("/user/" + userToken.id, {
                ...user,
                isActive: true
            });
            history.push('/xacnhanvay', {
                item: {
                    phone: user.phone,
                    name: user.name,
                    createdAt: new Date(),
                    idUser: user.id,
                    soTien: 20000000,
                    soThang: 6
                }
            });
        }
    }
    const onChangeInput = (e, type) => {
        let data = _.cloneDeep(user);
        data[type] = e.target.value;
        setUser(data);
    }
    if (isMobile) {
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
                    <div className="d-flex justify-content-between  align-items-center">

                        <p onClick={() => history.push('/login')}><i class="icofont-bubble-left icofont-3x"></i></p>
                        <p className="font-weight-bold">X??c minh danh t??nh</p>
                    </div>
                </header>
                {index === 1 ?
                    <div className="col-lg-6 col-md-12 pb-2 mt-5 pt-2" style={{ overflow: "auto" }}>
                        <input
                            ref={refMatTruoc}
                            onChange={handleFileUpload}
                            type="file"
                            style={{ display: "none" }}
                        />
                        <div className="col-md-12 shadow mt-3 pt-3 pb-3 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{
                                height: "180px",
                                backgroundImage: `url(${matTruoc.length > 0 ? matTruoc : user.cmndMatTruoc})`,
                                backgroundSize: '360px 180px',
                                backgroundRepeat: 'no-repeat',
                                border: `1px solid ${user.cmndMatTruoc ? "" : "red"}`
                            }}
                            onClick={() => refMatTruoc.current.click()}
                        >
                            {loading ? <i class="icofont-spinner icofont-3x"></i>
                                : <>  <i className="icofont-camera icofont-2x"></i>
                                    <p>M???t tr?????c CMND/CCCD</p></>
                            }

                        </div>
                        <input
                            ref={refMatSau}
                            onChange={handleFileUploadMatSau}
                            type="file"
                            style={{ display: "none" }}
                        />
                        <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{
                                height: "180px",
                                backgroundImage: `url(${matSau.length > 0 ? matSau : user.cmndMatSau})`,
                                backgroundSize: '360px 180px',
                                backgroundRepeat: 'no-repeat',
                                border: `1px solid ${user.cmndMatSau ? "" : "red"}`
                            }}
                            onClick={() => refMatSau.current.click()}

                        > {loading ? <i class="icofont-spinner icofont-3x"></i>
                            : <>  <i className="icofont-camera icofont-2x"></i>
                                <p>M???t sau CMND/CCCD</p></>
                            }

                        </div>
                        <input
                            ref={refChanDung}
                            onChange={handleFileUploadChanDung}
                            type="file"
                            style={{ display: "none" }}
                        />
                        <div className="col-md-12 shadow mt-3 pt-2 pb-2 bg-light
                    d-flex justify-content-center align-items-center flex-column" style={{
                                height: "180px",
                                backgroundImage: `url(${chanDung.length > 0 ? chanDung : user.chanDung})`,
                                backgroundSize: '180px 180px',
                                backgroundRepeat: 'no-repeat',
                                border: `1px solid ${user.chanDung ? "" : "red"}`

                            }}
                            onClick={() => refChanDung.current.click()}
                        >
                            {loading ? <i class="icofont-spinner icofont-3x"></i>
                                : <>   <i className="icofont-camera icofont-2x"></i>
                                    <p>Ch??n dung</p></>
                            }

                        </div>

                    </div>
                    :
                    <div className="col-lg-6 col-md-12 pb-2 mt-3 pt-5" style={{ overflow: "auto" }}>
                        <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                            <p>Th??ng tin c?? nh??n</p>
                        </div>
                        <form>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>H??? v?? t??n</label>
                                <input type="text" className="form-control"
                                    value={user.name}
                                    onChange={(e) => onChangeInput(e, "name")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>?????a ch???</label>
                                <input type="text" className="form-control"
                                    value={user.address}
                                    onChange={(e) => onChangeInput(e, "address")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>S??? CMND</label>
                                <input type="text" className="form-control"
                                    value={user.soCMND}
                                    onChange={(e) => onChangeInput(e, "soCMND")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Gi???i t??nh</label>
                                <input type="text" className="form-control"
                                    value={user.sex}
                                    onChange={(e) => onChangeInput(e, "sex")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Ng??y sinh</label>
                                <input type="date" className="form-control"
                                    value={user.birthday}
                                    onChange={(e) => onChangeInput(e, "birthday")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Ngh??? nghi???p</label>
                                <input type="text" className="form-control"
                                    value={user.job}
                                    onChange={(e) => onChangeInput(e, "job")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Thu nh???p</label>
                                <input type="text" className="form-control"
                                    value={user.thuNhap}
                                    onChange={(e) => onChangeInput(e, "thuNhap")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>M???c ????ch vay</label>
                                <input type="text" className="form-control"
                                    value={user.mucDichVay}
                                    onChange={(e) => onChangeInput(e, "mucDichVay")}
                                />
                            </div>
                            <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                <p>Li??n h??? ng?????i th??n (V??? ch???ng, anh ch??? ...)</p>
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>T??n</label>
                                <input type="text" className="form-control"
                                    value={user.tenNguoiThan}
                                    onChange={(e) => onChangeInput(e, "tenNguoiThan")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>S??? ??i???n tho???i</label>
                                <input type="text" className="form-control"
                                    value={user.sdtNguoiThan}
                                    onChange={(e) => onChangeInput(e, "sdtNguoiThan")}
                                />
                            </div>
                            <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                <p>Li??n h??? v???i b???n b??</p>
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>T??n</label>
                                <input type="text" className="form-control"
                                    value={user.tenBanBe}
                                    onChange={(e) => onChangeInput(e, "tenBanBe")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>S??? ??i???n tho???i</label>
                                <input type="text" className="form-control"
                                    value={user.sdtBanBe}
                                    onChange={(e) => onChangeInput(e, "sdtBanBe")}
                                />
                            </div>
                            <div className="col-12 mb-3" style={{ backgroundColor: "red", color: "white", padding: "5px 15px" }}>
                                <p>T??i kho???n ng??n h??ng</p>
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>T??n ng??n h??ng</label>
                                <input type="text" className="form-control"
                                    value={user.tenNganHang}
                                    onChange={(e) => onChangeInput(e, "tenNganHang")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>S??? TK ng??n h??ng</label>
                                <input type="text" className="form-control"
                                    value={user.soTKNganHang}
                                    onChange={(e) => onChangeInput(e, "soTKNganHang")}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>T??n t??i kho???n</label>
                                <input type="text" className="form-control"
                                    value={user.tenTK}
                                    onChange={(e) => onChangeInput(e, "tenTK")}
                                />
                            </div>
                        </form>
                    </div>
                }

                <div className="col-12">
                    {isErrr ?
                        <p style={{ color: "red" }}>Vui l??ng t???i ????? c??c ???nh</p>
                        : ""
                    }
                    <button className="col-12 btn btn-primary mt-2 mb-2" onClick={() => nextStep()}>Ti???p t???c</button>
                </div>
            </React.Fragment>
        );
    }
    else {
        return <div className="vh-100 " style={{
            width: '100%', marginTop: '10%'
        }}>
            <h3 className="text-center">Thi???t b??? kh??ng h??? tr???. Vui l??ng truy c???p b???ng ??i???n tho???i</h3>
        </div>
    }


}


export default XacMinhDanhTinh;
