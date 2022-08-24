/*
* Given two strings s and t of lengths m and n respectively, return the minimum window substring of 
s such that every character in t (including duplicates) is included in the window.
 If there is no such substring, return the empty string "".
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    if(t.length > s.length) return "";
    if(s.length === t.length && s.length === 1) return s[0];
    let map_s = new Map();
    let map_t = new Map();
    
    //first fill map for t
    for(let c of t){
        increment(map_t, c);
    }
    //variables to store max values
    let maxLength = Number.MAX_VALUE;
    let maxSubstr = '';
    
    //variables for sliding window
    let left = 0, right = 0;
    
    while(right < s.length){
        //fill map for string s
        increment(map_s, s[right]);
        
        //if current window has all characters then shrink the window unntil invalid
        //and also compute minlength
        while(check(map_s, map_t)){
            let curWindow_length = right-left+1;
            if(curWindow_length < maxLength){
                 maxLength = curWindow_length;
                 maxSubstr = s.slice(left, right+1);
            }
            //remove char at left from map_s
            decrement(map_s, s[left]);
            left++;
        }
        right++;
        
    }
    
    return maxSubstr;  
    
};
//helper functions
    function check(sMap, tMap){
        for(let [val,count] of tMap.entries()){
            if(!sMap.has(val)) return false;
            else if(sMap.get(val) < count) return false;           
        }  
       return true;
    }
    
    function decrement(map, c){
        if(!map.has(c)){
            map.delete(c);
        }else{
            map.set(c, map.get(c)-1);
        }
    }
    
    function increment(map, c){
      if(!map.has(c)){
          map.set(c, 1);          
      }else{
          map.set(c, map.get(c) + 1);
      }
}
    
console.log(minWindow("ADOBECODEBANC", "ABC"));