import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../Works/WorkModal.css"
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const WorkModal = ({ show, onHide, work }) => {
    if (!work) return null;
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="md"
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
                                <Link style={{color:"inherit", textDecoration:"none"}} to={work?.link} target='_blank'><Button variant="primary" onClick={onHide}>View Project <MdKeyboardDoubleArrowRight /></Button></Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default WorkModal
