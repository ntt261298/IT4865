import React, {useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const CreateExportModal = (props) => {

    const initialProduct = {
      exporterName: props.exporterName,
      update_at: "",
      product_price: "",
      create_at: "",
      type: "EXPORTER",
      importerName: "",
      product_name: "",
      product_amount: ""
    }

    const [product, setProduct] = useState(initialProduct)

    const handleChange = (event) => {
      console.log('handchange')
      let nam = event.target.name;
      let val = event.target.value;
      if(nam === 'product_name'){
          const product = datas[val]
          setProduct(
              {
                ...product,
                importerName: product.importerName,
                create_at: product.create_at,
                update_at: new Date().toLocaleDateString("en-US"),
                product_name: product.product_name
              }
          )
      }
      else{
          setProduct(
              {
                ...product,
                [nam]: val
              }
          )
      }      
    }

    const { datas, show, handleClose, handleSave, exporterName} = props;
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
            <Button variant="primary" onClick={() => handleSave(product)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );

    

    
  }
  
export default CreateExportModal;