const ADDRESS0 = "0x0000000000000000000000000000000000000000";
const generateRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
const delay = ms => new Promise(res => setTimeout(res, ms));
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const bigNumberReplacer = (key, value) =>
  value && typeof value === "object" && value.type == "BigNumber"
      ? ethers.BigNumber.from(value).toString()
      : value;
