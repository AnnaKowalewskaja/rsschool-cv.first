
// You should implement your task here.

/*module.exports = function towelSort (matrix) {
  
  let arr2 = [];
  if(matrix.length === 0){
    return [];
  }else{
for(i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      arr2.push(matrix[i][j]);
    }
}
  return arr2;}
}*/
module.exports = function towelSort (matrix) {
  let arr2 = [];
  if(Array.isArray(matrix)){
    for(i = 0; i < matrix.length; i++){
      if(i % 2 === 1 || i === 1){
        arr2.push(matrix[i].reverse());
      }else{
        arr2.push(matrix[i]);
    }}
    return arr2.flat();
    
  }else{
    
    return [];
  }
  }
      

/*
module.exports = function towelSort (matrix) {
  var arr = matrix;
  var arr2 = [].concat.apply([], arr);

  return arr2;
}*/
