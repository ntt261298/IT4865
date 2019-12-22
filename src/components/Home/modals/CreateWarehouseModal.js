import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { errMessage, successMessage } from '../../../utils/message';
import {createUser} from '../../../actions/WarehouseAction';


const CreateWarehouseModal = (props) => {
    const { show, handleClose} = props;
    const [txtUsername, setUsername] = useState('');
    const [txtPassword, setPassword] = useState('');
    const [txtRole, setRole] = useState('');

    const handleSave = async (e) => {
      let user = {
          username: txtUsername,
          password: txtPassword,
          role: txtRole
      };
      await createUser(user);
      successMessage('Create user successfully');

      handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
                <div className="form-group col-md-12">
                    <label>Username:</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label>Role:</label>
                    <select className="form-control" onChange={(e) => setRole(e.target.value)}>
                      <option ></option>
                      <option value="Importer">Importer</option>
                      <option value="Exporter">Exporter</option>
                      <option value="Warehouse">Warehouse</option>
                    </select>
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

export default CreateWarehouseModal;