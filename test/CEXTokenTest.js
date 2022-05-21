const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CEXToken", function () {
  it("Test basic informations", async function () {
    const Contract = await ethers.getContractFactory("CEXToken");
    const obj = await Contract.deploy();
    await obj.deployed();

    expect(await obj.totalSupply()).to.equal("100000000000000000000000000");
    expect(await obj.name()).to.equal("CEX Swap");
    expect(await obj.symbol()).to.equal("$CEX");
    expect(await obj.decimals()).to.equal(18);
  });
});