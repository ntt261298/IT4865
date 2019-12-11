import React from 'react';
import DataTable from './DataTable';
import CreateExportModal from './modals/CreateExportModal';
import plus from '../../images/plus.svg';

class Exporter extends React.Component {
    constructor(props){
        super(props)
        this.url = 'http://178.128.217.110:8164/quanLyXuatNhapHang_DC2019_7/get?type=string'
        this.state = {
            show : false,
            product : {
                exporter_name: "",
                update_at: "",
                product_price: "",
                create_at: "",
                type: "export",
                importer_name: "",
                product_name: "",
                product_amount: ""
            },
            listProduct: [],

        }
    }

    getListProduct(){
        fetch(this.url, {
            method: 'GET',
            headers: {
                "authorization": "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU3NjAzODIzNiwiZXhwIjoxNTc2MDQxODM2fQ.eyJ1c2VybmFtZSI6InRlc3QifQ.CTNR6D99z2cjJgXkBnlYLA-2wSPDmUydfCRngNNSpCfeQTYj0ofRFdwPG6hmTZOvFrUvbJTH8rOJoE3haOlvyw"
            }
        })
        
        
    }

    handleSave = () => {
        this.setState({
            show: false
        })
        console.log(this.state.product)
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            product: {
                ...this.state.product,
                [nam]: val
            }
        })
        
        
    }


    render(){
        return (
            <div className="exporter">
                <div className="row">
                    <div className="col-6">
                        <h2>Export History</h2>
                    </div>
                    <div className="col-6 plus-button">
                        <img src={plus} alt="" onClick={() => this.setState({show: true})}/>
                    </div>
                </div>
                <hr />
                <DataTable data={this.state.listProduct}/>
                <CreateExportModal 
                    show={this.state.show}
                    handleClose={() => this.setState({show: false})}
                    handleSave={this.handleSave}
                    handleChange={this.CreateExportModalhandleChange}
                />
            </div>
        );
    }

    componentDidMount() {
        this.getListProduct()
        console.log(this.state.listProduct)
    }
}

export default Exporter;