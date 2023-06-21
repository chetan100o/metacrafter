// Create an array to store all of our NFTs
const NFTs = [];

// Function to mint NFTs
const mintNFT = function (_name, _color, _type, _rarity) {
  const NFT = {
    name: _name,
    color: _color,
    type: _type,
    rarity: _rarity,
  };

  NFTs.push(NFT);

  console.log(`Congratulations! Your NFT "${NFT.name}" has been minted successfully.\n`);
};

// Function to print all NFTs
const printNFTs = function () {
  console.log("All NFTs:\n");

  for (let i = 0; i < NFTs.length; i++) {
    console.log(`ID: ${i + 1}`);
    console.log(`Name: ${NFTs[i].name}`);
    console.log(`Color: ${NFTs[i].color}`);
    console.log(`Type: ${NFTs[i].type}`);
    console.log(`Rarity: ${NFTs[i].rarity}\n`);
  }

  console.log("Finished printing all NFTs.\n");
};

// Function to get the total number of minted NFTs
const getTotalSupply = function () {
  console.log(`Total number of minted NFTs: ${NFTs.length}`);
};

// Minting some NFTs
mintNFT("NFT 1", "yellow", "cars", "Rare");
mintNFT("NFT 2", "orange", "Music", "Common");
mintNFT("NFT 3", "black", "Sports", "Epic");
mintNFT("NFT 4", "Pink", "landscape", "Legendary");

// Print all NFTs
printNFTs();

// Get the total number of minted NFTs
getTotalSupply();
