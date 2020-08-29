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

function reduceToTotal(array, p=0){
  return array.reduce((sum, current)=> sum + current, p);
}

function reduceToAllTrue(array){
  return array.reduce((previous, current) => return false if !current)
}

function reduceToAnyTrue(array){

}
