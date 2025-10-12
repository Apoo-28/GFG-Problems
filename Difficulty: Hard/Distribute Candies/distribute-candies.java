class Solution {
    int moves = 0;
    public int distCandy(Node root) {
        dfs(root);
        return moves;
    }
    int dfs(Node n) {
        if (n == null) return 0;
        int bal = n.data - 1 + dfs(n.left) + dfs(n.right);
        moves += Math.abs(bal);
        return bal;
    }
}