import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Footer from "../components/common/Footer";
 
class Services extends React.Component {
    render(){
        //Service loop start
        const servicedata = this.props.servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-services text-center">
                    <i className={service.icon} />
                    <h3>{service.heading}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        ));
        //Service loop END
        return (
            <React.Fragment>
                <NavBarMultiPage pageName="services" />
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
                                        <li>Services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="services" className="services-area ptb-50 pb-0">
                    <div className="container">
                        <div className="row">{servicedata}</div>
                    </div>
                </section>
                <Footer pageName="services" />
            </React.Fragment>
        );
    }
}

//Props Types
Services.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    servicesData: [
        {
            icon: "icofont-ruler-pencil",
            heading: "Software Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-laptop-alt",
            heading: "Web Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-brand-designfloat",
            heading: "Graphic Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-ssl-security",
            heading: "Web Secuirity",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-globe-alt",
            heading: "Online Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-letterbox",
            heading: "Branding Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
};
 
export default Services;