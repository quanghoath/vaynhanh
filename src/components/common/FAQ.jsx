import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "react-sanfona";

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="faq" className="faq-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="faq">
                                    <Accordion
                                        rootTag="ul"
                                        className="accordion"
                                    >
                                        {this.props.faqData.map(item => {
                                            return (
                                                <AccordionItem
                                                    key={item}
                                                    title={item.title}
                                                    expanded={true}
                                                    expandedClassName="active"
                                                    rootTag="li"
                                                    className="accordion-item"
                                                    titleTag="a"
                                                    titleClassName="accordion-title"
                                                >
                                                    <div>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="faq-img">
                                    <img
                                        src={this.props.sectiomImage}
                                        alt="faq"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Faq.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    sectiomImage: PropTypes.string,
    faqData: PropTypes.array
};

//Default Props
Faq.defaultProps = {
    sectionName: "FAQ",
    sectionTitle: "Frequently Asked Question",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sectiomImage: require("../../assets/img/about.png"),

    faqData: [
        {
            title: "How do permissions work in Google Play Instant?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Is Smart Lock required for instant apps?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Can I have multiple activities in a single feature?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Can I share resources between features?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Is multidex supported for instant apps?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Can I share resources between features?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
        }
    ]
};

export default Faq;
