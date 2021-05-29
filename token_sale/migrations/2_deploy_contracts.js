const AnujaToken = artifacts.require("./AnujaToken.sol");

const AnujaTokenSale = artifacts.require("./AnujaTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(AnujaToken, 1000000).then(function() {
    var tokenPrice = 1000000000000000;
    return deployer.deploy(AnujaTokenSale, AnujaToken.address, tokenPrice);
  });
};

