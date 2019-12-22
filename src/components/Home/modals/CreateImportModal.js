import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { errMessage, successMessage } from '../../../utils/message';
import {saveImportProduct} from '../../../actions/ImporterAction';
import { loadUsername } from '../../../utils/localStorage';

const CreateImportModal = (props) => {
    const { show, handleClose} = props;
    const [setImporterName] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAmount, setProductAmount] = useState('');

    const handleSave = async (e) => {
      var importProduct ={
          "importerName": loadUsername(),
          "update_at": new Date().toLocaleString(),
          "exporterName": "none",
          "product_price": productPrice,
          "create_at": new Date().toLocaleString(),
          "type": "import",
          "product_name": productName,
          "product_amount": productAmount
      }
      saveImportProduct(importProduct);
      successMessage('Create successfully');
      handleClose();
      // window.location.replace('http://localhost:3000/home');
    }

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Importer Name:</label>
                <input type="text" disabled onChange={(e) => setImporterName(e.target.value)} value={loadUsername()} className="form-control" />
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