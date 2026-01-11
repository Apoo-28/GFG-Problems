class Solution {
  public:
    string minWindow(string& s1, string& s2) {
        // Code here
        int i = 0, j = 0; 
        int minlen = INT_MAX ; 
        int st = -1 ;
        for(; i < s1.length(); i++) 
        {
            if(s1[i] == s2[j]) {
                j++; 
            }
            
            if(j == s2.length()) 
            {
                 
                int ed = i; 
                j--; 
                
                while(j >= 0) 
                {
                    if(s1[i] == s2[j])
                        j--;
                    i--;
                }
                
                i++; 
                j++; 
                
                int currlen = ed - i + 1;  
                
                if(currlen < minlen) 
                {
                    minlen = currlen ;
                    st = i ;
                }
                
            }
        }
        
        if(minlen == INT_MAX) return "" ;
        
        return s1.substr(st, minlen) ;
    }
};
