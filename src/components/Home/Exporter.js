import React from 'react';
import DataTable from './DataTable';
import CreateExportModal from './modals/CreateExportModal';
import plus from '../../images/plus.svg';

class Exporter extends React.Component {
    constructor(props){
        super(props)
        this.urls = ['http://0.0.0.0:5000/getProducts/IMPORTER', 'http://0.0.0.0:5000/getProducts/EXPORTER']
        this.postUrl = 'http://0.0.0.0:5000/createProduct'
        this.exporterName = "thang"

        this.token = "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU3Njg5MjgxNCwiZXhwIjoxNTc2ODk2NDE0fQ.eyJ1c2VybmFtZSI6InRoYW5nIn0.rFkLgtk7rZq8nOlfQ5WM7CnxhM2gv_7OahxqnNqMkTK1G-GqY6cutna0tVmM8gr4sWtztWsebnGvMg7tbUVO4Q"

        this.state = {
            show : false,
            listProduct: [],
            importProduct: [],
        }
    }

    getListProduct(){

        Promise.all(
            this.urls.map(url =>
                fetch(url, {headers: {"authorization": this.token}})
                    .then(res => res.json())
            )
        ).then(data => {
            this.setState({
                listProduct: [].concat(...data)
            });
            this.setState({
                importProduct: this.state.listProduct.filter(p => p.type==="IMPORTER")
            })
        });
    }

    handleSave = (product) => {
        this.setState({
            show: false
        })

        fetch(this.postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "authorization": this.token
            },
            body: JSON.stringify(product)
        }).then(res => this.getListProduct())
        
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
                    exporterName={this.exporterName}
                />
            </div>
        );
    }

    componentDidMount() {
        this.getListProduct()
    }
}

export default Exporter;