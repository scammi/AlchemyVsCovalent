import getNFT from './alchemyNFT/getNFT';
import CovalentGetNFT from './Covalent/CovalentGetNFT'

describe("Compare NFT API ", () => {

  it("Queries using alchemyAPI", () => {
    getNFT()
  })

  it("Queries using CovalentAPI", () => {
    CovalentGetNFT()
  })
})