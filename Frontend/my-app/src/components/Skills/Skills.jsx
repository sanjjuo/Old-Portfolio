import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../Home/Home.css"
import { motion } from "framer-motion"

const Skills = () => {
    const now = 70;
    const now1 = 80;
    const now2 = 50;
    const now3 = 85;
    const now4 = 82;
    const now5 = 65;
    const now6 = 65;

    return (
        <div>
            <section className="skills-section" id='skill'>
                <h1>my skills</h1>
                <div className="skills-bars">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <ul>
                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -10 }}
                                    transition={{ duration: 0.5 }}>
                                    <span><h5>React js</h5><h5>{`${now}%`}</h5></span><ProgressBar className='bar' now={now} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -7 }}
                                    transition={{ duration: 0.7 }}><span><h5>React Native</h5><h5>{`${now}%`}</h5></span><ProgressBar className='bar' now={now} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -4 }}
                                    transition={{ duration: 0.9 }}><span><h5>Java script</h5><h5>{`${now2}%`}</h5></span><ProgressBar className='bar' now={now2} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -1 }}
                                    transition={{ duration: 1.1 }}><span><h5>Node.js</h5><h5>{`${now5}%`}</h5></span><ProgressBar className='bar' now={now5} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 2 }}
                                    transition={{ duration: 1.3 }}><span><h5>Mongo DB</h5><h5>{`${now6}%`}</h5></span><ProgressBar className='bar' now={now6} /></motion.li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <ul>
                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 5 }}
                                    transition={{ duration: 1.5 }}><span><h5>Express.js</h5><h5>{`${now6}%`}</h5></span><ProgressBar className='bar' now={now6} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 8 }}
                                    transition={{ duration: 1.7 }}><span><h5>html</h5><h5>{`${now1}%`}</h5></span><ProgressBar className='bar' now={now1} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 11 }}
                                    transition={{ duration: 1.9 }}><span><h5>CSS</h5><h5>{`${now3}%`}</h5></span><ProgressBar className='bar' now={now3} /></motion.li>

                                <motion.li initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 14 }}
                                    transition={{ duration: 2.1 }}><span><h5>Bootstrap</h5><h5>{`${now4}%`}</h5></span><ProgressBar className='bar' now={now4} /></motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
