import React, { Component } from "react";
import PropTypes from "prop-types";

class Works extends Component {
    render() {
        //Works Data Loop Start
        const workdays = this.props.worksData.map((work, index) => (
            <div
                className={
                    (index + 1) % 3 === 0
                        ? "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
                        : "col-lg-4 col-md-6"
                }
                key={index}
            >
                <div
                    className={
                        (index + 1) % 3 === 0
                            ? "single-box"
                            : "single-box with-line"
                    }
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
                <section className="how-works-area bg-gray ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>

                        <div className="row">{workdays}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Works.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    worksData: PropTypes.array
};

//Default Props
Works.defaultProps = {
    sectionName: "Works",
    sectionTitle: "How It Works",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    worksData: [
        {
            position: "01.",
            heading: "Software Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            position: "02.",
            heading: "Develop",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            position: "03.",
            heading: "Product",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }
    ]
};
export default Works;
