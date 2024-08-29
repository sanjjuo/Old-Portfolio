import React, { useState } from 'react'
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
import DownloadModal from './DownloadModal';

const Home = () => {

    const [downloadModal, setDownloadModal] = useState(false)

    return (
        <div>
            <section className="home-section" id='home'>
                <div className="home-contents-with-image">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="contents">
                                <motion.h1 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 0.5 }}>hello!</motion.h1>
                                <motion.h2 initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 0.8 }}>I'm <span>Mohamed Sanjeed</span></motion.h2>
                                <motion.p initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 1.1 }}>A Freelance React.js developer</motion.p>
                                <motion.div
                                    initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 1.4 }}
                                    className="button-container">
                                    <a href="#contact"><motion.button initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 10 }} transition={{ duration: 1.4 }} type="button" className="btn1">hire me</motion.button></a>
                                    <a onClick={() => setDownloadModal(true)}><motion.button initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 10 }} transition={{ duration: 1.4 }} type="button" className="btn" style={{ margin: "0" }}>download CV</motion.button></a>
                                </motion.div>
                                <div
                                    className="social-media-icons">
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
                            </div>
                        </div>
                        <div className="col-md-5">
                            <motion.div
                                initial={{ opacity: 0, x: 150 }}
                                whileInView={{ opacity: 1, x: -10 }}
                                transition={{ duration: 0.5 }}
                                className="home-person-image">
                                <img src="me.png" alt="" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mobile-home-section">
                <div className="home-contents-with-image">
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: -10 }}
                        transition={{ duration: 0.5 }}
                        className="home-person-image">
                        <img src="me.png" alt="" />
                    </motion.div>
                    <div className="contents">
                        <motion.h1 initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 0.5 }}>hello!</motion.h1>
                        <motion.h2 initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 0.8 }}>I'm <span>Mohamed Sanjeed</span></motion.h2>
                        <motion.p initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 1.1 }}>A Freelance React.js developer</motion.p>
                        <motion.div
                            initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: -10 }} transition={{ duration: 1.4 }}
                            className="button-container">
                            <a href="#contact"><motion.button initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 10 }} transition={{ duration: 1.4 }} type="button" className="btn1">hire me</motion.button></a>
                            <a onClick={() => setDownloadModal(true)}><motion.button initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 10 }} transition={{ duration: 1.4 }} type="button" className="btn" style={{ margin: "0" }}>download CV</motion.button></a>
                        </motion.div>
                    </div>
                </div>
            </section>
            <DownloadModal show={downloadModal} onHide={() => setDownloadModal(false)} />
        </div>

    )
}

export default Home
