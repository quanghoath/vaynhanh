import React, { useState } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

const Features = (props) => {
    const [index, setIndex] = useState(1);
    const [money, setMoney] = useState(40000000);
    //Features loop END
    const onClickChange = (value) => {
        setIndex(value);
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
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 1 ? "bg-success" : "bg-primary"} mr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(1)}
                        >
                            3 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 2 ? "bg-success" : "bg-primary"} mr-1`}
                            style={{ cursor: "pointer" }} onClick={() => onClickChange(2)}>
                            6 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 3 ? "bg-success" : "bg-primary"} mr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(3)}
                        >
                            12 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 4 ? "bg-success" : "bg-primary"} mr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(4)}
                        >
                            18 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 5 ? "bg-success" : "bg-primary"} mr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(5)}
                        >
                            24 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 6 ? "bg-success" : "bg-primary"} mr-1`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(6)}
                        >
                            36 tháng
                        </div>
                        <div className={`col col-sm rounded-top text-light font-weight-bold text-center pt-3 pb-3 item-month-features
                         ${index === 7 ? "bg-success" : "bg-primary"}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onClickChange(7)}
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
                                    onClick={() => { setMoney((Number(money) - 2000000) < 40000000 ? 40000000 : (Number(money) - 2000000)) }}>
                                    <i className="icofont-minus-circle h3" style={{ cursor: "pointer" }} />
                                </div>
                                <div className="col-8 col-sm-10 pt-1">
                                    <input type="range" className="form-control-range slider" id="formControlRange"
                                        min="40000000" max="2000000000" step="1000000" value={money}
                                        onChange={(e) => { setMoney(e.target.value) }}
                                    />
                                </div>
                                <div className="col-2 col-sm-1 text-left"
                                    onClick={() => { setMoney((Number(money) + 2000000) > 2000000000 ? 2000000000 : (Number(money) + 2000000)) }}>
                                    <i className="icofont-plus-circle h3" style={{ cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12  text-center mt-3" style={{ backgroundColor: "#e6e9cd" }}>
                            <p className="text-dark  pt-2 pb-2">Trả nợ định kỳ: 13.653.333 đ  | Bao gồm cả lãi suất hằng ngày</p>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center mt-3">
                        <button type="button" className="btn btn-success font-weight-bold">Nộp đơn ngay lập tức</button>
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
