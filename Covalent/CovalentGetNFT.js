import fetch from 'node-fetch';
import 'dotenv/config';

export default function CovalentGetNFT() {
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  // Replace with your Alchemy API key:
  const apiKey = process.env.apiKeyCovalent;
  const baseUri = "https://api.covalenthq.com/v1/{endpoint}"
  // Replace with the wallet address you want to query:
  const ownerAddr = "0x277BFc4a8dc79a9F194AD4a83468484046FAFD3A";
  const apiUrl = `42/address/${ownerAddr}/balances_v2/?key=${apiKey}&nft=true&no-nft-fetch=true&match={"type":"nft"}`;
  
  const fetchURL = baseUri.replace('{endpoint}', apiUrl)
  // Make the request and print the formatted response:
  const request = fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));

  return request;
}