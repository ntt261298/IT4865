import React from 'react';
import DataTable from './DataTable';
import CreateImportModal from './modals/CreateImportModal';
import plus from '../../images/plus.svg';
import {getImportProducts} from '../../actions/ImporterAction';
import { loadToken, loadUsername } from '../../utils/localStorage';

class Importer extends React.Component {
  constructor(props){
    super(props)
    this.token = loadToken()
    this.username = loadUsername()

    this.state = {
        show : false,
        listProduct: []
    }
}
  getListProduct(){
    getImportProducts("import").then(data => {
      data.json().then(res=>{
        console.log(res.length)
        this.setState({
          listProduct: [].concat(...res).filter(p=> p.importerName===this.username)
        });
      })
    })
    .catch(err=>{
      console.log(err);
    });
  }

render(){
    return (
        <div className="main">
        <div className="row">
            <div className="col-6">
                <h2>Importer History</h2>
            </div>
            <div className="col-6 plus-button">
                <img src={plus} alt="" onClick={() => this.setState({show: true})}/>
            </div>
        </div>
        <hr />
        <DataTable data={this.state.listProduct}/>
        <CreateImportModal
            show={this.state.show}
            handleClose={() => {
              this.setState({show: false});
            }}
        />
    </div>
    );
  }

  componentDidMount() {
    this.getListProduct();
  }
}

export default Importer;