//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/YourContract.sol";
import "../contracts/AlkamariEscrow.sol";
import "../contracts/USDT.sol";
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
  error InvalidPrivateKey(string);

  function run() external {
    uint256 deployerPrivateKey = setupLocalhostEnv();
    if (deployerPrivateKey == 0) {
      revert InvalidPrivateKey(
        "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
      );
    }
    vm.startBroadcast(deployerPrivateKey);

    AlkamariEscrow alkamariEscrow = new AlkamariEscrow();
    console.logString(
      string.concat(
        "AlkamariEscrow deployed at: ", vm.toString(address(alkamariEscrow))
      )
    );

    USDT usdt = new USDT("Tether", "USDT", 6);
    console.logString(
      string.concat(
        "USDT deployed at: ", vm.toString(address(usdt))
      )
    );

    vm.stopBroadcast();

    /**
     * This function generates the file containing the contracts Abi definitions.
     * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
     * This function should be called last.
     */
    exportDeployments();
  }

  function test() public { }
}
