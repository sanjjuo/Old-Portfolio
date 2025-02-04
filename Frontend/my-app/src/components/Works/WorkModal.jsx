import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../Works/WorkModal.css"
import "../../components/Responsive.css"
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { ModalFooter } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";

const WorkModal = ({ show, onHide, work }) => {
    if (!work) return null;
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal'
            >
                <Modal.Header className='header' closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='title'>
                        <h4>{work.name}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="image">
                                <img src={work.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="details">
                                <p>{work.description}</p>
                                <Link style={{ color: "inherit", textDecoration: "none" }} to={work?.vercel} target='_blank'><Button variant="primary" onClick={onHide}>View Project <MdKeyboardDoubleArrowRight /></Button></Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter className='modal-footer'>
                <a href="https://github.com/sanjjuo" target="_blank" style={{ color: "inherit" }}><FaGithub style={{marginRight:"5px"}}/>https://github.com/sanjjuo</a>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default WorkModal
