const a = 1 
 let b = 2
 b = 3
//alert("value of b "+ b)
let bdCity = {  
  "dhaka":"20M",
  "chitagong":"10M"
}
//alert("Dhaka city population"+bdCity.dhaka)
//destructuring
//let dhakaPupolation = bdCity.dhaka;
//alert("Dhaka city population"+dhakaPupolation)
//let {dhaka,chitagong} = bdCity;
//alert("Dhaka city population " +dhaka)
//alert("Chitagong city population " +chitagong)
let { dhaka: dhaka, chitagong: habjabi} = bdCity;
//alert("Chitagong city population " +habjabi)
//fat arrow function
function sum(a,b){
  return a+b;
}
//alert(sum(2,3))
//const fatSum = function(a,b){
//  return a+b;
//}
//const fatSum = (a,b) => a+b;
//alert(fatSum(3,3))
const square = a => a*a;
//alert(square(3))
//foreach
const arrayList = [1,2,3];
let summation = 0;
arrayList.forEach((item =>summation = summation +item))
//alert("Summation : "+summation)
//map
const squareArray = arrayList.map(square)
//alert("Square array "+squareArray)