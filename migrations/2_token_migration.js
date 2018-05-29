var OpenBazaarToken = artifacts.require("./OpenBazaarToken.sol");

module.exports = function(deployer) {
  deployer.deploy(OpenBazaarToken, 1000000000, "OpenBazaar", "OBT");
};