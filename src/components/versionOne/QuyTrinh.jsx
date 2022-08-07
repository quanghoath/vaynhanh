import React from "react";
import PropTypes from "prop-types";

const QuyTrinh =(props)=> {
        //Works Data Loop Start
        const workdays = props.worksData.map((work, index) => (
            <div
                className={
                    (index + 1) % 4 === 0
                        ? "col-lg-3 col-md-6 offset-lg-0 offset-md-3 item-quy-trinh"
                        : "col-lg-3 col-md-6  item-quy-trinh"
                }
                key={index}
                style={{minHeight:'300px'}}
            >
                <div
                    className={
                        (index + 1) % 4 === 0
                            ? "single-box  item-quy-trinh"
                            : "single-box with-line  item-quy-trinh"
                    } style={{ minHeight: '300px' }}
                >
                    <span>{work.position}</span>
                    <h3>{work.heading}</h3>
                    <p>{work.description}</p>
                </div>
            </div>
        ));
        //Works Data Loop END

        return (
            <React.Fragment>
                <section className="how-works-area ptb-100">
                    <div className="container">
                        <div className="row">{workdays}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    
}

//Props Types
QuyTrinh.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    worksData: PropTypes.array
};

//Default Props
QuyTrinh.defaultProps = {
    sectionName: "Works",
    sectionTitle: "How It Works",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    worksData: [
        {
            position: "01.",
            heading: "Đăng ký vay",
            description:
                "Hoàn tất điền thông tin trong 1 phút"
        },
        {
            position: "02.",
            heading: "Kết nối",
            description:
                "Ngay lập tức người cho vay sẽ nhận được đơn xin vay của bạn"
        },
        {
            position: "03.",
            heading: "Xét duyệt",
            description:
                "Nhận kết quả nhanh chóng sau khi gửi hồ sơ"
        },
        {
            position: "04.",
            heading: "Nhận tiền",
            description:
                "Tiền sẽ được chuyển vào tài khoản của bạn hoặc nhận tiền mặt"
        }
    ]
};
export default QuyTrinh;
