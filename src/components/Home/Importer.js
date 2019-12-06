import React, { useState } from 'react';
import DataTable from './DataTable';
import CreateImportModal from './modals/CreateImportModal';
import plus from '../../images/plus.svg';

function Importer() {
    const [show, setShow] = useState(false);
    
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
            <DataTable />
            <CreateImportModal 
                show={show}
                handleClose={() => setShow(false)}
                handleSave={() => setShow(false)}
            />
        </div>
    );
}

export default Importer;