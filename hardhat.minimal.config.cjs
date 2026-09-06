require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: {
    version: '0.8.30',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    amoy: {
      url: 'https://polygon-amoy.g.alchemy.com/v2/YuiO_sWS_53rF2oOHjVL5OvrKvOxXWwO',
      accounts: ['d3c709952996b15cfed2ad2973c8d986b9fb6c4080b64665c4adb53b4d7e8fd0']
    }
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts'
  }
};