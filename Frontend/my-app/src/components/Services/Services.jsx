import React from 'react'
import "../Home/Home.css"
import { FaDesktop } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion"

const Services = () => {
    return (
        <div>
            <section className="services-section" id='service'>
                <h1>services</h1>
                <div className="service-cards">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><CgWebsite /></span>
                                    <h5>Frontend Development</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaLaptopCode /></span>
                                    <h5>Web Development</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaDesktop /></span>
                                    <h5>full Stack Development</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><HiOutlineLightBulb /></span>
                                    <h5>Frondend Design</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaMobile /></span>
                                    <h5>App development</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.8 }}
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className='service-item'>
                                <div className="content">
                                    <span className='icon'><FaBell /></span>
                                    <h5>instant upgrades</h5>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Services
