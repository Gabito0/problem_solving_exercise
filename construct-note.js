// add whatever parameters you deem necessary
function freqCounter(str) {
  let frequencies = new Map();
  for (let val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }
  return frequencies;
}
let results = freqCounter("aaaddd");

function constructNote(msg, str) {
  // create a counter for msg and str
  const msgFreq = freqCounter(msg);
  const strFreq = freqCounter(str);
  // loop inside them and see if msg has less than is same amount of letter in str
  for (let [key, value] of msgFreq) {
    if (!strFreq.has(key) || strFreq.get(key) < msgFreq.get(key)) {
      return false;
    }
  }
  return true;
  // if not return false
  // return true if str2 can make msg
}
