// 链表基本操作：
// 1. 遍历打印
// 2. 获取链表的长度
// 3. 通过下标获取链表中的某个数据
// 4. 通过下标设置链表中的某个数据
// 5. 在链表末尾加入一个新节点
// 6. 在链表某一个节点之后加入一个新节点
// 7. 删除一个链表节点


/**
 * 链表的节点结构
 * @param {*} value 
 */
function Node(value) {
    this.value = value;
    this.next = null;
}

// 构造链表实例
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

// a->b->c->d->e->f->null

/**
 * 遍历链表，打印链表的值, 递归实现
 * @param {Node} node 
 */
function print(node) {
    if (node.next != null) {
        console.log("节点" + node.value);
        print(node.next);
    } else {
        console.log("节点" + node.value);
        return;
    }

    // if (!node) {
    //     return;
    // } else {
    //     console.log("节点" + node.value);
    //     print(node.next);
    // }
}
// print(a);


/**
 * 获取链表的长度
 * @param {Node} node
 * @return 
 */
function getLength(node) {
    if (!node) {
        return 0;
    } else {
        return 1 + getLength(node.next);
    }
}
// var len = getLength(a);
// console.log(len);


// a->b->c->d->e->f->null
/**
 * 根据下标，获取链表中某个位置的数据
 * @param {*} node 
 * @param {*} index 
 */
function getValue(node, index) {
    // if (index > getLength(node) - 1) {
    //     // throw new Error("超出了下标范围");
    //     console.log("超出了下标范围");
    // } else {
    //     for (let i = 0; i < index; i++) {
    //         node = node.next;
    //     }
    //     return node.value;
    // }
    function __getValue(node, index, curIndex) {
        if (!node) {
            throw new Error("超出了链表的范围");
        }
        if (curIndex === index) {
            return node.value;
        }
        curIndex++;
        return __getValue(node.next, index, curIndex);
    }
    return __getValue(node, index, 0);
}
// console.log(getValue(a, 3));


/**
 * 通过下标设置链表中的某个数据
 * @param {*} node 
 * @param {*} index 
 * @param {*} value 
 */
function setValue(node, index, value) {
    function __setValue(node, index, curIndex) {
        if (!node) {
            throw new Error("超出了链表的范围");
        }
        if (curIndex === index) {
            node.value = value;
            return;
        }
        curIndex++;
        return __setValue(node.next, index, curIndex);
    }
    return __setValue(node, index, 0);
}
// print(a);
// console.log("============");
// setValue(a, 3, 'g');
// print(a)


/**
 * 在链表node的末尾，加入一个新的节点，值为value
 * @param {*} node 
 * @param {*} value 
 */
function push(node, value) {
    let cur = node;
    for (let i = 0; i < getLength(node) - 1; i++) {
        cur = cur.next;
    }
    cur.next = new Node(value);
    return node;
}
// print(push(a, "g"));
// print(push(a, "h"));
// print(push(a, "i"));


/**
 * 在链表某一个节点之后加入一个新节点
 * @param {*} node 
 * @param {*} beforeNode 
 * @param {*} value 
 */
function insert(node, beforeNode, value) {
    if(node === beforeNode) {
        let o = new Node(value);
        o.next = beforeNode.next;
        beforeNode.next = o;
        return;
    } else {
        return insert(node.next, beforeNode, value);
    }
}
// print(a);
// console.log("=======");
// insert(a, c, 'x');
// print(a);

/**
 * 删除一个链表节点
 * @param {*} node 
 * @param {*} delNode 
 */
function deleteNode(node, delNode) {
    if(!node) {
        console.log("该链表中未找到该节点");
    }
    if(node.next.value == delNode.value) {
        node.next = delNode.next;
        return;
    }
    return deleteNode(node.next, delNode);
}
print(a);
console.log("========");
deleteNode(a, f);
print(a);