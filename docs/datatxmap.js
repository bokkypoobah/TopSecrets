async function dataToTx(data, amountUnit, provider) {
  console.log(moment().format("HH:mm:ss") + " dataToTx: " + JSON.stringify(data, bigNumberReplacer, 2));
  let tx = null;
  const errors = {};

  if (data.chainId) {
    const network = await provider.getNetwork();
    const chainId = parseInt(network.chainId);
    if (data.chainId != chainId) {
      errors.chainId = "Different";
    }
  } else {
    errors.complete = false;
  }

  let from = null;
  if (data.from) {
    try {
      from = ethers.utils.getAddress(data.from);
      if (data.nonce) {
        try {
          const transactionCount = await provider.getTransactionCount(from);
          if (data.nonce != transactionCount) {
            errors.nonce = "Expecting " + transactionCount;
          }
        } catch (e) {
          errors.from = "Error: getTransactionCount()";
        }
      } else {
        errors.complete = false;
      }
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

  if (data.action == "ethtransfer") {
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
      chainId: data.chainId,
      nonce: data.nonce,
      accessList: [],
    };

  } else if (data.action == "erc20transfer") {
    const decimals = 18;
    const contract = new ethers.Contract(data.token, ERC20ABI, provider);
    // const tokens = ethers.utils.parseUnits(data.tokens, 18); // TODO: Decimals
    let tokens = null;
    if (data.tokens) {
      try {
        tokens = ethers.utils.parseUnits(data.tokens, decimals);
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
      data: tokenData && tokenData.data || null,
      chainId: data.chainId,
      nonce: data.nonce,
      accessList: [],
    };
  } else {
    errors.complete = false;
  }
  if (tx) {
    if (data.gasLimit) {
      console.log(moment().format("HH:mm:ss") + " dataToTx - tx: " + JSON.stringify(tx, bigNumberReplacer, 2));
      try {
        const signer = new ethers.VoidSigner(tx.from, provider);
        const estimatedGas = await signer.estimateGas(tx);
        console.log("estimatedGas: " + estimatedGas.toString());
        if (data.gasLimit < estimatedGas) {
          errors.gasLimit = "Warning: < estimatedGas: " + estimatedGas;
        }
        tx.gasLimit = data.gasLimit;
      } catch (e) {
        errors.gasLimit = "Error estimateGas()";
      }
    } else {
      errors.complete = false;
    }
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
