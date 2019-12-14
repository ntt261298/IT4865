import React, { useState, useEffect, Fragment } from 'react';
import Header from './Header';
import Importer from './Importer';
import Exporter from './Exporter';
import Warehouse from './Warehouse';

function Home() {
    // Change role here for testing
    const [role, setRole] = useState('exporter');

    useEffect(async () => {
      const data = {
        username: 'truong',
        password: '123',
        role: 'IMPORTER',
      }
      const response = await fetch('http://178.128.217.110:8164/user', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
    }, []);

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