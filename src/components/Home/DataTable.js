import React, {useEffect, useState} from 'react';
import { MDBDataTable } from 'mdbreact';

const DataTable = (props) => {
  const columns = [
    {
      label: 'Importer',
      field: 'importer_name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Product',
      field: 'product_name',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Amount',
      field: 'product_amount',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Price',
      field: 'product_price',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Create at',
      field: 'create_at',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Type',
      field: 'type',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Exporter',
      field: 'exporter_name',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Update at',
      field: 'update_at',
      sort: 'asc',
      width: 100
    }
  ]
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    setRows(props.data.map((p) => {
      return {
        importer_name : p.importerName,
        product_name : p.product_name,
        product_amount : p.product_amount,
        product_price: p.product_price,
        create_at: p.create_at,
        type: p.type,
        exporter_name: p.exporterName,
        update_at: p.update_at
      }
    }))
    
  }, [props.data])

  return (
    <MDBDataTable
      striped
      hover
      data={{columns: columns, rows: rows}}
    />
  );
}

export default DataTable;