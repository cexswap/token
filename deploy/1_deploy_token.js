module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  
  console.log("Running deploy script for contract $CEX Token");
  console.log('network id:', await getChainId());

  const tokenDeployment = await deploy('CEXToken', {
    from: deployer,
    args: [],
  });

  console.log('$CEX token deployed to:', tokenDeployment.address);

  console.log("Verifying contract");

  await hre.run('verify:verify', {
    address: tokenDeployment.address,
  });
  
  console.log("Token contract verified");
};
