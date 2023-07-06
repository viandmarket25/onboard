/***
 * 
 * 
 */
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8001';
/**
 * 
 * @param {*} cookieName 
 * @returns 
 */

  
let token
if (typeof getCookie("siteAccessT") === 'undefined') {
  console.log('The variable is undefined.');
} else {
  token=JSON.parse(getCookie("siteAccessT")).token
}
console.log(token)
function fetchProducts() {
  return axios.get(`${BASE_URL}/data`);
}

function createProduct(data) {
  return axios.post(`${BASE_URL}/products/create`,
   data, {
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"multipart/form-data"
          
        },
    },
   );
  
}

function updateProduct(data) {
  return axios.post(`${BASE_URL}/products/update`,
   data, {
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"multipart/form-data"
          
        },
    },
   );
  
}

function deleteProduct(data) {
  return axios.post(`${BASE_URL}/products/delete`,
   data, {
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"multipart/form-data"
          
        },
    },
   );
  
}

function fetchProduct(id) {
  //return axios.post(`${BASE_URL}/products/${id}`, data);
  return axios.get(`${BASE_URL}/products/${id}`,{
    headers: {
        "Authorization" : `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json"
        
      },
  });
}

export default {
  createProduct,
  fetchProducts,
  fetchProduct
};