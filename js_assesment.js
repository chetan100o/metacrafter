// Create an array to store all of our NFTs
const NFTs = [];

// Function to mint NFTs
const mintNFT = function (_name, _color, _genre, _background) {
  const NFT = {
    name: _name,
    color: _color,
    genre: _genre,
    background: _background,
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
    console.log(`Type: ${NFTs[i].genre}`);
    console.log(`Rarity: ${NFTs[i].background}\n`);
  }

  console.log("Finished printing all NFTs.\n");
};

// Function to get the total number of minted NFTs
const getTotalSupply = function () {
  console.log(`Total number of minted NFTs: ${NFTs.length}`);
};

// Minting some NFTs
mintNFT("A1", "yellow", "science", "city");
mintNFT("A2", "orange", "fantasy", "beach");
mintNFT("A3", "black", "steampunk", "jungle");
mintNFT("A4", "Pink", "action", "nature");

// Print all NFTs
printNFTs();

// Get the total number of minted NFTs
getTotalSupply();
