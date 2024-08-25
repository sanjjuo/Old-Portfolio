import React from 'react'
import "../Home/Home.css"
import "../Responsive.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"

const Home = () => {

    return (
        <div>
            <section className="home-section" id='home'>
                <div className="home-contents-with-image">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contents">
                                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>hello!</motion.h1>
                                <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -5 }} transition={{ duration: 0.5 }}>I'm <span>Mohamed Sanjeed</span></motion.h2>
                                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>A Freelance React.js developer</motion.p>
                                <div className="button-container">
                                    <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} type="button" className="btn1">hire me</motion.button>
                                    <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} type="button" className="btn" style={{ margin: "0" }}>download CV</motion.button>
                                </div>
                                <motion.div
                                    className="social-media-icons">
                                    <ul>
                                        <li><FaFacebookF /></li>
                                        <li><FaInstagram /></li>
                                        <li><FaXTwitter /></li>
                                        <li><FaWhatsapp /></li>
                                        <li><FaLinkedinIn /></li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="home-person-image">
                                <img src="bg_1.png" alt="" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* <div className="home-contents-with-image2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contents">
                                <motion.h1 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: -10}} transition={{duration: 0.5}}>hello!</motion.h1>
                                <motion.h2 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: -10}} transition={{duration: 0.5}}>I'm a <span>React.js developer</span> based in India</motion.h2>
                                <div className="button-container">
                                    <motion.button initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: -10}} transition={{duration: 0.5}} type="button" className="btn1">hire me</motion.button>
                                    <motion.button initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: -10}} transition={{duration: 0.5}} type="button" className="btn" style={{ margin: "0" }}>download CV</motion.button>
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
                </div> */}
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
        </div>
    )
}

export default Home
