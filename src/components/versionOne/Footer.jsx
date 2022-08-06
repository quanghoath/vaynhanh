import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Footer = (props) => {
    //Support loop END
    const [index, setIndex] = useState(2);
    const onClickMenu = (value) => {
        // setIndex(value);
        // switch (value) {
        //     case 2:
        //         history.push("/");
        //         break;
        //     case 3:
        //         history.push("/contact");
        //         break;
        //     default:
        //         history.push("/");
        //         break;
        // }
    }
    return (
        <React.Fragment>
            <footer className="footer-area" style={{ boxShadow: "0px 5px 10px gray, 0px -5px 10px gray" }}>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 col-sm-1 col-lg-1 col-md-1 text-center" >
                                <a href="https://zalo.me/0908676629" target="_blank">
                                    <i className="icofont-headphone-alt-2 icofont-2x"></i>
                                    <p>CSKH</p>
                                </a>
                            </div>
                            <div className={`col-8 col-sm-10 col-lg-10 col-md-10 text-center`}>
                                <div onClick={() => { onClickMenu(2) }}>
                                    <NavLink to="/home" activeStyle={{
                                        color: "green"
                                    }}>
                                        <i className="icofont-home icofont-2x"></i>
                                        <p>Trang chủ</p> </NavLink>
                                </div>
                            </div>
                            <div className={`col-2 col-sm-1 col-lg-1 col-md-1 text-center`}>
                                <div onClick={() => { onClickMenu(3) }}>
                                    <NavLink to="/login"
                                        activeStyle={{
                                            color: "green"
                                        }}
                                    >
                                        <i className="icofont-user-alt-3 icofont-2x"></i>
                                        <p>Tôi</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );

}

//Props Types
Footer.propTypes = {
    siteDescription: PropTypes.string,
    btnText: PropTypes.string,
    btnLink: PropTypes.string,

    usefullLinksTitle: PropTypes.string,

    supportTitle: PropTypes.string,
    supportsLinks: PropTypes.array,

    contactInfoTitle: PropTypes.string,
    contactInfoText: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,

    fbLink: PropTypes.string,
    twitterlLink: PropTypes.string,
    instagramlLink: PropTypes.string,
    linkedinlLink: PropTypes.string,
    vimeolLink: PropTypes.string
};

//Default Props
Footer.defaultProps = {
    siteDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. sed do eiusmod tempor incididunt ut, tempor incididunt ut.",
    btnText: "Read More",
    btnLink: "#",

    usefullLinksTitle: "Useful Links",

    supportTitle: "Support",
    supportsLinks: [
        {
            Name: "Career",
            Link: "#"
        },
        {
            Name: "Support",
            Link: "#"
        },
        {
            Name: "Resource",
            Link: "#"
        },
        {
            Name: "Strategy",
            Link: "#"
        },
        {
            Name: "FAQ",
            Link: "#"
        },
        {
            Name: "Contact",
            Link: "#"
        }
    ],

    contactInfoTitle: "Contact Info",
    contactInfoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    address: "2750 Quadra Street , Park Area, Victoria, Canada.",
    phone: "+(00) 01245687",
    email: "support@axolot.com",

    copyRightText: "Copyright \u00a9 2020 All Rights Reserved.",
    fbLink: "#",
    twitterlLink: "#",
    instagramlLink: "#",
    linkedinlLink: "#",
    vimeolLink: "#"
};
export default Footer;
