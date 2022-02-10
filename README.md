**Run**

`node index.js`

**Install**

`node install`

**Compare test**

`npm run test`


### Pros & Cons

**AlchemyNFT PROS**
- Simple
- getNFT: includes NFT contract addresses and number count
- getNFTMetadata: responses, able to get  metadata from URI
- Already using alchemy
- AlchemyNFT CONS
- Not clear limits; uses compute units/month
- Obligated pagination
- unknown unknowns (new) 


**Covalent PROS**
- Free 
- Clear limits: 20 concurrent requests, no volume limit
- General-purpose queries single API
- 17 supported networks
- Response > 100 
- Primer query language 
	
**Covalent CONS**
- Balances_v2 API endpoint not specific for NFTs, the response needs parsing
- Uncomplete documentation
