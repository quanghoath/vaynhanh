import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                    <Container>
                        {this.props.pageName === "home" ? (
                            <React.Fragment>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={800}
                                    className="navbar-brand"
                                >
                                    Axo<span>lot</span>
                                </Link>
                            </React.Fragment>
                        ) : (
                            <LinkContainer exact to="/">
                                <Navbar.Brand className="navbar-brand">
                                    Axo<span>lot</span>
                                </Navbar.Brand>
                            </LinkContainer>
                        )}

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn"
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {this.props.pageName === "home" ? (
                                    <React.Fragment>
                                        <Link
                                            activeClass="active"
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            offset={-200}
                                            duration={800}
                                            className="nav-link homenav"
                                        >
                                            Home
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="features"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            Features
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            About
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="services"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            Services
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="team"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            Team
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            to="faq"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            FAQ
                                        </Link>

                                        <Link
                                            activeClass="active"
                                            to="pricing"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={800}
                                            className="nav-link"
                                            onClick={this.closeNavbar}
                                        >
                                            Pricing
                                        </Link>
                                    </React.Fragment>
                                ) : (
                                    //Contact or Other Page Navbar Start
                                    <React.Fragment>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            Home
                                        </NavLink>

                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            Features
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            Services
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            Team
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            FAQ
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/"
                                            activeClassName=""
                                        >
                                            Pricing
                                        </NavLink>
                                    </React.Fragment>
                                    //Contact or Other Page Navbar End
                                )}
                                <LinkContainer to="/contact">
                                    <Nav.Link>Contact</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;
