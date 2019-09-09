/* jshint esversion: 6 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var max_length = "";
    if(strs.length < 1) return max_length;
    var i = 0,j = 0;
    var strTmp = '';
    do{
       strTmp = strs[0].slice(i,j+1);
       if(strs.every(checkExist)){
           max_length_tmp = strTmp.length;
           if(max_length_tmp > max_length.length){
               max_length = strTmp;
           }
           j++;
       }else{
         return max_length;
       }     
    }while(i<strs[0].length && j<strs[0].length);
    
  function checkExist(value) {
        return value.slice(0,strTmp.length) == strTmp;
    }   
    return max_length;
};
module.exports = longestCommonPrefix;
    