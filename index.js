import getNFT from "./alchemyNFT/getNFT.js";

(async function() {
  const NFTs = await getNFT();

  console.log(NFTs);
})()