import React from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

const Services =(props)=> {

        //Service loop END
        return (
            <React.Fragment>
                <section
                    id="services"
                    className=" bg-gray pt-5 pb-20"
                >
                    <div className="container">
                        {/* <div className="section-title">
                            <span>{props.sectionName}</span>
                            <h3>{props.sectionTitle}</h3>
                            <p>{props.sectionDescription}</p>
                        </div> */}
                        <div className="row">
                            <div className="col-sm-3 text-center text-justify">
                                <img src={require('../../assets/img/tel.png')} alt="Tel" />
                            </div>
                            <div className="col-sm-6 text-center service-tel" style={{margin:"auto"}}>
                                <h3>Tổng đài tư vấn:
                                    <span style={{ fontSize: "30px !important" }}>
                                        <i className="icofont-phone-circle pl-3 pr-3" style={{ fontSize: "30px !important" }}></i>
                                        </span>
                                    {/* onClick={() => window.open('tel:1800088875')} */}
                                    <span >
                                        <a href="tel://1800088875">1800088875</a>
                                    </span>
                                </h3>

                            </div>
                            <div className="col-sm-3 text-center " style={{ margin: "auto" }}>
                                <h5 style={{cursor:"pointer"}}><i className="icofont-plus-circle"></i> Đăng ký</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
}

//Props Types
Services.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Services.defaultProps = {
    sectionName: "Services",
    sectionTitle: "We provide best service for you customers",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};
export default Services;
