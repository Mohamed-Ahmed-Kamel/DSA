/* Stack
Stack is a data structure that follows the LIFO (Last In First Out) principle.
items: [10, 20, 30]
Operations in a Stack:
1. Push   : Add an item to the top of the stack
2. Pop    : Remove an item from the top of the stack
3. Peek   : View the top item of the stack
4. isEmpty: Check if the stack is empty
5. length : Get the length of the stack
*/
class Stack {
  constructor() {
    this.items = [];
    this.index = 0;
  }
  push(element) { // Push Elemnts to Stock
    this.items[this.index] = element;
    this.index++;
  }
  pop() { // Remove an item from the top of the stack
    if (this.items.length === 0) return "Stack is Empty"; // Check if stack is empty
    this.index--; // Decrement the index for stack
    return this.items.pop(); // Remove the last element for stack
  }
  isEmpty() { // Check if Stock is Empty
    return this.index === 0 ? "Empty" : "Not Empty";
  }
  peek() { // View the top item of the stack
    if (this.index === 0) return "Stack is Empty"; // Check if stack is empty
    this.index--; // Decrement the index for stack
    return this.items[this.index]; // Return the last element for stack
  }
  printStack() { // Get the elements of the stack
    let str = ""; // String to store the elements
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
let stack = new Stack();
stack.push(10); // [10]
stack.push(20); // [10, 20]
stack.push(30); // [10, 20, 30]
stack.pop(); // [10, 20]
stack.printStack(); // 10 20
stack.peek(); // 20
stack.isEmpty(); // Not Empty
console.log(stack); // Stack { items: [ 10, 20 ], index: 1 }