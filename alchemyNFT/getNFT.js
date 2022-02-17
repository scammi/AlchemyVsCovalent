import fetch from 'node-fetch';
import 'dotenv/config';

export default function getNFT() {
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // Replace with your Alchemy API key:
  const apiKey = process.env.apiKeyAlchemy;
  const baseURL = `https://eth-kovan.g.alchemy.com/v2/${apiKey}/getNFTs/`;
  // Replace with the wallet address you want to query:
  const ownerAddr = "0x277BFc4a8dc79a9F194AD4a83468484046FAFD3A";
  const fetchURL = `${baseURL}?owner=${ownerAddr}&withMetadata=true`;
  
  // Make the request and print the formatted response:
  const request = fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));

  return request;
}