import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const CreateExportModal = (props) => {
    const { show, handleClose, handleSave } = props;
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Product
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control as="select" name="product_name" onChange={props.handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Price
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" name="product_price" onChange={props.handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Amount
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" name="product_amount" onChange={props.handleChange} />
                    </Col>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default CreateExportModal;