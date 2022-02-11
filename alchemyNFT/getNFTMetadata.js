import fetch from 'node-fetch';
import 'dotenv/config';

export default function getNFTMetadata() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const apiKey = process.env.apiKeyAlchemy;
  const baseURL = `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}/getNFTMetadata`;
  const contractAddr = "0xe2a9b15E283456894246499Fb912CCe717f83319";
  const tokenId = "240";
  const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`;
  
  const metadata = fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));

  return metadata
}  
