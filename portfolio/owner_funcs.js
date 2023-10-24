const _addPrivilegedContract = async () => {
  try {
    const response = await token.addPrivilegedContract(_trustedDeFiContract);
  } catch (err) {
    console.log(response);
  }
};

const _removePrivilegedContract = async () => {
  try {
    const response = await token.removePrivilegedContract(_trustedDeFiContract);
  } catch (err) {
    console.log(response);
  }
};

const _renounceOwnership = async () => {
  try {
    const response = await token.renounceOwnership();
  } catch (err) {
    console.log(response);
  }
};

const _transferOwnership = async () => {
  try {
    const response = await token.transferOwnership(newOwner);
  } catch (err) {
    console.log(response);
  }
};

const _setParams = async () => {
  try {
    const response = await token.setParams(newBasisPoints, newMaxFee);
  } catch (err) {
    console.log(response);
  }
};

const _addToBlockedList = async () => {
  try {
    const response = await token.addToBlockedList(_user);
  } catch (err) {
    console.log(response);
  }
};

const _removeFromBlockedList = async () => {
  try {
    const response = await token.removeFromBlockedList(_user);
  } catch (err) {
    console.log(response);
  }
};

const _mint = async () => {
  try {
    const response = await token.mint(_destination, _amount);
  } catch (err) {
    console.log(response);
  }
};

const _burn = async () => {
  try {
    const response = await token.burn(_account, _amount);
  } catch (err) {
    console.log(response);
  }
};

const _renounceOwnershipBridge = async () => {
  try {
    const response = await bridge.renounceOwnership();
  } catch (err) {
    console.log(response);
  }
};

const _transferOwnershipBridge = async () => {
  try {
    const response = await bridge.transferOwnership(newOwner);
  } catch (err) {
    console.log(response);
  }
};

const _grantRole = async () => {
  try {
    const response = await bridge.grantRole(account);
  } catch (err) {
    console.log(response);
  }
};

const _revokeRole = async () => {
  try {
    const response = await bridge.revokeRole(account);
  } catch (err) {
    console.log(response);
  }
};

const _renounceRole = async () => {
  try {
    const response = await bridge.renounceRole(account);
  } catch (err) {
    console.log(response);
  }
};

const _pause = async () => {
  try {
    const response = await bridge.pause();
  } catch (err) {
    console.log(response);
  }
};

const _unpause = async () => {
  try {
    const response = await bridge.unpause();
  } catch (err) {
    console.log(response);
  }
};

const _renounceOwnershipExch = async () => {
  try {
    const response = await exch.renounceOwnership();
  } catch (err) {
    console.log(response);
  }
};

const _transferOwnershipExch = async () => {
  try {
    const response = await exch.transferOwnership(newOwner);
  } catch (err) {
    console.log(response);
  }
};

const _addToken = async () => {
  try {
    const response = await exch.addToken(ticker, tokenAddress);
  } catch (err) {
    console.log(response);
  }
};

const _depositETH = async () => {
  try {
    const response = await exch.depositETH({ value: amount });
  } catch (err) {
    console.log(response);
  }
};

const _depositToken = async () => {
  try {
    const response = await exch.depositToken(amount, ticker);
  } catch (err) {
    console.log(response);
  }
};

const _withdraw = async () => {
  try {
    const response = await exch.withdraw(amount, ticker);
  } catch (err) {
    console.log(response);
  }
};

const _withdrawEth = async () => {
  try {
    const response = await exch.withdrawEth(amount);
  } catch (err) {
    console.log(response);
  }
};

const _pauseExch = async () => {
  try {
    const response = await exch.pause();
  } catch (err) {
    console.log(response);
  }
};

const _unpauseExch = async () => {
  try {
    const response = await exch.unpause();
  } catch (err) {
    console.log(response);
  }
};
