// An isogram is a word that has no repeating letters, consecutive
// or non-consecutive. Implement a function that determines whether
// a string that contains only letters is an isogram. Assume the empty
// string is an isogram. Ignore letter case.

function isIsogram(str){
  //...
 var low = str.toLowerCase();
  for(var i = 0 ; i<low.length; i++){
  for (var j = 0; j < low.length; j++) {
  if(i!=j){
    if(low[i] == low[j]){
    return false;
    }
    }

  }
  }
  return true;
}
