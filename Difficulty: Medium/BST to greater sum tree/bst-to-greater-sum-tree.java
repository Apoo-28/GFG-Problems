class Solution {
    int s = 0;
    public void transformTree(Node root) {
        if (root == null) return;
        transformTree(root.right);
        int temp = root.data;
        root.data = s;
        s += temp;
        transformTree(root.left);
    }
}