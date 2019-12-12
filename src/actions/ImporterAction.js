import {loadToken} from '../utils/localStorage';
export const getImportProducts = async (type) => {
    // console.log(loadToken())
    // const response = fetch('http://178.128.217.110:8164/quanLyXuatNhapHang_DC2019_7/get?type='+type, {
    //     method: 'GET',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Credentials': true,
    //         'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
    //         'Content-Type':'application/json',
    //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, User-Token, authorization',
    //         'authorization': 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTU3NjEyMzE4NSwiZXhwIjoxNTc2MTI2Nzg1fQ.eyJ1c2VybmFtZSI6Im5ndXllbm5odXkifQ.WACQOBAjrh9kYE7CNZc-9mlNv4sjMAxqNmTNNHLRrn9ofZzqfJaYy6Rs2pnhCKvYKuGsgpsjmW5cfzbfrT9l9A'
    //     }
    // });
    // const data = await response.json();
    // console.log(data);
    const data = {
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
    return await data.json();
}
