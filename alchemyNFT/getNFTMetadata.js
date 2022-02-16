import fetch from 'node-fetch';
import 'dotenv/config';

export default function getNFTMetadata() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const apiKey = process.env.apiKeyAlchemy;
  const baseURL = `https://eth-kovan.g.alchemy.com/v2/${apiKey}/getNFTMetadata`;
  const contractAddr = "0xD4F7389297d9cea850777EA6ccBD7Db5817a12b2";
  const tokenId = "22";
  const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`;
  
  const metadata = fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));

  return metadata
}  
