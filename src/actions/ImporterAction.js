import {loadToken} from '../utils/localStorage';
export const getImportProducts = async (type) => {
  const res = await fetch('http://178.128.217.110:8302/quanLyXuatNhapHang/elasticsearch', {
    method: 'POST',
    body: JSON.stringify({size: 100}),
    // headers: {
    //   authorization: loadToken(),
    // }
  });
  return res;
}


export const saveImportProduct = async (importProduct) =>{
  const res = await fetch('http://127.0.0.1:5000/createProduct', {
    method: 'POST',
    headers: {
      authorization: loadToken(),
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(importProduct)
  });
  return res;
}