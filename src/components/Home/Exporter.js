import React from 'react';
import DataTable from './DataTable';
import CreateExportModal from './modals/CreateExportModal';
import plus from '../../images/plus.svg';

class Exporter extends React.Component {
    constructor(props){
        super(props)
        this.urls = ['http://0.0.0.0:5000/getProducts/IMPORTER', 'http://0.0.0.0:5000/getProducts/EXPORTER']
        this.postUrl = 'http://0.0.0.0:5000/createProduct'

        this.token = "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU3Njg1NTcxOSwiZXhwIjoxNTc2ODU5MzE5fQ.eyJ1c2VybmFtZSI6InRlc3QifQ.A1jz4CmZNXRqUCj3Q7JQxGZ1m55r49SkoIC8_nr_2EnNRUsstFXaJUAWUzE_OhcKlAwq3KHIsoI3F0_F1sQh8Q"

        this.state = {
            show : false,
            product : {
                exporterName: "thang",
                update_at: "",
                product_price: "",
                create_at: "",
                type: "EXPORTER",
                importerName: "",
                product_name: "",
                product_amount: ""
            },
            listProduct: [],
            importProduct: [],
        }
    }

    getListProduct(){
        this.setState({listProduct: []})
        fetch(this.urls[0], {
            headers: {
                "authorization": this.token
            }
        }).then(res => res.json())
        .then(data => this.setState({listProduct: this.state.listProduct.concat(data), importProduct: data}))
        

        fetch(this.urls[1], {
            headers: {
                "authorization": this.token
            }
        }).then(res => res.json())
        .then(data => this.setState({listProduct: this.state.listProduct.concat(data)})) 
    }

    handleSave = () => {
        this.setState({
            show: false
        })

        console.log(this.state.product)
        fetch(this.postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "authorization": this.token
            },
            body: JSON.stringify(this.state.product)
        }).then(res => console.log(res))
    }

    handleChange = (event) => {
        console.log('handchange')
        let nam = event.target.name;
        let val = event.target.value;
        if(nam === 'product_name'){
            const product = this.state.importProduct[val]
            this.setState({
                product: {
                    ...this.state.product,
                    importerName: product.importerName,
                    create_at: product.create_at,
                    update_at: new Date().toLocaleDateString("en-US"),
                    product_name: product.product_name
                }
            })
        }
        else{
            this.setState({
                product: {
                    ...this.state.product,
                    [nam]: val
                }
            })
        }      
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
                    datas={this.state.importProduct} 
                    show={this.state.show}
                    handleClose={() => this.setState({show: false})}
                    handleSave={this.handleSave}
                    handleChange={this.handleChange}
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