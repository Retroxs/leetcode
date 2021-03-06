/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.13%)
 * Total Accepted:    580.3K
 * Total Submissions: 2M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
		let addTwoNumbers = (l1, l2) => {
				let results = [];
				let remainders = [];
				for (let i = 0; i < l1.length; i++) {
						let adds = l1[i] + l2[i] + (i > 0 ? remainders[i - 1] : 0);
						let result = adds / 10;
						remainders.push(results < 1 ? 0 : result);
						results.push(adds % 10);
				}
				return results;
		}   
};

