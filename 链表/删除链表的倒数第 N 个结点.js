// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

// 示例 1：


// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
// 创建一个虚拟头节点以处理删除头节点的情况
let dummy = new ListNode(0);
dummy.next = head;

let first = dummy;
let second = dummy;

// 让第一个指针领先第二个指针n个位置
for (let i = 0; i <= n; i++) {
    first = first.next;
}

// 移动两个指针直到第一个指针到达链表末尾
while (first !== null) {
    first = first.next;
    second = second.next;
}

// 删除倒数第n个节点
second.next = second.next.next;

return dummy.next;
};