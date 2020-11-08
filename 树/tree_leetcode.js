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
 * 1. 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的
 * @param {Node} root 
 */
function isSymmetric(root) {
    
}