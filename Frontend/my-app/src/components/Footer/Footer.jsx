import React from 'react'
import "../Home/Home.css"
import { FaArrowRightLong, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="footer-contents">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-about">
                                <h3>about</h3>
                                <p>Jr React Developer with 6 months of experience in designing and developing.
                                Skilled in variety of Programming languages and technologies including
                                React.js, MERN stack, React Native, HTML, CSS, JavaScript. Proficient in
                                building scalable, efficient, and user-friendly web and mobile applications.
                                Passionate about staying up-to-date with the latest technologies and best
                                practices.</p>
                                    <ul>
                                        <Link  to="https://www.facebook.com/profile.php?id=100092943613170" target='_blank'><li><FaFacebookF /></li></Link>
                                        <Link to="https://www.instagram.com/sanjjuo/" target='_blank'><li><FaInstagram /></li></Link>
                                        <Link to="https://x.com/MohamedSanjeed1" target='_blank'><li><FaXTwitter /></li></Link>
                                        <ReactWhatsapp number="+91 7902501645" message="Hello Mohamed Sanjeed!" element="div" style={{ display: "inline-block", cursor: "pointer" }}>
                                            <li><FaWhatsapp /></li>
                                        </ReactWhatsapp>
                                        <Link to="https://www.linkedin.com/in/mohamedsanjeed/" target='_blank'><li><FaLinkedinIn /></li></Link>
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
                                    <li><span><FaArrowRightLong /></span>App Development</li>
                                    <li><span><FaArrowRightLong /></span>Instant Upgrades</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="question-footer">
                                <h3>have a question ?</h3>
                                <ul>
                                    <li><span><FaLocationDot /></span><a href="https://maps.app.goo.gl/jvWw9cAePUHJcjXJ8" target='_blank' style={{textDecoration:"none", color:"inherit"}}>Malappuram, Kerala, India</a></li>
                                    <li><span><FaPhoneAlt /></span><a href="tel:+917902501645" style={{textDecoration:"none", color:"inherit"}}>+91 7902501645</a></li>
                                    <li><span><FaEnvelope /></span><a href="mailto:sanjeedofficial22@gmail.com" style={{textDecoration:"none", color:"inherit"}}>sanjeedofficial22@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-footer">
                        Copyright &copy;{new Date().getFullYear()} Mohamed Sanjeed. All rights reserved.
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
