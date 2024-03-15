
// 二叉树展开为链表
// 已解答
// 中等
// 相关标签
// 相关企业
// 提示
// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 

// 示例 1：


// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
// 示例 2：

// 输入：root = []
// 输出：[]


var flatten = function(root) {
    const list = [];
    // 使用前序遍历的方式，将二叉树所有节点压入 list 数组中
    preorderTraversal(root, list);
    // 获取 list 的长度，即节点总数
    const size = list.length;
    // 从第二个节点开始遍历（因为第一个节点的左右指针无需改动）
    for (let i = 1; i < size; i++) {
        // 获取前一个节点和当前节点
        const prev = list[i - 1], curr = list[i];
        // 断开前一个节点与原左子树的连接
        prev.left = null;
        // 将前一个节点的右指针指向当前节点，形成链表结构
        prev.right = curr;
    }
};

    // 前序遍历
const preorderTraversal = (root, list) => {
    // 基线条件：如果当前节点为空，则直接返回
    if (root != null) {
        // 将当前节点添加到结果数组 list 中
        list.push(root);
        // 递归地遍历
        preorderTraversal(root.left, list);
        preorderTraversal(root.right, list);
    }
}
