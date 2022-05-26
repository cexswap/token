require('dotenv').config({path:__dirname+'/.env'})
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('solidity-coverage');
require('hardhat-deploy');

const { MNEMONIC, SCAN_API_KEY, DEPLOYER_ACCOUNT } = process.env

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      live: false,
      saveDeployments: true,
      tags: ["local"]
    },
	  ganache: {
      url: "http://127.0.0.1:8545",
      live: false,
      saveDeployments: true,
      tags: ["local"]
    },
    hardhat: {
    },
    testnet: {
      url: "",
      chainId: 0,
      gasPrice: 500000000000,
      accounts: {mnemonic: MNEMONIC}
    },
    mainnet: {
      url: "",
      chainId: 0,
      gasPrice: 500000000000,
      accounts: {mnemonic: MNEMONIC}
    }
  },
  etherscan: {
    apiKey: SCAN_API_KEY
  },
  namedAccounts: {
    deployer: {
        default: DEPLOYER_ACCOUNT,
    },
  },
};
