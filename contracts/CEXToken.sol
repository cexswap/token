// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract CEXToken is Context, ERC20, Ownable, ERC20Burnable {
    constructor() ERC20("CEX Swap", "$CEX") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}