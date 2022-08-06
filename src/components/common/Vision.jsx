import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Vision extends Component {
    render() {
        const visionDataTabTitle = this.props.visionsData.map(
            (vision, index) => (
                <Tab key={index}>
                    <i className={vision.icon} />
                    <br />
                    {vision.title}
                </Tab>
            )
        );

        const visionDataTab = this.props.visionsData.map((vision, index) => (
            <React.Fragment key={index}>
                {index % 2 === 0 ? (
                    <TabPanel>
                        <div className="tabs_item">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tabs_item_content mt-0">
                                        <h3>{vision.title}</h3>
                                        <p>{vision.description}</p>
                                        <ul>
                                            {vision.listItemOne && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemOne}
                                                </li>
                                            )}
                                            {vision.listItemTwo && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemTwo}
                                                </li>
                                            )}
                                            {vision.listItemThree && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemThree}
                                                </li>
                                            )}
                                            {vision.listItemFour && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemFour}
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="tabs_item_img">
                                        <img src={vision.image} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                ) : (
                    <TabPanel>
                        <div className="tabs_item">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tabs_item_img">
                                        <img src={vision.image} alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="tabs_item_content mb-0">
                                        <h3>{vision.title}</h3>
                                        <p>{vision.description}</p>
                                        <ul>
                                            {vision.listItemOne && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemOne}
                                                </li>
                                            )}
                                            {vision.listItemTwo && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemTwo}
                                                </li>
                                            )}
                                            {vision.listItemThree && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemThree}
                                                </li>
                                            )}
                                            {vision.listItemFour && (
                                                <li>
                                                    <i className="icofont-ui-check" />
                                                    {vision.listItemFour}
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                )}
            </React.Fragment>
        ));

        return (
            <React.Fragment>
                <section className="vision-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="tab">
                                    <div className="tab_content">
                                        <Tabs>
                                            <TabList>
                                                {visionDataTabTitle}
                                            </TabList>

                                            {visionDataTab}
                                        </Tabs>
                                    </div>
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
Vision.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    visionsData: PropTypes.array
};

//Default Props
Vision.defaultProps = {
    sectionName: "",
    sectionTitle: "",
    sectionDescription: "",

    visionsData: [
        {
            image: require("../../assets/img/1.png"),
            icon: "icofont-laptop",
            title: "User Experience",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/2.png"),
            icon: "icofont-ruler-pencil-alt-2",
            title: "Product Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/3.png"),
            icon: "icofont-marker-alt-1",
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/1.png"),
            icon: "icofont-light-bulb",
            title: "Branding",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/4.png"),
            icon: "icofont-laptop-alt",
            title: "Development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/2.png"),
            icon: "icofont-infant-nipple",
            title: "Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        }
    ]
};
export default Vision;
