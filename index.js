import getNFT from "./alchemyNFT/getNFT.js";
import getNFTMetadata from "./alchemyNFT/getNFTMetadata.js";

(async function() {
  // const NFTs = await getNFT();
  // console.log(NFTs);

  const NFTMetadata = await getNFTMetadata();
  console.log(NFTMetadata);
})()