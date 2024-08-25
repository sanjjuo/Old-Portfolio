import React, { useState } from 'react'
import "../Home/Home.css"
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import { works } from '../../../WorksApi';
import WorkModal from './WorkModal';
import { motion } from "framer-motion"

const Works = () => {

    const [data, setData] = useState(works)
    const [modalShow, setModalShow] = useState(false);

    const handleClick = (work) => {
        setModalShow(true)
        setData(work)
        console.log(work);

    }

    const settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]
    };
    return (
        <div>
            <section className="works-section" id='works'>
                <h1>my works</h1>
                <div className="work-slider">
                    <Slider {...settings1}>
                        {data.map((work, index) => (
                            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: index * 0.1}}>
                                <Card className='work-card' key={index}>
                                    <Card.Img variant="top" src="/restuarent.jpg" />
                                    <Card.Body>
                                        <Card.Title className='title'>{work.name} <span><HiMiniEye onClick={() => handleClick(work)} /></span></Card.Title>
                                        <Button variant="primary">View Project <MdKeyboardDoubleArrowRight /></Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </section>
            <WorkModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Works
