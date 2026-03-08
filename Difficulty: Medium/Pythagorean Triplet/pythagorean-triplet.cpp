class Solution {
  public: 
    bool pythagoreanTriplet(vector<int>& arr) { 
        // code here
        unordered_set<int> st;
        for(auto &e : arr){
            st.insert(e*e);
        }
        for(auto &a : st){
            for(auto &b : st){
                if(a != b){
                    if(st.count(a + b)) return true;
                }
            }
        }
        return false;
    }
};