// BST
/**
	1. Create Node
	2. Create BST
*/
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let node = new Node(value);
		if (!this.root) {
			this.root = node;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = node;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = node;
					return this;
				}
				current = current.right;
			}
		}
	}
	find(value) {
		if (!this.root) return null;
		let current = this.root;
		while (true) {
			if (!current) return undefined;
			if (value === current.value) return current;
			if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
	}
}
let bst = new BST();
bst.insert(40);
bst.insert(30);
bst.insert(50);
bst.insert(25);
bst.insert(35);
bst.insert(45);
bst.insert(60);

let current = this.root;
// console.log(bst.find(100))
