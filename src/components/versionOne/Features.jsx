import React, { useState, useEffect } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";
import { axiosPost, axiosGet } from "../../axiosClient";
import toast from 'react-hot-toast';
import { useHistory,useParams } from "react-router-dom";

// import { v4 as uuid } from 'uuid';
const Features = (props) => {
    const [index, setIndex] = useState(6);
    const [money, setMoney] = useState(20000000);
    const [tienHangThang, setTienHangThang] = useState(0);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
   
    //Features loop END
    const onClickChange = (value) => {
        setIndex(value);
    }
    useEffect(() => {
        let tien = (Number(money) * 0.85 / 100) + (Number(money) / index)
        setTienHangThang(tien);
    }, [index, money])
    const submit =async ()=>{
        setLoading(true);
        
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            let userInfo = await axiosGet("/user/" + user.id);
            if (userInfo.isActive !== true) {
                toast.error('Vui lòng xác minh tài khoản!')
                return;
             }
             history.push('/xacnhanvay',{
                 item: {
                     phone: user.phone,
                     name: user.name,
                     createdAt: new Date(),
                     idUser: user.id,
                     soTien: money,
                     soThang: index
                 }
             })
        //    let res = await  axiosPost("/Order",{
        //         phone: user.phone,
        //         name: user.name,
        //        createdAt: new Date(),
        //         idUser: user.id,
        //         soTien: money,
        //         soThang: index
        //     })
        //     toast.success('Đăng ký vay thành công!')
        }
        else{
            toast.error('Vui lòng đăng nhập!')
        }
        setLoading(false);
    }
    return (
        <React.Fragment>
            <section
                id="features"
                className="features-area bg-gray ptb-100"
            >
                <div className="container">
                    <div className="section-title">
                        <span>{props.sectionName}</span>
                        <h3>{props.sectionTitle}</h3>
                        <p>{props.sectionDescription}</p>
                    </div>
                    {/* <div className="row">{featuredata}</div> */}
                    <div className="row">
                        {/* <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 1 ? "bg-success" : "bg-primary"} mr-1 pl-1 pr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(1)}
                        >
                            3 tháng
                        </div> */}
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 6 ? "bg-success" : "bg-primary"} mr-1 pl-1 pr-1`}
                            style={{ cursor: "pointer" }} onClick={() => onClickChange(6)}>
                            6 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 12 ? "bg-success" : "bg-primary"} mr-1 pl-1 pr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(12)}
                        >
                            12 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 18 ? "bg-success" : "bg-primary"} mr-1 pl-1 pr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(18)}
                        >
                            18 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 24 ? "bg-success" : "bg-primary"} mr-1 pl-1 pr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(24)}
                        >
                            24 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 36 ? "bg-success" : "bg-primary"} mr-1 pl-1 pr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(36)}
                        >
                            36 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 48 ? "bg-success" : "bg-primary"} pl-1 pr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(48)}
                        >
                            48 tháng
                        </div>
                    </div>
                    <div className="row border-right border-bottom border-left">
                        <h6 className="pl-5 pt-3 pb-3">Số tiền muốn vay:
                            <span className="text-success h3 pl-3">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money)}
                            </span>
                        </h6>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-2 col-sm-1  text-right "
                                    onClick={() => { setMoney((Number(money) - 2000000) < 20000000 ? 20000000 : (Number(money) - 2000000)) }}>
                                    <i className="icofont-minus-circle h3" style={{ cursor: "pointer" }} />
                                </div>
                                <div className="col-8 col-sm-10 pt-1">
                                    <input type="range" className="form-control-range slider" id="formControlRange"
                                        min="20000000" max="500000000" step="1000000" value={money}
                                        onChange={(e) => { setMoney(e.target.value) }}
                                    />
                                </div>
                                <div className="col-2 col-sm-1 text-left"
                                    onClick={() => { setMoney((Number(money) + 2000000) > 500000000 ? 500000000 : (Number(money) + 2000000)) }}>
                                    <i className="icofont-plus-circle h3" style={{ cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12  text-center mt-3" style={{ backgroundColor: "#e6e9cd" }}>
                            <p className="text-dark  pt-2 pb-2">Trả nợ định kỳ:
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tienHangThang)}
                             | Bao gồm cả lãi suất hằng ngày</p>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center mt-3">
                        <button type="button" className="btn btn-success font-weight-bold" 
                        disabled = {loading ? true : false}
                        onClick={()=>submit()}>Nộp đơn ngay lập tức</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

Features.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
};

Features.defaultProps = {
    sectionName: "Dịch vụ",
    sectionTitle: "Vay nhanh"
};
export default Features;
