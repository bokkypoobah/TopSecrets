async function dataToTx(data, amountUnit, provider) {
  console.log(moment().format("HH:mm:ss") + " dataToTx: " + JSON.stringify(data, bigNumberReplacer, 2));
  let tx = null;
  const errors = {};
  if (data.action == "ethtransfer") {
    let from = null;
    if (data.from) {
      try {
        from = ethers.utils.getAddress(data.from);
      } catch (e) {
        errors.from = "Invalid";
      }
    } else {
      errors.complete = false;
    }
    let to = null;
    if (data.to) {
      try {
        to = ethers.utils.getAddress(data.to);
      } catch (e) {
        errors.to = "Invalid";
      }
    } else {
      errors.complete = false;
    }
    let value = null;
    if (data.amount) {
      try {
        value = ethers.utils.parseUnits(data.amount, amountUnit);
      } catch (e) {
        errors.amount = "Invalid";
      }
    } else {
      errors.complete = false;
    }
    tx = {
      from,
      to,
      value,
      data: null,
    };
  } else if (data.action == "erc20transfer") {
    const contract = new ethers.Contract(data.token, ERC20ABI, provider);
    const tokens = ethers.utils.parseUnits(data.tokens, 18); // TODO: Decimals
    // let tokens = null;
    if (data.tokens) {
      try {
        tokens = ethers.utils.parseUnits(data.tokens, amountUnit);
      } catch (e) {
        errors.tokens = "Invalid";
      }
    } else {
      errors.complete = false;
    }
    const tokenData = await contract.populateTransaction.transfer(data.to, tokens.toString());
    tx = {
      from: data.from,
      to: data.token,
      value: 0,
      data: tokenData,
    };
  } else {
    errors.complete = false;
  }
  return { tx, errors };
}

function txToData(tx, oldData) {
  console.log(moment().format("HH:mm:ss") + " txToData: " + JSON.stringify(tx, bigNumberReplacer, 2));
  let data = null;

  // ERC-20 transfer
  if (tx.data && tx.data.length == 138 && tx.data.substring(0, 10) == "0xa9059cbb") {
    const tokensTo = ethers.utils.getAddress(tx.data.substring(34, 74));
    const tokens = ethers.BigNumber.from("0x" + tx.data.substring(75, 138));
    data = {
      action: "erc20transfer",
      token: tx.to,
      from: tx.from,
      to: tokensTo,
      amount: null,
      amountUnit: oldData && oldData.amountUnit || "ether", // TODO: Move out of data into settings
      tokens: tokens.toString(),
      data: null,
      chainId: tx.chainId,
      nonce: tx.nonce,
      gasLimit: tx.gasLimit,
      transactionType: tx.type,

      // gasPrice: null,
      // maxFeePerGas: null,
      // maxPriorityFeePerGas: null,
      // maxFeePerGasUnit: "gwei",
      // maxPriorityFeePerGasUnit: "gwei",
      // gasPriceUnit: "gwei",
      // signedTx: null,
      // decodedSignedTx: null,
      // error: null,

    };
  // ETH tx
  } else if (tx.data == null || tx.data == "0x") {
    data = {
      action: "ethtransfer",
      token: null,
      from: tx.from,
      to: tx.to,
      amount: tx.value.toString(),
      amountUnit: oldData && oldData.amountUnit || "ether", // TODO: Move out of data into settings
      tokens: null,
      data: null,
      chainId: tx.chainId,
      nonce: tx.nonce,
      gasLimit: tx.gasLimit,
      transactionType: tx.type,

      // gasPrice: null,
      // maxFeePerGas: null,
      // maxPriorityFeePerGas: null,
      // maxFeePerGasUnit: "gwei",
      // maxPriorityFeePerGasUnit: "gwei",
      // gasPriceUnit: "gwei",
      // signedTx: null,
      // decodedSignedTx: null,
      // error: null,

    };
  } else {
    alert("Unknown transaction");
  }
  console.log("data: " + JSON.stringify(data, bigNumberReplacer, 2));

  return data;
}
