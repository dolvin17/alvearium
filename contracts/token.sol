// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MagicTestToken is ERC20 {
    constructor() ERC20("Nike Token", "Nike NFT") {}

    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}