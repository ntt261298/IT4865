import React from 'react';
import DataTable from './DataTable';
import CreateExportModal from './modals/CreateExportModal';
import plus from '../../images/plus.svg';
import { errMessage, successMessage } from '../../utils/message';
import { loadToken, loadUsername } from '../../utils/localStorage';

class Exporter extends React.Component {
    constructor(props){
        super(props)
        this.urls = ['http://0.0.0.0:5000/getProducts/IMPORTER', 'http://0.0.0.0:5000/getProducts/EXPORTER']
        this.postUrl = 'http://0.0.0.0:5000/createProduct'
        this.exporterName = loadUsername();

        this.token = loadToken();

        this.state = {
            show : false,
            listProduct: [],
            importProduct: [],
            exportProduct: [],
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
                importProduct: this.state.listProduct.filter(p => p.type==="IMPORTER"),
                exportProduct: this.state.listProduct.filter(p => p.type==="EXPORTER" && p.exporterName===loadUsername())
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
        }).then(res => {
            this.getListProduct();
            successMessage('Create successfully')
        })

    }

    render(){
        return (
            <div className="main">
                <div className="row">
                    <div className="col-6">
                        <h2>Export History</h2>
                    </div>
                    <div className="col-6 plus-button">
                        <img src={plus} alt="" onClick={() => this.setState({show: true})}/>
                    </div>
                </div>
                <hr />
                <DataTable data={this.state.exportProduct}/>
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