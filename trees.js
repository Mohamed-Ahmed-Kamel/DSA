/* Trees
What is a tree?
	- A tree is a data structure that consists of nodes in a parent/child relationship.
	- It like a linked list, but instead of one node pointing to the next, it can point to many nodes.
	- Each node can have zero or more child nodes, which are referred to as the children of that node.
	- Each node can have only one parent node, which is referred to as the parent of that node.
	- The topmost node in a tree is called the root node.
	- Edges are the connections between nodes.
	- The bottommost nodes in a tree are called leaf nodes.
	- A tree with no nodes is called an empty tree.
	- A tree with one node is called a singleton tree.
	- A tree with two nodes is called a binary tree.
	- The "tree height" is the maximum number of edges from the root node to a leaf node. The height of the tree above is 2.
	- The "height of a node" is the maximum number of edges between the node and a leaf node.
	- The "tree size" is the number of nodes in the tree.

The Tree data structure can be useful in many cases:
	- Hierarchical data
	- File systems
	- Organizational models
	- Network routing
	- Databases: Used for quick data retrieval.
	- Sorting/Searching: Used for sorting data and searching for data.

The tree looks like this with these data: (A)-(B)-(C)-(D)-(E)-(F)-(G)-(H)-(I)-(R)
				(R) --> Root node
			(C)	(C)	(C) --> Child node
		(L)	(L)		(L) (L) (L)	(L) --> Leaves node

Types of Trees:
	1. "Binary Trees": Each node has up to two children, the left child node and the right child node. This structure is the foundation for more complex tree types like Binay Search Trees and AVL Trees.
		This restriction, that a node can have a maximum of two child nodes, gives us many benefits:
		- Algorithms like traversing, searching, insertion and deletion become easier to understand, to implement, and run faster.
		- Keeping data sorted in a Binary Search Tree (BST) makes searching very efficient.
		- Balancing trees is easier to do with a limited number of child nodes, using an AVL Binary Tree for example.
		- Binary Trees can be represented as arrays, making the tree more memory efficient.
		How a Binary Tree looks
				(R)
			(A)		(B)
		(C)	(D)		(E) (F)
						(G)
		Root node: (R)
		A's left child: (C)
		A's right child: (D)
		B's subtree: (B)-(E)-(F)-(G)
		Tree size: (n=8)
		Tree height: (h=3)
		Child nodes: (A)-(B)-(C)-(D)-(E)-(F)-(G)
		Parent/internal nodes: (R)-(A)-(B)-(F)

	2. "Binary Search Trees" (BST): A type of Binary Tree where for each node, the left child node has a lower value, and the right child node has a higher value.
	3. "AVL Trees": A type of Binary Search Tree that self-balances so that for every node, the difference in height between the left and right subtrees is at most one. This balance is maintained through rotations when nodes are inserted or deleted
*/

/* 
Binary Search Trees
	1. Create a Node
		- A node is an object that contains a value and pointers to its left and right children.
	2. Crete a Binary Search Tree (BST)
		- A (BST) is an object that contains a root node and methods for insertion and deletion.
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
		// 1. If the tree is empty, the new node is the root node.
		if (!this.root) { 
			this.root = node;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined; // 2. If the value is already in the tree, do nothing.
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
	contains(value) {
		if (!this.root) return null;
		let current = this.root;
		while (true) {
			if (!current) return false;
			if (value === current.value) return true;
			if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
	  }
	}

let bst = new BST();

bst.insert(5)

bst.insert(4)
bst.insert(3)

bst.insert(6)
bst.insert(7)

console.log(bst.find(4));
console.log(bst.contains(3));
