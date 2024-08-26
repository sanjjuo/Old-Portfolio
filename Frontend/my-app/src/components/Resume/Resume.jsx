import React, { useState } from 'react'
import "../Home/Home.css"
import { motion } from "framer-motion"

const Resume = () => {
    const [resume, setResume] = useState("education")
    return (
        <div>
            <section className='resume-section' id='resume'>
                <h1>resume</h1>
                <div className="container p-0">
                    <ul>
                        <li onClick={() => setResume("education")} className={resume === "education" ? "active" : ""}>education</li>
                        <li onClick={() => setResume("experience")} className={resume === "experience" ? "active" : ""}>experience</li>
                    </ul>
                </div>
                {resume === "education" && (
                    <div className="education-cards">
                        <div className="row">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="col-md-6">
                                <div className="card">
                                    <h3>May 2023 - Aug 2023</h3>
                                    <h5>Mern Stack Course</h5>
                                    <h6>techmindz infopark</h6>
                                    <p>Completed Mern stack course from Techmindz Infopark. Studied the wide knowledge of Mern stack technology and also created projects related to that technology.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="col-md-6">
                                <div className="card">
                                    <h3>2020 - 2023</h3>
                                    <h5>Bachelors of Computer Application</h5>
                                    <h6>mes kalladi college mannarkkad</h6>
                                    <p>completed BCA from Mes kalladi college. And started my journey for to explore the IT sector from here.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1 }}
                                className="col-md-6">
                                <div className="card">
                                    <h3>2018 - 2020</h3>
                                    <h5>State Board</h5>
                                    <h6>gvhss mankada</h6>
                                    <p>Completed Higher Secondary education from GVHSS Mankada in Science.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.4 }}
                                className="col-md-6">
                                <div className="card">
                                    <h3>2014 - 2018</h3>
                                    <h5>State Board</h5>
                                    <h6>gvhss mankada</h6>
                                    <p>Completed High School education from GVHSS Mankada.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {resume === 'experience' && (
                    <div className="experience-cards">
                        <div className="row">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="col-md-6">
                                <div className="card">
                                    <h3>Jan 2024 - Jul 2024</h3>
                                    <h5>Jr. React.js Developer</h5>
                                    <h6>W3 Digital Agency</h6>
                                    <p>
                                        <ul>
                                            <li><strong>Frontend Design & Development:</strong> Responsive UI for optimal user
                                                experience across devices and screen sizes.
                                            </li>
                                            <li><strong>Responsive UI:</strong> Developed and maintained responsive user interfaces
                                                that ensure optimal user experience across various devices and screen
                                                sizes.
                                            </li>
                                            <li><strong>API Interaction & Integration:</strong> API interaction and integration (RESTful
                                                APIs, third-party libraries).

                                            </li>
                                            <li><strong>Collaboration:</strong> Collaborated with cross-functional teams to design and
                                                implement new features.</li>
                                            <li><strong>NPM Packages:</strong> NPM package management for streamlined
                                                development.

                                            </li>
                                            <li><strong>Problem-Solving:</strong> Optimized application performance, fixed bugs, and
                                                ensured high-quality code.

                                            </li>
                                            <li><strong>React.js:</strong> Stayed updated with the latest React.js updates and best
                                                practices, applying innovative solutions in development projects.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Resume
