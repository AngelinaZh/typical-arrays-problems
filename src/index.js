exports.min = function min (array)  {
  if (typeof array == "undefined"){
    return 0;
  } else if (array.length == 0){
    return 0;
  }
  else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (typeof array == "undefined"){
    return 0;
  } else if (array.length == 0){
    return 0;
  }
  else {
    return Math.max.apply(null, array);
  } 
}
exports.avg = function avg (array){
  let sum=0;
   for (let i in array) {
     sum += array[i];
   }
   let count = array.length;
   if (typeof array == "undefined"){
     return 0;
   } else if (array.length == 0){
     return 0;
   }else{
     return sum /count;
   }
 }