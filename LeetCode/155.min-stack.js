/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (35.33%)
 * Total Accepted:    263.6K
 * Total Submissions: 745.3K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 *
 * push(x) -- Push element x onto stack.
 *
 *
 * pop() -- Removes the element on top of the stack.
 *
 *
 * top() -- Get the top element.
 *
 *
 * getMin() -- Retrieve the minimum element in the stack.
 *
 *
 *
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 *
 */
/**
 * initialize your data structure here.
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.size++;
  this.arr.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.size--;
  return this.arr.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  var min = this.arr[0];
  for (var i = 0; i < this.size; i++) {
    if (this.arr[i] < min) {
      min = this.arr[i];
    }
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = Object.create(MinStack);
console.log(MinStack.constructor);
