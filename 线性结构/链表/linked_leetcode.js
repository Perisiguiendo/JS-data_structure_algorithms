/**
 * LeetCode 剑指offer题目 
 */

/**
 * 创建链表
 */
function Node(value) {
    this.value = value;
    this.next = null;
}
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function print(node) {
    if (!node) {
        return;
    } else {
        console.log("节点" + node.value);
        print(node.next);
    }
}


/* 1. 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
*  示例 1：
*  输入：head = [1,3,2]
*  输出：[2,3,1]
*/

function getReverseValue(node) {
    const arr = [];
    function __getReverseValue(node) {
        if (!node) {
            return null;
        } else {
            arr.unshift(node.val);
        }
        return __getReverseValue(node.next);
    }
    __getReverseValue(node);
    return arr;
}

// console.log(getReverseValue(a));

/**
 * 2. 输入一个链表，输出该链表中倒数第k个节点。
 * 为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。
 * 这个链表的倒数第3个节点是值为4的节点。
 * 示例：给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 返回链表 4->5.
 * @param {Node} node 
 * @param {number} k 
 */
function getKthFromEnd(node, k) {
    let slower = node;
    let faster = node;
    for (let i = 0; i < k; i++) {
        faster = faster.next;
    }
    while (faster) {
        faster = faster.next;
        slower = slower.next;
    }
    return slower;
}

// print(a);
// console.log("===========");
// print(getKthFromEnd(a, 2))

/**
 * 3. 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 示例1：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * @param {Node} l1 
 * @param {Node} l2 
 */
function mergeTwoLists(l1, l2) {
    let head = new Node(0);
    let cur = head;
    while (l1 && l2) {
        if (l1.value >= l2.value) {
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }
    if (l1 == null) {
        cur.next = l2;
    }
    if (l2 == null) {
        cur.next = l1;
    }
    return head.next;
}

// var a1 = new Node(1);
// var b1 = new Node(4);
// var c1 = new Node(6);
// var d1 = new Node(7);
// var e1 = new Node(9);
// var f1 = new Node(1000);

// a1.next = b1;
// b1.next = c1;
// c1.next = d1;
// d1.next = e1;
// e1.next = f1;

// var a2 = new Node(0);
// var b2 = new Node(3);
// var c2 = new Node(5);
// var d2 = new Node(12);
// var e2 = new Node(15);
// var f2 = new Node(888);


// a2.next = b2;
// b2.next = c2;
// c2.next = d2;
// d2.next = e2;
// e2.next = f2;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
// print(a);
// console.log("===========");
// print(mergeTwoLists(a1, a2))

/**
 * 4. 输入两个链表，找出它们的第一个公共节点
 * @param {Node} headA 
 * @param {Node} headB 
 */
function getIntersectionNode(headA, headB) {
    
}
