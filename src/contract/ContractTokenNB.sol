pragma solidity ^0.8.4;

abstract contract ERC20Basic {

  uint256 public totalSupply;

  function balanceOf(address _addr) public virtual view returns (uint256);

  function  transfer(address _to, uint256 _value) virtual public returns (bool);

  event Transfer(address indexed _from, address indexed _to, uint256 value);

}

contract BasicToken is ERC20Basic {

  mapping(address => uint256) balances;

  function transfer(address _to, uint256 _value) public virtual override returns (bool) {
    require(balances[msg.sender] > _value, "Not enought amount to transfer");
    balances[msg.sender] = balances[msg.sender] - _value;
    balances[_to] = balances[_to] + _value;
    emit Transfer(msg.sender, _to, _value);
    return true;
  }

  function balanceOf(address _addr) public virtual override view returns (uint256 balance) {
    return balances[_addr];
  }

}

abstract contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) public virtual view returns (uint256);
  function transferFrom(address from, address to, uint256 value) public virtual returns (bool);
  function approve(address owner, uint256 value) public virtual returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 _value);
}

contract Token is ERC20, BasicToken {
  mapping(address => mapping(address => uint256)) allowed;

  function transferFrom(address _from, address _to, uint256 _value) public virtual override returns (bool) {
    require(balanceOf(_from) > _value);
    require(allowed[_from][msg.sender] > _value);

    uint256 _allowance = allowed[_from][msg.sender];

    balances[_from] = balances[_from] - _value;
    balances[_to] = balances[_to] - _value;

    allowed[_from][msg.sender] = _allowance - _value;
    emit Transfer(_from, _to, _value);

    return true;
  }

  function approve(address _spender, uint256 _value) public virtual override returns (bool) {
    require(_value > 0);
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

  function allowance(address _owner, address _spender) public virtual override view returns (uint256 remaining) {
    return allowed[_owner][_spender];
  }

}

contract NBToken is Token {
  string public NAME = "1Nance Exchange";
  string public SYMBOL = "NB";
  uint256 public DECIMALS = 18;

  uint256 public INITIAL_SUPPLY = 500000000 * 10**18;

  /**
   * Kimera Token Constructor
   * @dev Create and issue tokens to msg.sender.
   */
  constructor() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}