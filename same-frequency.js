// add whatever parameters you deem necessary
function sameFrequency(nums1, nums2) {
  let str1 = nums1.toString();
  let str2 = nums2.toString();
  if (str1.length !== str2.length) return false;
  const nums1Freq = {};
  const nums2Freq = {};
  for (let i = 0; i < str1.length; i++) {
    nums1Freq[str1[i]] = (nums1Freq[str1[i]] || 0) + 1;
  }
  for (let j = 0; j < str2.length; j++) {
    nums2Freq[str2[j]] = (nums2Freq[str2[j]] || 0) + 1;
  }

  for (let key in nums1Freq) {
    if (nums1Freq[key] !== nums2Freq[key]) return false;
  }
  return true;
}
// two params
// check if they have the same freq
// return boolean

// make freqCounter for nums1, nums2
// for key of nums1
// if(value of keyof nums1 !== value of key of nums2 )
// return false
// return true
