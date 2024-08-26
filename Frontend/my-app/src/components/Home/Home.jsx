import React from 'react'
import "../Home/Home.css"
import "../Responsive.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import ReactWhatsapp from "react-whatsapp"

const Home = () => {

    return (
        <div>
            <section className="home-section" id='home'>
                <div className="home-contents-with-image">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="contents">
                                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>hello!</motion.h1>
                                <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -5 }} transition={{ duration: 0.5 }}>I'm <span>Mohamed Sanjeed</span></motion.h2>
                                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>A Freelance React.js developer</motion.p>
                                <div className="button-container">
                                    <a href="#contact"><motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} type="button" className="btn1">hire me</motion.button></a>
                                    <a href="/resume.pdf" download="MohamedSanjeed_CV.pdf"><motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} type="button" className="btn" style={{ margin: "0" }}>download CV</motion.button></a>
                                </div>
                                <motion.div
                                    className="social-media-icons">
                                     <ul>
                                        <Link  to="https://www.facebook.com/profile.php?id=100092943613170" target='_blank'><li><FaFacebookF /></li></Link>
                                        <Link to="https://www.instagram.com/sanjjuo/" target='_blank'><li><FaInstagram /></li></Link>
                                        <li><FaXTwitter /></li>
                                        <ReactWhatsapp number="+91 7902501645" message="Hello Mohamed Sanjeed!" element="div" style={{ display: "inline-block", cursor: "pointer" }}>
                                            <li><FaWhatsapp /></li>
                                        </ReactWhatsapp>
                                        <Link to="https://www.linkedin.com/in/mohamedsanjeed/" target='_blank'><li><FaLinkedinIn /></li></Link>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="home-person-image">
                                <img src="me1-Photoroom.png" alt="" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mobile-home-section">
                <div className="home-contents-with-image">
                    <div className="home-person-image">
                        <img src="me1-Photoroom.png" alt="" />
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
            </section>
        </div>
    )
}

export default Home
