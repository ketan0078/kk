const defaultChainId = 4;

const supportedNetworks = {
  // npx hardhat node
  // npx hardhat run scripts/deployForHardhat.js --network localhost
  // Copy console address
  // 1337
  //31337
  31337: {
    name: "Hardhat",
    tokenSymbol: "ETH",
    rpcURL: "http://localhost:8545",
    address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  },
  // npx hardhat run scripts/deployForTestnet.js --network mumbai
  // Returned address is wrong. https://github.com/nomiclabs/hardhat/issues/2162.
  // Search your deployer address on polygonscan. Get contract from there
  80001: {
    name: "Mumbai",
    tokenSymbol: "MATIC",
    rpcURL: "https://rpc-mumbai.maticvigil.com",
    address: "0xE20774116437d9c14cdBbe59b41fF5Ee1CfE044B",
  },
  // npx hardhat run scripts/deployForTestnet.js --network rinkeby
  // Copy console address
  4: {
    name: "Rinkeby",
    tokenSymbol: "ETH",
    rpcURL: "https://rinkeby-light.eth.linkpool.io/",
    address: "0xc3008502aa7Ceba9C85b5B6F62f1633C3d7bCF54",
  },
};

export { defaultChainId, supportedNetworks };
