const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const JSToken = await hre.ethers.getContractFactory("JSToken");
  const jstoken = await JSToken.deploy("Jamell Sameuls Token", "JST");

  await greeter.deployed();
  await jstoken.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Token deployed to:", jstoken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });