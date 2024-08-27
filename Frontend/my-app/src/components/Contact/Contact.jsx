import React, { useState } from 'react'
import "../Home/Home.css"
import { FaMapSigns, FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import { FaRocketchat } from "react-icons/fa6";
import { BiSad } from "react-icons/bi";

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
            toast.success(data.message, {
                icon: <FaRocketchat style={{ color: "#ffbd39", size: "30px" }} />,
                hideProgressBar: true,
                style: {
                    backgroundColor: "#212222",
                    color: "#ffbd39",
                    fontSize: "15px",
                    borderRadius: "10px",
                    border: "1px solid #b5caca"
                }

            })
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error("Error:", error);
            toast.error(error.response.data.message, {
                icon: <BiSad style={{ color: "#ffbd39", size: "30px" }} />,
                hideProgressBar: true,
                style: {
                    backgroundColor: "#212222",
                    color: "#ffbd39",
                    fontSize: "15px",
                    borderRadius: "10px",
                    border: "1px solid #b5caca"
                }
            });
        }
    }

    return (
        <div>
            <section className="contact-section" id='contact'>
                <h1>contact me</h1>
                <p>Let's make something great together</p>
                <div className="contact-icons">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-4">
                            <ul>
                                <a href="https://maps.app.goo.gl/jvWw9cAePUHJcjXJ8" target='_blank' style={{ textDecoration: "none", color: "inherit" }}><li><FaMapSigns /></li></a>
                                <li><h3>address</h3></li>
                                <li><a href="https://maps.app.goo.gl/jvWw9cAePUHJcjXJ8" target='_blank' style={{ textDecoration: "none", color: "inherit" }}><h5>Malappuram, Kerala, India</h5></a></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-4">
                            <ul>
                                <a href="tel:+917902501645" style={{ textDecoration: "none", color: "inherit" }}><li><FaPhoneAlt /></li></a>
                                <li><h3>contact number</h3></li>
                                <li><a href="tel:+917902501645" style={{ textDecoration: "none", color: "inherit" }}><h5>+91 7902501645</h5></a></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-4">
                            <ul>
                                <a href="mailto:sanjeedofficial22@gmail.com" style={{ textDecoration: "none", color: "inherit" }}><li><FaTelegramPlane /></li></a>
                                <li><h3>email address</h3></li>
                                <li><a href="mailto:sanjeedofficial22@gmail.com" style={{ textDecoration: "none", color: "inherit" }}><h5>sanjeedofficial22@gmail.com</h5></a></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className='contact-card'>
                    <Card>
                        <Card.Img variant="top" src="contactmain.jpg" className='large-image' />
                        <Card.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h2>Get in Touch</h2>
                                        <p>If you have any questions or need assistance, I'm here to help! Please feel free to fill out the contact form below,
                                            and I'll get back to you as soon as possible. Whether you're interested in learning more about my services, have
                                            specific inquiries, or simply want to share feedback, I'm eager to hear from you. Your satisfaction is my priority,
                                            and I’m committed to providing prompt and effective responses to all your needs.</p>
                                        {/* <img src="football.gif" alt="Football GIF" /> */}
                                    </div>
                                    <div className="col-md-7">
                                        <form className="contact-input" onSubmit={sendMail}>
                                            <motion.input initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: -10 }}
                                                transition={{ duration: 0.5 }}
                                                type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' id='name' name='name' required ></motion.input>

                                            <motion.input
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: -10 }}
                                                transition={{ duration: 0.8 }}
                                                type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' id='email' name='email' required ></motion.input>

                                            <motion.textarea
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: -10 }}
                                                transition={{ duration: 1.1 }}
                                                type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='message' id='message' name='message' cols={50} rows={4} required ></motion.textarea>

                                            <div className="button-container">
                                                <button type="submit" className="btn"
                                                    disabled={loading}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        gap: "10px"
                                                    }}
                                                >{loading && <ClipLoader size={18} color='black' />}send message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </motion.div>
            </section>
        </div>
    )
}

export default Contact
