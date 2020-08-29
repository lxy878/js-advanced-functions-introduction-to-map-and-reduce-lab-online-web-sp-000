// Your code here

function mapToNegativize(array){
  return array.map(n => n*-1);
}

function mapToNoChange(array){
  return array.map(s=> s);
}

function mapToDouble(array){
  return array.map(n=>n*2);
}

function mapToSquare(array){
  return array.map(n=> n*n);
}

function reduceToTotal(array, p){
  return array.reduce((sum, current)=> sum + current, p);
}

console.log(reduceToTotal([1,2,3], 100))

function reduceToAllTrue(array){

}

function reduceToAnyTrue(array){

}
