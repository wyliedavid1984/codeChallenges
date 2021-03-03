// Good morning!Here 's your coding interview problem for today.

// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left = None, right = None):
//     self.val = val
// self.left = left
// self.right = right
// The following test should pass:

//     node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

// not sure if i could solve this with javascript. found the solution online 

const SPLITTER = 'X';
const NULL = 'NN';
var serialize = function (root) {
    let serial = "";

    function inorder(root) {
        if (root == null) {
            serial += NULL + SPLITTER;
            return;
        }
        serial += root.val + SPLITTER;
        inorder(root.left);
        inorder(root.right);
    }

    inorder(root);
    console.log(inorder(root))
    console.log(serial)
    return serial;
};


var deserialize = function (data) {
    data = data.split('X');
    let idx = 0;

    function buildTree(data) {
        if (idx >= data.length) return null;
        if (data[idx] == NULL) {
            idx++;
            return null;
        }
        let node = new TreeNode(parseInt(data[idx++]));
        node.left = buildTree(data);
        node.right = buildTree(data);
        return node;
    }
    console.log(buildTree(data))
    return buildTree(data);
};

// var serialize = function (root) {
//     let serial = ""; //start with empty string

//     function preorder(root) {
//         if (root == null) {
//             serial += NULL + SPLITTER; // add NULL + SPLITTER eg : 5X4XNNXNNX
//             return;
//         }
//         serial += root.val + SPLITTER; // add node + SPLITTER eg : 5X4X..

//         // standard inorder travesal
//         preorder(root.left);
//         preorder(root.right);
//     }

//     preorder(root);
//     return serial;
// };
serialize(6);
deserialize(serialize(6));