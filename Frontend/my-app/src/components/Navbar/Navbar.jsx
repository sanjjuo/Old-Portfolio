import React, { useState } from 'react'
import "../Home/Home.css"
import "../Responsive.css"
import { Navbar, Nav, Container, Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { HiMenuAlt3 } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXmark, FaXTwitter } from "react-icons/fa6";
import ReactWhatsapp from 'react-whatsapp';

const MyNavbar = () => {
    const [menu, setMenu] = useState(false);
    const [navLink, setNavLink] = useState("home")
    const [offcanvas, setOffcanvas] = useState(false)

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
                            <span className="navbar-menu">{!menu ? <HiMenuAlt3 size={30} /> : <FaXmark size={30} />}</span>
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


            <section className="mobile-navbar-section">
                <ul>
                    <li>sanjeed.</li>
                    <li onClick={() => {setOffcanvas(true); handleMenu;}}>{!menu ? <HiMenuAlt3 size={30} /> : <FaXmark/> }</li>
                </ul>
                <Offcanvas className="offcanvas" show={offcanvas} onHide={() => setOffcanvas(false)} placement="start">
                    <Offcanvas.Header className='p-0'>
                        <Offcanvas.Title className='offcanvas-title'>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='offcanvas-body'>
                        <div className="offcanvas-items">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Resume</li>
                                <li>Services</li>
                                <li>Skills</li>
                                <li>Works</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='social-media-icons'>
                            <ul>
                                <Link to="https://www.facebook.com/profile.php?id=100092943613170" target='_blank'><li><FaFacebookF /></li></Link>
                                <Link to="https://www.instagram.com/sanjjuo/" target='_blank'><li><FaInstagram /></li></Link>
                                <Link to="https://x.com/MohamedSanjeed1" target='_blank'><li><FaXTwitter /></li></Link>
                                <ReactWhatsapp number="+91 7902501645" message="Hello Mohamed Sanjeed!" element="div" style={{ display: "inline-block", cursor: "pointer" }}>
                                    <li><FaWhatsapp /></li>
                                </ReactWhatsapp>
                                <Link to="https://www.linkedin.com/in/mohamedsanjeed/" target='_blank'><li><FaLinkedinIn /></li></Link>
                            </ul>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </section>
        </div>
    )
}

export default MyNavbar
