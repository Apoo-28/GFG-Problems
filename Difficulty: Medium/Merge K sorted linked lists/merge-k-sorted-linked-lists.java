class Solution {

   public static Node merge(Node l1, Node l2){
        if(l1 == null) return l2;
        if(l2 == null) return l1;

        if(l1.data <= l2.data){
            l1.next = merge(l1.next,l2);
            return l1;
        }else{
            l2.next = merge(l1,l2.next);
            return l2;
        } 
        
   }
    
    public Node sortli(Node[] li, int st, int end){
        if(st > end) return null;
        if(st == end) return  li[st];

        int mid = st + (end-st)/2 ;
        Node l1 = sortli(li,st,mid);
        Node l2 = sortli(li,mid+1,end);
      
      return merge(l1,l2);
    }

    public Node mergeKLists(Node[] lists) {
       return sortli(lists,0,lists.length-1);        
    }
}

