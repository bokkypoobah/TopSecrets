function dataToTx(data) {
  console.log(moment().format("HH:mm:ss") + " dataToTx: " + JSON.stringify(data, bigNumberReplacer, 2));
  let tx = null;
  return tx;
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
