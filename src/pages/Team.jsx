import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Footer from "../components/common/Footer";
 
class Team extends React.Component {
    render(){
        //Team loop start
        const teamData = this.props.teamsData.map((team, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-team">
                    <div className="pic">
                        <img src={team.image} alt="team" />
                        <ul className="social-links">
                            {team.fbLink && (
                                <li>
                                    <a href={team.fbLink}>
                                        <i className="icofont-facebook" />
                                    </a>
                                </li>
                            )}

                            {team.twitterLink && (
                                <li>
                                    <a href={team.twitterLink}>
                                        <i className="icofont-twitter" />
                                    </a>
                                </li>
                            )}

                            {team.behanceLink && (
                                <li>
                                    <a href={team.behanceLink}>
                                        <i className="icofont-behance" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="team-content">
                        <h3 className="title">{team.name}</h3>
                        <span className="post">{team.designation}</span>
                    </div>
                </div>
            </div>
        ));
        //Team loop END
        return (
            <React.Fragment>
                <NavBarMultiPage pageName="team" />
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
                                        <li>Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="team" className="team-area ptb-100 pb-0">
                    <div className="container">
                        <div className="row">
                            {teamData}
                        </div>
                    </div>
                </section>
                <Footer pageName="team" />
            </React.Fragment>
        );
    }
}

//Props Types
Team.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    sectionName: "Team",
    sectionTitle: "Our Team Members",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    teamsData: [
        {
            fbLink: "",
            twitterLink: "#",
            behanceLink: "#",
            name: "John Doe",
            designation: "Web Developer",
            image: require("../assets/img/team-1.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "",
            name: "John Smith",
            designation: "Web Developer",
            image: require("../assets/img/team-2.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "",
            behanceLink: "#",
            name: "David Warner",
            designation: "Web Developer",
            image: require("../assets/img/team-3.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "#",
            name: "Steven Smith",
            designation: "Web Developer",
            image: require("../assets/img/team-4.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "#",
            name: "David Walker",
            designation: "Web Developer",
            image: require("../assets/img/team-5.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "#",
            name: "David Walker",
            designation: "Web Developer",
            image: require("../assets/img/team-5.jpg")
        }
    ]
};
 
export default Team;