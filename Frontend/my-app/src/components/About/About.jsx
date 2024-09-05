import React from 'react'
import "../Home/Home.css"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div>
            <section className='about-section' id='about'>
            <h1>About Me</h1>
                <div className="container-fluid">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-5">
                            <div className="image">
                                <img src="me2.PNG" alt="" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 1.5 }}
                            className="col-md-7">
                            <h2>Hello, I'm Mohamed Sanjeed !</h2>
                            <p>Jr React Developer with 6 months of experience in designing and developing.
                                Skilled in variety of Programming languages and technologies including
                                React.js, MERN stack, React Native, HTML, CSS, JavaScript. Proficient in
                                building scalable, efficient, and user-friendly web and mobile applications.
                                Passionate about staying up-to-date with the latest technologies and best
                                practices.</p>
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
                                <a href="/resume.pdf" download="MohamedSanjeed_CV.pdf"><button type="button" className="btn">download CV</button></a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
