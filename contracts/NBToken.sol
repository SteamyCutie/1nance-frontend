// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract NBToken is ERC20 {
    uint256 constant initialSupply = 500000000 * 10**18;

    constructor() ERC20("1Nance Exchange", "NB") {
        _mint(msg.sender, initialSupply);
    }
}
