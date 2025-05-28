import { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Chat({show,setShow, fr}) {
 

  const handleClose = () => setShow(false);
  

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
           <Row className='border w-100'>
            <Col lg={4}>
                  <Image className='border border-2 border-dark' style={{width:"50px"}} src={fr.picture.large} roundedCircle />
            </Col>
            <Col lg={8}>
                  <h5>{fr.name.first} {fr.name.last}</h5>
            </Col>
            <Col >
               
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chat;