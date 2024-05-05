/* Linked List: HEAD -> node1 -> node2 -> node3 -> node4 -> NULL
  1. Each node has a value and a pointer to the next node.
  2. HEAD: node1
  3. Tail: node4
*/
// To create a node we need in the linked list.
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// To create a linked list we need to create a head node.
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(data) {
    // adds the data to the head of the linked list.
    this.head = new Node(data, this.head);
    this.size++;
  }
  addLast(data) {
    // Creates a new node with the given data.
    let node = new Node(data);
    // If the list is empty, sets the new node as the head of the list.
    if (this.head === null) {
      this.head = node;
    } else {
      // find the last node of the list and append the new node to it => (Traversal)
      let currentNode = this.head;
      while (currentNode.next) {
        // Check if the next node property is truthy(not null or undefined)
        currentNode = currentNode.next; // move to the next node
      }
      currentNode.next = node;
    }
    this.size++;
  }
  addAt(data, index) { // To add a data at a specific index in a list.
    if (index < 0 || index > this.size) {
      // check if the index is valid
      return console.log("Please enter a valid index.");
    } else {
      let node = new Node(data); // Create a new node
      console.log(node); // {data: 43, next: null}

      let // These are variables to keep track of the current and previous nodes during iteration.
        currentNode,
        previousNode;
      currentNode = this.head; // The current node is set to the head of the list.
      console.log(currentNode); // 10 -> 20 -> 30 -> null

      if (index == 0) { // If the index is 0, the new node is added at the beginning of the list.
        node.next = this.head; // The next pointer of the new node is set to the current head.
        this.head = node; // The head of the list is updated to the new node.
      } else {
        currentNode = this.head; // If the index is not 0, the current node is set to the head of the list.
        let counter = 0; // This is a counter for the iteration.

        while (counter < index) { // The following loop iterates over the list to find the position to insert the new node.
          previousNode = currentNode; // The previous node is updated to the current node. // store the previous node
          console.log(previousNode); // 10 -> 20 -> 30 -> null
          currentNode = currentNode.next; // The current node is updated to the next node. // move to the next node
          console.log(currentNode); // 20 -> 30 -> null
          counter++; // increment the counter
        }
        console.log(currentNode); // 20 -> 30 -> null
        console.log(node); // {data: 43, next: null}
        node.next = currentNode; // The next pointer of the new node is set to the current node.
        console.log(node); // 43 -> 20 -> 30 -> null
        console.log(previousNode); // 10 -> 20 -> 30 -> null
        previousNode.next = node; // The next pointer of the previous node is set to the new node.
        console.log(previousNode); // 10 -> 43 -> 20 -> 30 -> null
      }
      this.size++; // The size of the list is incremented.
    }
  }
  removeNode(data) {
    let currentNode = this.head; // 10 -> 20 -> 30 -> null
    let previousNode = null;

    while (currentNode != null) { // Loop over the list to find the node to remove
      if (currentNode.data === data) { // If the current node has the same data as the element to remove, remove it.
        if (previousNode == null) { // If the current node is the head of the list, update the head of the list.
          this.head = currentNode.next;
        } else {
          // previousNode: // 10 -> 20 -> 30 -> null
          // currentNode: //  20 -> 30 -> null
          previousNode.next = currentNode.next;
          // previousNode:    10 -> 30 -> null
          // currentNode: //  20 -> 30 -> null
        }
        this.size--;
        return currentNode.data // Using return to stop the loop, currentNode.data = 20
      }
      previousNode = currentNode; // 10 -> 20 -> 30 -> null
      currentNode = currentNode.next; // 20 -> 30 -> null
    }
    return "Element not found or list is empty";
  }
  indexOf(data) { // To find the index of an data in the list.
    let currentNode = this.head; // 10 -> 20 -> 30 -> null
    let index = 0; // counter variable to keep track of the iteration.

    while (currentNode != null) { // Find the index of the given data.
      // Compare each data of the list with given data
      if (currentNode.data === data) return index;
      currentNode = currentNode.next; // 20 -> 30 -> null
      index++;
    }

    return "Not Found";
  }
  isEmpty() { // Check if the list is empty.
    return this.size == 0;
  }
  size_of_list() { // // Gives the size of the list
    console.log(this.size);
  }
  printList() { // Prints the list items
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    console.log(str);
  }
}
// let list1 = new LinkedList();

// list1.addLast(10); // head: {value: 10, next: null}
// list1.addLast(20); // head: {value: 10, next: {value: 20, next: null}}
// list1.addLast(30); // head: {value: 10, next: {value: 20, next: {value: 30, next: null}}}
// list1.addLast(40); // head: {value: 10, next: {value: 20, next: {value: 30, next: {value: 40, next: null}}}}
/* What happens when using the addLast method
  1. Create a new node with the given value.
  2. If the list is empty, sets the new node as the head of the list.
  3. If the list is not empty, find the last node of the list and append the new node to it.
  4. Increment the size of the list by 1.
*/

// list1.addFirst(11); // head: {value: 10, next: null}
// list1.addFirst(21); // head: {value: 20, next: {value: 10, next: null}}
// list1.addFirst(32); // head: {value: 30, next: {value: 20, next: {value: 10, next: null}}}
/* What happens when using the addFirst method
  1. Create a new node with the given value.
  2. Set the new node as the head of the list & set the next property of the previous head node to the new node.
  3. Increment the size of the list by 1.
*/

// list1.addAt(43, 1); // head: {value: 10, next: {value: 43, next: {value: 20, next: Node}}}

// list1.removeNode(20);
/* What happens when using the removeElement method
  1. If the list is empty, return message.
  2. If the list is not empty, find the first node of the list with the given value.
  3. If the first node is found, set the next property of the previous node to the next node of the found node.
  4. Decrement the size of the list by 1.
  5. Return the value of the removed node.
*/

// list1.indexOf(20); // 1
// list1.indexOf(40); // Not Found
/* What happens when using the indexOf method
  1. Create a new node with the given value.
  2. Create a counter variable to keep track of the iteration.
  3. Loop over the list to find the index of the given data.
  4. Compare each data of the list with given data
  5. If the data is found, return the index.
  6. If the data is not found return "Not Found".
  7. If the list is empty, return "Not Found".
  8. If the list is not empty, return the index.
*/

// console.log(list1);