import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Footer from "../components/common/Footer";
 
class Pricing extends React.Component {
    render(){
        //Price loop start
        const priceData = this.props.pricesData.map((pricedata, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="pricingTable">
                    <h3 className="title">{pricedata.planName}</h3>
                    <div className="price-value">
                        {pricedata.price}
                        <span className="month">{pricedata.duration}</span>
                    </div>
                    <ul className="pricing-content">
                        {pricedata.contentOne && (
                            <li>{pricedata.contentOne}</li>
                        )}
                        {pricedata.contentTwo && (
                            <li>{pricedata.contentTwo}</li>
                        )}
                        {pricedata.contentThree && (
                            <li>{pricedata.contentThree}</li>
                        )}
                        {pricedata.contentFour && (
                            <li>{pricedata.contentFour}</li>
                        )}
                        {pricedata.contentFive && (
                            <li>{pricedata.contentFive}</li>
                        )}
                    </ul>
                    <a href={pricedata.link} className="btn btn-primary">
                        Select Plan
                    </a>
                </div>
            </div>
        ));
        //Price loop END
        return (
            <React.Fragment>
                <NavBarMultiPage pageName="pricing" />
                <div className="page-title">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h3>{this.props.sectionName}</h3>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <i className="icofont-thin-right" />
                                        </li>
                                        <li>Pricing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="pricing" className="pricing-area bg-gray ptb-100">
                    <div className="container">
                        <div className="row">{priceData}</div>
                    </div>
                </section>
                <Footer pageName="pricing" />
            </React.Fragment>
        );
    }
}

//Props Types
Pricing.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    pricesData: PropTypes.array
};

//Default Props
Pricing.defaultProps = {
    pricesData: [
        {
            planName: "Basic Plan",
            price: "$29.00",
            duration: "/month",
            contentOne: "Unlimited Reservations",
            contentTwo: "6 Clients and Products",
            contentThree: "Housekeeping Status",
            contentFour: "Invoicing and Payments",
            contentFive: "Data Security and Backups",
            link: "#0"
        },
        {
            planName: "Advanced Plan",
            price: "$49.00",
            duration: "/month",
            contentOne: "Unlimited Reservations",
            contentTwo: "6 Clients and Products",
            contentThree: "Housekeeping Status",
            contentFour: "Invoicing and Payments",
            contentFive: "Data Security and Backups",
            link: "#0"
        },
        {
            planName: "Expert Plan",
            price: "$69.00",
            duration: "/month",
            contentOne: "Unlimited Reservations",
            contentTwo: "6 Clients and Products",
            contentThree: "Housekeeping Status",
            contentFour: "Invoicing and Payments",
            contentFive: "Data Security and Backups",
            link: "#0"
        }
    ]
};
 
export default Pricing;