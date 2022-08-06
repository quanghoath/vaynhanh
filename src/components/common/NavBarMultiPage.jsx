import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";

class NavBarMultiPage extends Component {
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
                        <LinkContainer exact to="/">
                            <Navbar.Brand className="navbar-brand">
                                Axo<span>lot</span>
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn"
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Dropdown>
                                    <NavDropdown title="Home" id="nav-dropdown">
                                        <LinkContainer exact to="/">
                                            <NavDropdown.Item>
                                                Home Version One
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/home-two">
                                            <NavDropdown.Item>
                                                Home Version Two
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/home-three">
                                            <NavDropdown.Item>
                                                Home Version Three
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/home-four">
                                            <NavDropdown.Item>
                                                Home Version Four
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/home-five">
                                            <NavDropdown.Item>
                                                Home Version Five
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/home-six">
                                            <NavDropdown.Item>
                                                Home Version Six
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer 
                                            to="/home-seven"
                                            onClick={() => window.location.reload()}
                                        >
                                            <NavDropdown.Item>
                                                Home Version Seven
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/one-page-template">
                                            <NavDropdown.Item>
                                                One Page Template
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                </Dropdown>

                                <Dropdown>
                                    <NavDropdown title="Pages" id="nav-dropdown">
                                        <LinkContainer to="/about">
                                            <NavDropdown.Item>About</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/services">
                                            <NavDropdown.Item>Services</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/team">
                                            <NavDropdown.Item>Team</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/pricing">
                                            <NavDropdown.Item>Pricing</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                </Dropdown>

                                <LinkContainer to="/about">
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/services">
                                    <Nav.Link>Services</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/team">
                                    <Nav.Link>Team</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/faq">
                                    <Nav.Link>Faq</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/pricing">
                                    <Nav.Link>Pricing</Nav.Link>
                                </LinkContainer>                                  

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

export default NavBarMultiPage;
