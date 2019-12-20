import {loadToken} from '../utils/localStorage';
import axios from 'axios';
export const getImportProducts = async (type) => {
    // console.log(loadToken())
    const response = fetch('http://178.128.217.110:8302/quanLyXuatNhapHang/get?type='+type, {
        method: 'GET',
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Credentials': true,
          // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
          // 'Content-Type':'application/json',
          // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, User-Token, Authorization',
          // 'Content-Type': 'text/plain;charset=utf-8',
          'Authorization': 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTU3NjcyNTkyMiwiZXhwIjoxNTc2NzI5NTIyfQ.eyJ1c2VybmFtZSI6Im5ndXllbm5odXk5OCJ9.Pc9EBjtTlznpXWX9c6NU_-oVJv6pSyP20V3lJ9Bs-2UVuEkME7Cy1FRgNIYsbDevnzTjODt2nkxdzZ-AQ0gV0Q'
        }
    });
    // const data = await response.json();
    console.log(response);

    // axios.get('http://178.128.217.110:8302/quanLyXuatNhapHang/get?type='+type,config)
    // .then(result=>{
    //   console.log(result);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })

    // return await result.json();
}


export const saveImportProduct = async (importProduct) =>{
  console.log(importProduct);
}