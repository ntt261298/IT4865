import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const CreateExportModal = (props) => {

    const { datas, show, handleClose, handleSave, handleChange} = props;
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                    Product
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control as="select" name="product_name" onChange={handleChange}>
                        <option>Select Product</option>
                        {datas.map(function(data, i){
                            return <option value={i} key={i}>{data.product_name}</option>;
                        })}
                    </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                    Price
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" name="product_price" onChange={handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                    Amount
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" name="product_amount" onChange={handleChange} />
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