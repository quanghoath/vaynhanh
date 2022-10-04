import React, { useState, useEffect, useRef } from "react";
import { axiosPost, } from '../axiosClient';
import toast from 'react-hot-toast';
import { useHistory, useLocation } from "react-router-dom";

import _ from 'lodash';
const XacNhanVay = (props) => {
    // const [user, setUser] = useState([]);
    const [data, setData] = useState({});
    const history = useHistory();
    const param = useLocation();
    useEffect(() => {
        // let userToken = JSON.parse(localStorage.getItem('user'));
        // axiosGet("/user/" + userToken.id).then((res) => {
        //     setUser(res);
        // })
        setData(param.state.item)
    }, [param])
    const onChangeSlect = (e) => {
        let vl = Number(e.target.value);
        setData({
            soThang: vl,
            soTien: data.soTien
        })
    }
    const [loading, setLoading] = useState(false);
    const submit = async () => {
        if (data.soTien > 500000000) {
            toast.error('Số tiền không được lớn hơn: 500.000.000 đ')
            return;
        }
        if (data.soTien < 20000000) {
            toast.error('Số tiền không được nhỏ hơn: 20.000.000 đ')
            return;
        }
        setLoading(true);
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            await axiosPost("/Order", {
                phone: user.phone,
                name: user.name,
                createdAt: new Date(),
                idUser: user.id,
                soTien: data.soTien,
                soThang: data.soThang
            })
            toast.success('Đăng ký vay thành công!')
            history.push('/home');
        }
        else {
            toast.error('Vui lòng đăng nhập!')
        }
        setLoading(false);
    }
    const onChangeMoney = (v) => {
        let _data = _.cloneDeep(data);
        _data.soTien = v;
        setData(_data);
    }
    return (
        <React.Fragment>
            <div className="" style={{ height: "100%" }}>
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
                        <p onClick={() => history.push('/home')}><i class="icofont-bubble-left icofont-3x"></i></p>
                        <p className="font-weight-bold">Xác nhận vay</p>

                    </div>
                </header>
                <div className="col-lg-6 col-md-12 pb-5 mt-5 pt-5" style={{
                    overflow: "auto", height: "100%",
                    background: 'rgb(34, 193, 195)',
                    backgroundImage: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
                }}>
                    <p>Số tiền vay</p>
                    <input type="number" className="form-control" required style={{ border: "1px solid" }}
                        value={data.soTien}
                        // placeholder=""
                        // disabled
                        onChange={(e) => onChangeMoney(e.target.value)}
                    />
                    <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.soTien)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Từ 20.000.000đ</p>
                        <p>Đến 500.000.000đ</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <p>Thời hạn vay</p>
                        <select style={{ width: '40%', border: '1px solid gray', padding: '3px', borderRadius: "5px" }}
                            value={data.soThang}
                            onChange={(e) => onChangeSlect(e)}
                        >
                            <option value={6}>6 tháng</option>
                            <option value={12}>12 tháng</option>
                            <option value={18}>18 tháng</option>
                            <option value={24}>24 tháng</option>
                            <option value={36}>38 tháng</option>
                            <option value={48}>48 tháng</option>
                        </select>
                    </div>
                </div>
                <div className="pb-3 mt-5 pt-3 pl-3 pr-3" style={{
                    overflow: "auto",
                    background: 'rgb(34, 193, 195)',
                    backgroundImage: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                    width: '90%',
                    margin: 'auto',
                    borderRadius: '30px'
                }}>
                    <p className="text-center font-weight-bold pb-2">Thông tin khoản vay</p>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p>Số tiền</p>
                        <p>  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.soTien)}</p>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p>Thời hạn</p>
                        <p>  {data.soThang} tháng</p>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p>Ngày vay</p>
                        <p>
                            {new Date().getDate()}  - {new Date().getMonth() + 1} - {new Date().getFullYear()}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p>Hình thức thanh toán</p>
                        <p>Trả góp mỗi tháng</p>
                    </div>
                </div>
                <div className="pb-3 mt-1 pt-3 pl-3 pr-3" style={{
                    overflow: "auto",
                    width: '90%',
                    margin: 'auto',
                    borderRadius: '30px'
                }}>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p>Trợ nợ đầu kỳ</p>
                        <p>0 VND</p>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <p>Lãi suất hàng tháng</p>
                        <p>0.85 %</p>
                    </div>
                    <div className="col-sm-12 text-center mt-3">
                        <button type="button" className="btn btn-success font-weight-bold"
                            disabled={loading ? true : false}
                            onClick={() => submit()}>Xác nhận khoản vay</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}
export default XacNhanVay;
