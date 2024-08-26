import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../Works/WorkModal.css"

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
                                <img src="gym.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="details">
                                <p>{work.description}</p>
                                <Button onClick={onHide}>View project</Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default WorkModal
