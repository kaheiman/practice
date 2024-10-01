class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class Tree {
	constructor() {
		this.root = null;
		this.diameter = 0;
	}

	invertBinaryTree(node) {
		if (!node) {
			return;
		}
		this.invertBinaryTree(node.left);
		this.invertBinaryTree(node.right);
		let tempt = node.left;
		node.left = node.right;
		node.right = tempt;
	}

	buildTreeNode(index, arr) {
		if (index > arr.length - 1 || arr[index] === null) {
			return null;
		}

		const node = new Node(arr[index]);
		node.left = this.buildTreeNode(2 * index + 1, arr);
		node.right = this.buildTreeNode(2 * index + 2, arr);
		return node;
	}

	createBinaryTree(arr) {
		if (arr.length === 0) {
			return;
		}
		this.root = this.buildTreeNode(0, arr);
	}

	inOrderTraveral(node) {
		if (!node) {
			return;
		}
		this.inOrderTraveral(node.left);
		console.log(node.value);
		this.inOrderTraveral(node.right);
	}

	postOrderTraversal(node) {
		if (!node) {
			return;
		}
		this.postOrderTraversal(node.left);
		this.postOrderTraversal(node.right);
		console.log(node.value);
	}

	preOrderTraversal(node, depth) {
		if (!node) {
			this.diameter = Math.max(this.diameter, depth);
			return;
		}
		console.log(node.value);
		this.preOrderTraversal(node.left, depth + 1);
		this.preOrderTraversal(node.right, depth + 1);
	}
}

const tree = new Tree();
tree.createBinaryTree([100, 50, 200, 25, 75, null, 350]);

tree.invertBinaryTree(tree.root);
console.log("preOrderTraversal");
tree.preOrderTraversal(tree.root, 0);

console.log("inOrderTraveral");
tree.inOrderTraveral(tree.root, 0);

console.log("postOrderTraversal");
tree.postOrderTraversal(tree.root, 0);

console.log("diameter: ", tree.diameter);
