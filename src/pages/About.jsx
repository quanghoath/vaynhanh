import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Footer from "../components/common/Footer";
 
class About extends React.Component {
    render(){
        const aboutData = this.props.aboutsData.map((about, index) => (
            <React.Fragment key={index}>
                {index % 2 === 0 ? (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mb-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mt-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        ));
        return (
            <React.Fragment>
                <NavBarMultiPage pageName="contact" />
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
                                        <li>About</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="about" className="about-area ptb-50">
                    <div className="container">
                        <div className="section-title">
                            <h3>We provide best service for you customers</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h3>{this.props.aboutTitle}</h3>
                                    <p>{this.props.aboutDescription}</p>
                                    <ul className="pull-left">
                                        {this.props.aboutListItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemOne}
                                            </li>
                                        )}

                                        {this.props.aboutListItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemTwo}
                                            </li>
                                        )}
                                        {this.props.aboutListItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemThree}
                                            </li>
                                        )}
                                        {this.props.aboutListItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFour}
                                            </li>
                                        )}
                                    </ul>
                                    <ul>
                                        {this.props.aboutListItemFive && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFive}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSix && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSix}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSeven && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSeven}
                                            </li>
                                        )}
                                        {this.props.aboutListItemEight && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemEight}
                                            </li>
                                        )}
                                    </ul>
                                    <a
                                        href={this.props.aboutBtnLink}
                                        className="btn btn-primary"
                                    >
                                        {this.props.aboutBtnText}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img
                                        src={this.props.aboutImage}
                                        alt="about"
                                    />
                                </div>
                            </div>
                        </div>
                        {aboutData}
                    </div>
                </section>
                <Footer pageName="contact" />
            </React.Fragment>
        );
    }
}

//Props Types
About.propTypes = {
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
About.defaultProps = {
    aboutImage: require("../assets/img/about.png"),
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
            image: require("../assets/img/1.png"),
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
            image: require("../assets/img/2.png"),
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
            image: require("../assets/img/3.png"),
            position: ".03",
            title: "All In one for all products",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            blockQuote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            image: require("../assets/img/4.png"),
            position: ".04",
            title: "We provide proffesional staff",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            blockQuote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
    ]
};
 
export default About;