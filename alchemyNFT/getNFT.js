import fetch from 'node-fetch';
import 'dotenv/config';

export default function getNFT() {
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // Replace with your Alchemy API key:
  const apiKey = process.env.apiKeyAlchemy;
  const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}/getNFTs/`;
  // Replace with the wallet address you want to query:
  const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
  const fetchURL = `${baseURL}?owner=${ownerAddr}`;
  
  // Make the request and print the formatted response:
  const request = fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));

  return request;
}