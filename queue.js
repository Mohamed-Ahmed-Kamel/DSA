/* Queue 
  Queue is a data structure that follows the FIFO (First In First Out) principle.
  A queue is an object (an abstract data structure – ADT).
  A queue is an ordered list of elements.
  It like: {1: item1, 2: item2, ...}
  Operations in a Queue:
    1. Enqueue: Add an item to the end of the queue
    2. Dequeue: Remove an item from the front of the queue
    3. peek   : View the front item of the queue
    4. isEmpty: Check if the queue is empty
*/
class Queue {
  constructor() {
    this.items = {}; // Store the items in the queue
    this.frontIndex = 0; // Index of the front of the queue
    this.backIndex = 0; // Index of the back of the queue
  }
  enqueue(item) {
    this.items[this.backIndex] = item; // Store the item in back of the queue
    this.backIndex++; // Increment the backIndex
    return `${item} Inserted`; // Return the inserted item
  }
  dequeue() {
    const item = this.items[this.frontIndex]; // Store the item from front of the queue
    delete this.items[this.frontIndex]; // Delete the item from front of the queue
    this.frontIndex++; // Increment the frontIndex
    return `${item} Deleted`; // Return the deleted item
  }
  peek() {
    return this.items[this.frontIndex];
  }
  isEmpty() {
    return this.length() === 0 ? "Empty" : "Not Empty";
  }
  printQueue() {
    return this.items
  }
  length() {
    return this.backIndex - this.frontIndex;
  }
}
let queue = new Queue();
console.log(queue.enqueue(10)); // First  { 0: 10 }
console.log(queue.enqueue(20)); // Second { 0: 10, 1: 20 }
console.log(queue.enqueue(30)); // Third  { 0: 10, 1: 20, 2: 30 }
console.log(queue.enqueue(40)); // Fourth { 0: 10, 1: 20, 2: 30, 3: 40 }
queue.peek(); // 10

queue.dequeue(); // First  { 1: 20, 2: 30 }
queue.peek(); // 20
queue.dequeue(); // Second { 2: 30 }
queue.peek(); // 30
queue.dequeue(); // Third  { }
queue.peek(); // 40

console.log(queue.printQueue()); // { 3: 40 }
console.log(queue.isEmpty()); // Not Empty
console.log(queue.length());
console.log(queue.items);
