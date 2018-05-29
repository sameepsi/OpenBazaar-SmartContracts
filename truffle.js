module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas:6000000
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby network id
      gas:6000000,
      from:"0x844d12d033707382d3d963739bf72a22a434323d"
    }
  }
};