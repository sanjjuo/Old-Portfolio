import React from 'react'
import "../Home/Home.css"
import { FaArrowRightLong, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
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
                                    <li><span><FaArrowRightLong /></span>App Development</li>
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

export default Footer
