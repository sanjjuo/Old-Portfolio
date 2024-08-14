import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';
import "../components/Home.css"
import "../components/Responsive.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Slider from "react-slick";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";
import { FaMapSigns } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

    const [resume, setResume] = useState("education")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(false);
    const [navLink, setNavLink] = useState("home")

    const handleMenu = () => {
        setMenu(!menu)
    }

    const sendMail = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { data } = await axios.post("http://localhost:4000/send/mail", {
                name,
                email,
                message,
            },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )
            setName("")
            setEmail("")
            setMessage("")
            toast.success(data.message);
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error("Error:", error);
            toast.error(error.response.data.message);
        }
    }

    const settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]
    };

    const now = 70;
    const now1 = 80;
    const now2 = 50;
    const now3 = 85;
    const now4 = 82;
    const now5 = 65;
    const now6 = 65;

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

            <section className="home-section" id='home'>
                <div className="home-contents-with-image">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contents">
                                <h1>hello!</h1>
                                <h2>I'm <span>Mohamed Sanjeed</span></h2>
                                <p>A Freelance React.js developer</p>
                                <div className="button-container">
                                    <button type="button" className="btn1">hire me</button>
                                    <button type="button" className="btn" style={{ margin: "0" }}>download CV</button>
                                </div>
                                <div className="social-media-icons">
                                    <ul>
                                        <li><FaFacebookF /></li>
                                        <li><FaInstagram /></li>
                                        <li><FaXTwitter /></li>
                                        <li><FaWhatsapp /></li>
                                        <li><FaLinkedinIn /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-person-image">
                                <img src="bg_1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-contents-with-image2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contents">
                                <h1>hello!</h1>
                                <h2>I'm a <span>React.js developer</span> based in India</h2>
                                <div className="button-container">
                                    <button type="button" className="btn1">hire me</button>
                                    <button type="button" className="btn" style={{ margin: "0" }}>download CV</button>
                                </div>
                                <div className="social-media-icons">
                                    <ul>
                                        <li><FaFacebookF /></li>
                                        <li><FaInstagram /></li>
                                        <li><FaXTwitter /></li>
                                        <li><FaWhatsapp /></li>
                                        <li><FaLinkedinIn /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-person-image">
                                <img src="bg_2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mobile-home-section">
                <div className="home-contents-with-image">
                    <div className="home-person-image">
                        <img src="bg_1.png" alt="" />
                    </div>
                    <div className="contents">
                        <h1>hello!</h1>
                        <h2>I'm <span>Mohamed Sanjeed</span></h2>
                        <p>A Freelance React.js developer</p>
                        <div className="button-container">
                            <button type="button" className="btn1">hire me</button>
                            <button type="button" className="btn" style={{ margin: "0" }}>download CV</button>
                        </div>
                    </div>
                </div>

                <div className="home-contents-with-image2">
                    <div className="home-person-image">
                        <img src="bg_2.png" alt="" />
                    </div>
                    <div className="contents">
                        <h1>hello!</h1>
                        <h2>I'm a <span>React.js developer</span> based in India</h2>
                        <div className="button-container">
                            <button type="button" className="btn1">hire me</button>
                            <button type="button" className="btn" style={{ margin: "0" }}>download CV</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-section' id='about'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="image">
                                <img src="bg_1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h1>about me</h1>
                            <p>I'm React.js developer having 6 months of experince based in India. Gained some hands-on experince in react.js and created some numerous projects.
                            </p>
                            <ul>
                                <li className='d-flex'>
                                    <span>Name:</span>
                                    <span>Mohamed Sanjeed K</span>
                                </li>
                                <li className='d-flex'>
                                    <span>Date of birth:</span>
                                    <span>October 22, 2001</span>
                                </li>
                                <li className='d-flex'>
                                    <span>Address:</span>
                                    <span>Malappuram, Kerala, India</span>
                                </li>
                                <li className='d-flex'>
                                    <span>Zip code:</span>
                                    <span>679324</span>
                                </li>
                                <li className='d-flex'>
                                    <span>Email:</span>
                                    <span>sanjeedofficial22@gmail.com</span>
                                </li>
                                <li className='d-flex'>
                                    <span>Phone:</span>
                                    <span>+91 7902501645</span>
                                </li>
                            </ul>
                            <div className="about-button">
                                <button type="button" className="btn">download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='resume-section' id='resume'>
                <h1>resume</h1>
                <div className="container p-0">
                    <ul>
                        <li onClick={() => setResume("education")}>education</li>
                        <li onClick={() => setResume("experience")}>experience</li>
                    </ul>
                </div>
                {resume === "education" && (
                    <div className="education-cards">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <h3>May 2023 - Aug 2023</h3>
                                    <h5>Mern Stack Course</h5>
                                    <h6>techmindz infopark</h6>
                                    <p>Completed Mern stack course from Techmindz Infopark. Studied the wide knowledge of Mern stack technology and also created projects related to that technology.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <h3>2020 - 2023</h3>
                                    <h5>Bachelors of Computer Application</h5>
                                    <h6>mes kalladi college mannarkkad</h6>
                                    <p>completed BCA Mes kalladi college. And started my love for IT sector from here.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <h3>2018 - 2020</h3>
                                    <h5>State Board</h5>
                                    <h6>gvhss mankada</h6>
                                    <p>Completed Higher Secondary education from GVHSS Mankada in Science.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <h3>2014 - 2018</h3>
                                    <h5>State Board</h5>
                                    <h6>gvhss mankada</h6>
                                    <p>Completed High School education from GVHSS Mankada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {resume === 'experience' && (
                    <div className="experience-cards">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <h3>Jan 2024 - Jul 2024</h3>
                                    <h5>Jr. React.js Developer</h5>
                                    <h6>W3 Digital Agency</h6>
                                    <p>
                                        <ul>
                                            <li>Gained hands-on experience in Frontend design, Fetch
                                                API, and resolving technical challenges.
                                            </li>
                                            <li>Integrated RESTful APIs and third-party libraries to
                                                extend application functionality.
                                            </li>
                                            <li>Collaborated closely with backend developers to
                                                optimize website performance and user experience.
                                            </li>
                                            <li>Gained knowledge in various NPM packages.</li>
                                            <li>Demonstrated strong problem-solving skills and
                                                attention to detail in all tasks and projects.
                                            </li>
                                            <li>Stayed updated with React.js updates and best
                                                practices for innovative development.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <section className="services-section" id='service'>
                <h1>services</h1>
                <div className="service-cards">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><CgWebsite /></span>
                                    <h5>Frontend Development</h5>
                                    <div className="line"></div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaLaptopCode /></span>
                                    <h5>Web Development</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaDesktop /></span>
                                    <h5>full Stack Development</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><HiOutlineLightBulb /></span>
                                    <h5>Frondend Design</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaMobile /></span>
                                    <h5>fully responsive</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaBell /></span>
                                    <h5>instant upgrades</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="skills-section" id='skill'>
                <h1>my skills</h1>
                <div className="skills-bars">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <ul>
                                <li><span><h5>React js</h5><h5>{`${now}%`}</h5></span><ProgressBar className='bar' now={now} /></li>
                                <li><span><h5>Java script</h5><h5>{`${now2}%`}</h5></span><ProgressBar className='bar' now={now2} /></li>
                                <li><span><h5>Node.js</h5><h5>{`${now5}%`}</h5></span><ProgressBar className='bar' now={now5} /></li>
                                <li><span><h5>Mongo DB</h5><h5>{`${now6}%`}</h5></span><ProgressBar className='bar' now={now6} /></li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <ul>
                                <li><span><h5>Express.js</h5><h5>{`${now6}%`}</h5></span><ProgressBar className='bar' now={now6} /></li>
                                <li><span><h5>html</h5><h5>{`${now1}%`}</h5></span><ProgressBar className='bar' now={now1} /></li>
                                <li><span><h5>CSS</h5><h5>{`${now3}%`}</h5></span><ProgressBar className='bar' now={now3} /></li>
                                <li><span><h5>Bootstrap</h5><h5>{`${now4}%`}</h5></span><ProgressBar className='bar' now={now4} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="works-section" id='works'>
                <h1>my works</h1>
                <div className="work-slider">
                    <Slider {...settings1}>
                        <div className="work-item">
                            <div className="work-contents">
                                <div className="work-image">
                                    <img src="e-commerce.jpg" alt="" />
                                </div>
                                <div className="hover-description">
                                    <h4>e-commerce</h4>
                                    <p>This E-commerce website offers a wide range of products,
                                        including ID cards, chains, clothes, perfumes, shoes, and
                                        bags, catering to all your shopping needs in one place</p>
                                </div>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-contents">
                                <div className="work-image">
                                    <img src="restuarent.jpg" alt="" />
                                </div>
                                <div className="hover-description">
                                    <h4>Food-delivery website</h4>
                                    <p>A food delivery website lets users browse restaurants, place orders, and pay online,
                                        with features like order tracking, user accounts, and promotions. It’s built using React.js for
                                        the frontend and Node.js with a database like MongoDB for efficient order management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work-contents">
                                <div className="work-image">
                                    <img src="gym.jpg" alt="" />
                                </div>
                                <div className="hover-description">
                                    <h4>Gym website</h4>
                                    <p>A gym website allows users to view class schedules, book sessions, and manage memberships online. It features workout plans,
                                        trainer profiles, and integrates payment options for a seamless fitness experience.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="freelance-section">
                <div className="freelance">
                    <div className="freelance-image">
                        <img src="bg_1.jpg" alt="" />
                    </div>
                    <div className="freelance-contents">
                        <h2>I'm <span>Ready</span> for freelancing</h2>
                        <button type="button" className="btn">hire me</button>
                    </div>
                </div>
            </section>

            <section className="contact-section" id='contact'>
                <h1>contact me</h1>
                <div className="contact-icons">
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <li><FaMapSigns /></li>
                                <li><h3>address</h3></li>
                                <li><h5>Malappuram, Kerala, India</h5></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li><FaPhoneAlt /></li>
                                <li><h3>contact number</h3></li>
                                <li><h5>+91 7902501645</h5></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li><FaTelegramPlane /></li>
                                <li><h3>email address</h3></li>
                                <li><h5>sanjeedofficial22@gmail.com</h5></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="contact-image">
                                <img src="bg_1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <form className="contact-input" onSubmit={sendMail}>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' id='name' name='name' required />
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' id='email' name='email' required />
                                <textarea type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='message' id='message' name='message' cols={50} rows={7} required />
                                <button type="submit" className="btn"
                                    disabled={loading}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}
                                >{loading && <ClipLoader size={18} color='black' />}send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer-section">
                <div className="footer-contents">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-about">
                                <h3>about</h3>
                                <p>Far far away, behind the word mountains,
                                    far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                                <ul>
                                    <li><FaFacebookF /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaXTwitter /></li>
                                    <li><FaWhatsapp /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="links-footer">
                                <h3>links</h3>
                                <ul>
                                    <li><a href="#home"><span><FaArrowRightLong /></span>home</a></li>
                                    <li><a href="#about"><span><FaArrowRightLong /></span>about</a></li>
                                    <li><a href="#resume"><span><FaArrowRightLong /></span>resume</a></li>
                                    <li><a href="#service"><span><FaArrowRightLong /></span>services</a></li>
                                    <li><a href="#skill"><span><FaArrowRightLong /></span>skills</a></li>
                                    <li><a href="#works"><span><FaArrowRightLong /></span>works</a></li>
                                    <li><a href="#contact"><span><FaArrowRightLong /></span>contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="services-footer">
                                <h3>services</h3>
                                <ul>
                                    <li><span><FaArrowRightLong /></span>Frontend Development</li>
                                    <li><span><FaArrowRightLong /></span>web development</li>
                                    <li><span><FaArrowRightLong /></span>Full Stack Development</li>
                                    <li><span><FaArrowRightLong /></span>Frontend Design</li>
                                    <li><span><FaArrowRightLong /></span>Fully Responsive</li>
                                    <li><span><FaArrowRightLong /></span>Instant Upgrades</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="question-footer">
                                <h3>have a question ?</h3>
                                <ul>
                                    <li><span><FaLocationDot /></span>Malappuram, Kerala, India</li>
                                    <li><span><FaPhoneAlt /></span>+91 7902501645</li>
                                    <li><span><FaEnvelope /></span>sanjeedofficial22@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-footer">
                        Copyright ©2024 All rights reserved | This template is made with  by Colorlib
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
