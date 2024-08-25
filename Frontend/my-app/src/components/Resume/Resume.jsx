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
                        <li onClick={() => setResume("education")}>education</li>
                        <li onClick={() => setResume("experience")}>experience</li>
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
                                    <p>completed BCA Mes kalladi college. And started my love for IT sector from here.</p>
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
                            </motion.div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Resume
