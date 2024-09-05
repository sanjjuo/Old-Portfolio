import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DownloadModal = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{ border: "none" }} />
                <Modal.Body>
                    <h4 style={{ fontWeight: 600, color:"#fff" , fontSize:"20px"}}>Are you sure you want to download the Resume Now ?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "transparent" ,border:"2px solid #fff", width:"30%" }} onClick={props.onHide}>No</Button>
                    <Button href='/resume.pdf' download="MohamedSanjeed_CV" onClick={props.onHide} style={{
                        backgroundColor: "#ffbd39",
                        border:"2px solid #ffbd39",
                        color:"black",
                        fontWeight: 700,
                        width:"30%"
                    }}
                    >Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    
    )
}

export default DownloadModal
