/*
 * [65] Valid Number
 *
 * https://leetcode.com/problems/valid-number/description/
 *
 * algorithms
 * Hard (13.06%)
 * Total Accepted:    95.6K
 * Total Submissions: 732.2K
 * Testcase Example:  '"0"'
 *
 * Validate if a given string is numeric.
 * 
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * 
 * Note: It is intended for the problem statement to be ambiguous. You should
 * gather all requirements up front before implementing one.
 * 
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your
 * function signature accepts a const char * argument, please click the reload
 * button to reset your code definition.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s.trim()?(isNaN(Number(s))?false:true):false
};
