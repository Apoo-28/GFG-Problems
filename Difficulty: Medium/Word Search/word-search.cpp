class Solution {
  public:
     bool dfs(vector<vector<char>> &mat, string &word, int i, int j, int index) {
        int n = mat.size();
        int m = mat[0].size();

        // Base case: if index reaches word size, we found the word
        if(index == word.size()) return true;

        // Boundary checks and character match check
        if(i < 0 || i >= n || j < 0 || j >= m || mat[i][j] != word[index])
            return false;

        // Mark current cell as visited
        char temp = mat[i][j];
        mat[i][j] = '#';  // any special char to mark visited

        // Explore 4 directions: up, down, left, right
        bool found = dfs(mat, word, i+1, j, index+1) ||
                     dfs(mat, word, i-1, j, index+1) ||
                     dfs(mat, word, i, j+1, index+1) ||
                     dfs(mat, word, i, j-1, index+1);

        // Restore the cell
        mat[i][j] = temp;

        return found;
    }

    bool isWordExist(vector<vector<char>> &mat, string &word) {
        int n = mat.size();
        int m = mat[0].size();

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(mat[i][j] == word[0]) { // possible starting point
                    if(dfs(mat, word, i, j, 0)) return true;
                }
            }
        }

        return false; // word not found        
    }
}; 