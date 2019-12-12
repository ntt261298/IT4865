import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreateImportModal = (props) => {
    const { show, handleClose, handleSave } = props;
    const [importerName, setImporterName] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAmount, setProductAmount] = useState('');
    const [type, setType] = useState('');
    const [create, setCreateTime] = useState('');
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Importer Name:</label>
                <input type="text" onChange={(e) => setImporterName(e.target.value)} className="form-control" />
                  </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Product Name:</label>
                    <input type="text" onChange={(e) => setProductName(e.target.value)} className="form-control" />
                  </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                <label>Product Price:</label>
                  <input type="text" onChange={(e) => setProductPrice(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                <label>Product Amount:</label>
                  <input type="text" onChange={(e) => setProductAmount(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                <label>Type:</label>
                  <input type="text" onChange={(e) => setType(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                <label>Create Time:</label>
                  <input type="date" onChange={(e) => setCreateTime(e.target.value)} className="form-control" />
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default CreateImportModal;