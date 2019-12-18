import React, { useState, Fragment } from 'react';
import { loadRole } from '../../utils/localStorage';
import Header from './Header';
import Importer from './Importer';
import Exporter from './Exporter';
import Warehouse from './Warehouse';

function Home() {
    // Change role here for testing
    const [role, setRole] = useState(loadRole());

    return (
        <Fragment>
            <Header />
            { role === 'IMPORTER' && <Importer />}
            { role === 'EXPORTER' && <Exporter /> }
            { role === 'WAREHOUSE' && <Warehouse /> }
        </Fragment>
    );
}

export default Home;