import React, { useState } from 'react'
import "../Home/Home.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { ImMenu } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";

const MyNavbar = () => {
    const [menu, setMenu] = useState(false);
    const [navLink, setNavLink] = useState("home")

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <section className="navbar-section">
                <Navbar expand="lg" className="bg-body-light">
                    <Container style={{ padding: "0" }}>
                        <Navbar.Brand as={Link} to="/" href="#home">sanjeed.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenu} className="navbar-toggler">
                            <span className="navbar-menu">{!menu ? <ImMenu /> : <FaXmark />}</span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" as={Link} to="/" onClick={() => setNavLink("home")} className={navLink === "home" ? "active" : ""}>Home</Nav.Link>
                                <Nav.Link href="#about" onClick={() => setNavLink("about")} className={navLink === "about" ? "active" : ""}>about</Nav.Link>
                                <Nav.Link href="#resume" onClick={() => setNavLink("resume")} className={navLink === "resume" ? "active" : ""}>resume</Nav.Link>
                                <Nav.Link href="#service" onClick={() => setNavLink("service")} className={navLink === "service" ? "active" : ""}>services</Nav.Link>
                                <Nav.Link href="#skill" onClick={() => setNavLink("skill")} className={navLink === "skill" ? "active" : ""}>skills</Nav.Link>
                                <Nav.Link href="#works" onClick={() => setNavLink("works")} className={navLink === "works" ? "active" : ""}>works</Nav.Link>
                                <Nav.Link href="#contact" onClick={() => setNavLink("contact")} className={navLink === "contact" ? "active" : ""}>contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </div>
    )
}

export default MyNavbar
