import React from 'react'
import "../Home/Home.css"
import { motion } from "framer-motion"

const Freelance = () => {
    return (
        <div>
            <section className="freelance-section">
                <div className="freelance">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="freelance-image">
                        <img src="bg_1.jpg" alt="" />
                    </motion.div>
                    <div className="freelance-contents">
                        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>I'm <span>Ready</span> for freelancing</motion.h2>
                        <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -5 }} transition={{ duration: 0.8 }} type="button" className="btn">hire me</motion.button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Freelance
