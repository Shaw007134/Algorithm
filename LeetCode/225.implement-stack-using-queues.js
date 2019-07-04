/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 *
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (37.70%)
 * Total Accepted:    119.3K
 * Total Submissions: 314.6K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * Implement the following operations of a stack using queues.
 *
 *
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * empty() -- Return whether the stack is empty.
 *
 *
 * Example:
 *
 *
 * MyStack stack = new MyStack();
 *
 * stack.push(1);
 * stack.push(2);
 * stack.top();   // returns 2
 * stack.pop();   // returns 2
 * stack.empty(); // returns false
 *
 * Notes:
 *
 *
 * You must use only standard operations of a queue -- which means only push to
 * back, peek/pop from front, size, and is empty operations are valid.
 * Depending on your language, queue may not be supported natively. You may
 * simulate a queue by using a list or deque (double-ended queue), as long as
 * you use only standard operations of a queue.
 * You may assume that all operations are valid (for example, no pop or top
 * operations will be called on an empty stack).
 *
 *
 */
/**
 * Initialize your data structure here.
 */

var MyStack = function() {
  this.queueA = [];
  this.queueB = [];
};


/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if(this.queueA.length !== 0){
    this.queueA.push(x);
  }else{
    this.queueB.push(x);
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  this.moveAToB();
  this.queueA.shift();
};

MyStack.prototype.moveAToB = function() {
  if (this.queueB.length !== 0) {
    var tmp = this.queueA;
    this.queueA = this.queueB;
    this.queueB = tmp;
  }
  var len = this.queueA.length;
  for (var i = 0; i < len - 1; i++) {
    var queuePeek = this.queueA.shift();
    this.queueB.push(queuePeek);
  }
};
/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  this.moveAToB();
  var stackTop = this.queueA.shift();
  this.queueB.push(stackTop);
  return stackTop;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  if (this.queueA.length === 0 && this.queueB.length === 0) {
    return true;
  }
  return false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// var obj = Object.create(MyStack).createNew();
// obj.push(1);
// obj.push(2);
// var param_2 = obj.pop();
// var param_3 = obj.top();
// var param_4 = obj.empty();
