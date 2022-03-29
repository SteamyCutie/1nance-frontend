/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "";
const ROPSTEN_PRIVATE_KEY = "";

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {},
        localhost: {
            chainId: 31337,
            accounts: [`${HARDHAT_PRIVATE_KEY}`],
        },
        ropsten: {
            url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
            accounts: [`${ROPSTEN_PRIVATE_KEY}`],
        },

        bscTestnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            chainId: 97,
            gasPrice: 20000000000,
            accounts: [`${ROPSTEN_PRIVATE_KEY}`],
        },
    },

    etherscan: {
        apiKey: {
            ropsten: "BUMP7B9BU6N26TTPBMGSSU69VUJSS5WSP5",
            bscTestnet: "K2G36S7S9HKSPFPCNW8QPSEX6V1ACQD982",
        },
    },

    paths: {
        sources: "./contracts",
        artifacts: "./src/artifacts",
    },
};
