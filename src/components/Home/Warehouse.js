import React, { useState, Component } from 'react';
import DataTable from './DataTable';
import plus from '../../images/plus.svg';
import CreateWarehouseModal from './modals/CreateWarehouseModal';
import { loadToken, loadUsername } from '../../utils/localStorage';
import axios from 'axios'


class Warehouse extends Component {
    // const [show, setShow] = useState(false);


    constructor(props) {
        super(props);
        this.state = {
            show: false,
            listImport : [],
            listExport : [],
        };
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/getProducts/IMPORT',
            headers: {
                authorization: loadToken()
            }
        }).then(res => {
            console.log(res);
            this.setState({
                listImport : res.data
            })
        }).catch(err => {
            console.log(err);
        });
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/getProducts/EXPORT',
            headers: {
                authorization: loadToken()
            }
        }).then(res => {
            console.log(res);
            this.setState({
                listExport : res.data
            })
        }).catch(err => {
            console.log(err);
        });

    }

    render() {
        var {listImport,listExport} = this.state;
        console.log(listExport);
        return (
            <div className="main">

                <CreateWarehouseModal
                    show={this.state.show}
                    handleClose={() => this.setState({show: false})}
                    handleSave={() => this.setState({show: false})}
                />

                <div className="importer">
                    <div className="row">
                        <div className="col-6">
                            <h2>Import History</h2>
                        </div>
                        <div className="col-6 plus-button">
                        <img src={plus} alt="" onClick={() => this.setState({show: true})}/>
                    </div>
                    </div>
                    <hr />
                    <DataTable
                        data={listImport}
                    />
                </div>

                <div className="importer">
                    <div className="row">
                        <div className="col-6">
                            <h2>Export History</h2>
                        </div>
                    </div>
                    <hr />
                    <DataTable
                        data={listExport}
                    />
                </div>
            </div>
        );
    }

}

export default Warehouse;