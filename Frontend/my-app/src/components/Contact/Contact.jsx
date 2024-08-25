import React, { useState } from 'react'
import "../Home/Home.css"
import { FaMapSigns, FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const sendMail = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { data } = await axios.post("http://localhost:4000/send/mail", {
                name,
                email,
                message,
            },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )
            setName("")
            setEmail("")
            setMessage("")
            toast.success(data.message);
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error("Error:", error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <section className="contact-section" id='contact'>
                <h1>contact me</h1>
                <div className="contact-icons">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-4">
                            <ul>
                                <li><FaMapSigns /></li>
                                <li><h3>address</h3></li>
                                <li><h5>Malappuram, Kerala, India</h5></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-4">
                            <ul>
                                <li><FaPhoneAlt /></li>
                                <li><h3>contact number</h3></li>
                                <li><h5>+91 7902501645</h5></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-4">
                            <ul>
                                <li><FaTelegramPlane /></li>
                                <li><h3>email address</h3></li>
                                <li><h5>sanjeedofficial22@gmail.com</h5></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="contents">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="contact-image">
                                <img src="bg_1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <form className="contact-input" onSubmit={sendMail}>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' id='name' name='name' required />
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' id='email' name='email' required />
                                <textarea type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='message' id='message' name='message' cols={50} rows={7} required />
                                <button type="submit" className="btn"
                                    disabled={loading}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}
                                >{loading && <ClipLoader size={18} color='black' />}send message</button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Contact
