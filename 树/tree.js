/**
 * 树的节点结构
 * @param {*} val 
 */
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// 构造树的实例
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;

/**
 * 实例中的树
 * 前序遍历：
 * 中序遍历：
 * 后序遍历：
 */

/**Node
 * 1. 树的前序遍历
 * @param {Node} node
 */
function preOrder(node) {
    if (!node) {
        return
    }
    console.log(node.val)
    preOrder(node.left)
    preOrder(node.right)
}

// preOrder(a)

/**
 * 2. 树的中序遍历
 * @param {Node} node 
 */
function inOrder(node) {
    if (!node) {
        return
    }
    inOrder(node.left)
    console.log(node.val)
    inOrder(node.right)
}

// inOrder(a)

/**
 * 3. 树的后序遍历
 * @param {Node} node 
 */
function postOrder(node) {
    if (!node) {
        return
    }
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.val)
}

// postOrder(a)

/**
 * 4. 得到二叉树的高度
 * @param {Node} node 
 */
function getDepth(node) {
    if (!node) {
        return 0
    }
    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
}

// console.log(getDepth(a))

/**
 * 5. 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的
 * @param {Node} root 
 */
function isSymmetric(root) {
    
}
