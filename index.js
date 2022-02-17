import getNFT from "./alchemyNFT/getNFT.js";
import getNFTMetadata from "./alchemyNFT/getNFTMetadata.js";
import covalentGetNFT from "./Covalent/CovalentGetNFT.js"
import fs from "fs"

(async function() {
  const NFTs = await getNFT();
  console.log(NFTs);

  // const NFTMetadata = await getNFTMetadata();
  // console.log(NFTMetadata);

  // const covalentNft = await covalentGetNFT();
  // console.log(covalentNft)

  fs.writeFile('alchemyUserNftsWithMetadata1.json', NFTs, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
})()