import React, { useState } from 'react';
import DataTable from './DataTable';
import CreateImportModal from './modals/CreateImportModal';
import plus from '../../images/plus.svg';
import {getImportProducts} from '../../../src/actions/ImporterAction'

function Importer() {
    const [show, setShow] = useState(false);
    // const listImport = useState(() => getImportProducts("string"));
    // listImport.then(data=>{
    //     console.log(data);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    

    const listImport = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Position',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Office',
            field: 'office',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Start date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Salary',
            field: 'salary',
            sort: 'asc',
            width: 100
          }
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162'
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372'
          },
          {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            age: '59',
            date: '2012/08/06',
            salary: '$137'
          },]
      }

    return (
        <div className="importer">
            <div className="row">
                <div className="col-6">
                    <h2>Import History</h2>
                </div>
                <div className="col-6 plus-button">
                    <img src={plus} alt="" onClick={() => setShow(true)}/>
                </div>
            </div>
            <hr />
            <DataTable 
                
            />
            <CreateImportModal 
                show={show}
                handleClose={() => setShow(false)}
            />
        </div>
    );
}

export default Importer;