// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract NBICO is Ownable {
    using SafeMath for uint256;
    address public liquidityAddress;
    address public tokenAddr;
    uint256 public constant Rate_1 = 2700;
    uint256 public constant Rate_2 = 2500;
    uint256 public constant Rate_3 = 2300;

    uint256 public constant CAP = 5000;

    uint256 public constant START_1 = 1656604800; //2022-07-01-00:00:00 GMT+8 time
    uint256 public constant START_2 = 1657209600; //2022-07-08-00:00:00 GMT+8 time
    uint256 public constant START_3 = 1657814400; //2022-07-15-00:00:00 GMT+8 time
    uint256 public constant START_4 = 1658419200; //2022-07-22-00:00:00 GMT+8 time

    uint256 public constant initial_token_count = 1000000 * 10**18;
    uint256 raisedAmount = 0;
    bool public initialized = false;

    event BoughtTokens(address indexed to, uint256 indexed value);

    modifier whenSaleIsActive() {
        require(isActive());
        _;
    }

    constructor(address _tokenAddr) {
        require(_tokenAddr != address(0));
        tokenAddr = _tokenAddr;
        liquidityAddress = msg.sender;
        console.log("token address=>", tokenAddr);
    }

    function initialize() public onlyOwner {
        console.log("hi", msg.sender);
        require(initialized == false);
        require(tokensAvailable() > initial_token_count);
        initialized = true;
    }

    function buyTokens() public payable whenSaleIsActive {
        uint256 weiAmount = msg.value;
        uint256 tokens = weiAmount.mul(Rate_1);
        require(
            IERC20(tokenAddr).balanceOf(liquidityAddress) >= tokens,
            "not engough tokens"
        );
        IERC20(tokenAddr).transfer(msg.sender, tokens);
        emit BoughtTokens(msg.sender, tokens);
        address payable admin = payable(liquidityAddress);
        admin.transfer(address(this).balance);
        raisedAmount = raisedAmount + msg.value;
    }

    receive() external payable {
        buyTokens();
    }

    function withDraw(uint256 withDrawAmount) public onlyOwner {
        require(IERC20(tokenAddr).balanceOf(msg.sender) >= withDrawAmount);
        IERC20(tokenAddr).transfer(msg.sender, withDrawAmount * (10**18));
    }

    function tokenBalanceOf() public view returns (uint256) {
        uint256 balance = IERC20(tokenAddr).balanceOf(address(this));
        return balance;
    }

    function isActive() public view returns (bool) {
        return (initialized == true);
    }

    function tokensAvailable() public view returns (uint256) {
        return IERC20(tokenAddr).balanceOf(liquidityAddress);
    }
}
