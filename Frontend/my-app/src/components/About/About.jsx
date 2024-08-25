import React from 'react'
import "../Home/Home.css"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div>
            <section className='about-section' id='about'>
                <div className="container-fluid">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-5">
                            <div className="image">
                                <img src="bg_1.png" alt="" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 1.5 }}
                            className="col-md-7">
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
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
