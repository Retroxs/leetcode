/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (24.99%)
 * Total Accepted:    569.8K
 * Total Submissions: 2.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", which the length is 3.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = "";
  let tempResult = "";

  for (let i = 0, n = s.length; i < n; i++) {
    let index = tempResult.indexOf(s[i])
    if(index === -1) {
      tempResult += s[i];
    } else {
      if (tempResult.length >=result.length) {
        result = tempResult;
      }
        tempResult = tempResult.slice(index+1)+s[i];
    }
  }
    return result.length > tempResult.length ? result.length : tempResult.length  
};
