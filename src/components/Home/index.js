import React, { useState, Fragment } from 'react';
import Header from './Header';
import Importer from './Importer';
import Exporter from './Exporter';
import Warehouse from './Warehouse';

function Home() {  
    // Change role here for testing
    const [role, setRole] = useState('importer');

    return (
        <Fragment>
            <Header />
            { role === 'importer' && <Importer />}
            { role === 'exporter' && <Exporter /> }
            { role === 'warehouse' && <Warehouse /> }
        </Fragment>
    );
}

export default Home;