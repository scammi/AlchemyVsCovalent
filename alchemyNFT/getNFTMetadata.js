import fetch from 'node-fetch';
import 'dotenv/config';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const apiKey = process.env.apiKeyAlchemy;
const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}/getNFTMetadata`;
const contractAddr = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
const tokenId = "2";
const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`;

fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


