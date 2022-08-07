import React from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

const ThongKe = (props) => {

    return (
        <React.Fragment>
            {/* Start About Area */}
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h3>Thống kê</h3>
                                <ul className="pull-left">
                                    <li>
                                        <i className="icofont-ui-check" />
                                        Đơn hàng mới trong ngày:
                                        <span className="h6 text-success pl-2">798</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-check" />
                                        Tổng đơn vay trên hệ thống:
                                        <span className="h6 text-success pl-2">7,177,086</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-check" />
                                        Tổng đơn đã được tư vấn:
                                        <span className="h6 text-success pl-2">5,718,653</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-check" />
                                        Tổng số tiền giải ngân:
                                        <span className="h6 text-success pl-2">87,869,096,000,000</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-check" />
                                        Số người đăng ký vay:
                                        <span className="h6 text-success pl-2">4,272,171</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-check" />
                                        Số người tham gia cho vay:
                                        <span className="h6 text-success pl-2">41,345</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img" >
                                <img style={{ maxHeight: "300px" }}
                                    src={props.aboutImage}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Area */}
        </React.Fragment>
    );

}

//Props Types
ThongKe.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutImage: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutDescription: PropTypes.string,
    aboutListItemOne: PropTypes.string,
    aboutListItemTwo: PropTypes.string,
    aboutListItemThree: PropTypes.string,
    aboutListItemFour: PropTypes.string,
    aboutListItemFive: PropTypes.string,
    aboutListItemSix: PropTypes.string,
    aboutListItemSeven: PropTypes.string,
    aboutListItemEight: PropTypes.string,
    aboutBtnText: PropTypes.string,
    aboutBtnLink: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
ThongKe.defaultProps = {
    sectionName: "About Us",
    sectionTitle: "We provide best service for you customers",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    aboutImage: require("../../assets/img/about.png"),
    aboutTitle: "We are branding strategy service from 2001 for our customers.",
    aboutDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aboutListItemOne: "Creative Design",
    aboutListItemTwo: "Retina Ready",
    aboutListItemThree: "Responsive Design",
    aboutListItemFour: "Creative Design",
    aboutListItemFive: "Modern Design",
    aboutListItemSix: "Awesome Design",
    aboutListItemSeven: "Digital Marketing & Branding",
    aboutListItemEight: "Creative Design",
    aboutBtnText: "Read More",
    aboutBtnLink: "#0",
    aboutsData: [
        {
            image: require("../../assets/img/1.png"),
            position: ".01",
            title: "Get Started with our software",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/2.png"),
            position: ".02",
            title: "Solve your problem faster",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/3.png"),
            position: ".03",
            title: "All In one for all products",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            blockQuote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            image: require("../../assets/img/4.png"),
            position: ".04",
            title: "We provide proffesional staff",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            blockQuote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
    ]
};

export default ThongKe;
