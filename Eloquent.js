
console.log("HACKERRANK PROBLEMS STARTS HERE")

console.log("///////////////DIAGONAL DIFFERENCE START////////////")
function diagonalDifference(array) {
    let sum1 = 0;
    let sum2= 0;
  //    let sum = sum1 - sum2; 
    for (let i = 0; i<array.length; i++ ){
        sum1  += array[i][i];
        sum2  += array[i][array.length-1-i];
    }
  //    for (let j = 0; j < arr.length; j--){
  //         sum2  += arr[arr.length-1-1][i];
  //    }
    return (Math.abs(sum1 - sum2));

  }
console.log("///////////////DIAGONAL DIFFERENCE END////////////")

console.log("///////////////staircase////////////")  
function staircase(n) {
    for ( let i = 1; i <= n ; i++ ){
        let result = "";
         for ( let j = 1; j <=  6; j++){
             if (( j + i) < (n + 1)){
                  result += " ";
             }
             if(( j + i ) >=  (n + 1) ) {
                 result += "#";
             }
         }
         console.log(result);
    
     }
    
    }
console.log("///////////////staircase////////////") 

console.log ("minmaxsum")
function miniMaxSum(arr) {
    
let sum1 =arr[1] +  arr[2] + arr[3] + arr[4]
    let sum2 =arr[0] +  arr[2] + arr[3] + arr[4]
    let sum3 =arr[0] +  arr[1] + arr[3] + arr[4]
    let sum4 =arr[0] +  arr[1] + arr[2] + arr[4]
    let sum5 =arr[0] +  arr[1] + arr[2] + arr[3]
    let sumT = [sum1, sum2, sum3, sum4, sum5]
   console.log(Math.min(...sumT), Math.max(...sumT));


}

let arr = [4, 3, -9, 0, 4, 1];
function plusMinus(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;

        }
        else if (arr[i] < 0) {
            negative++;

        }
        else {
            zero++;
        }

    }
    console.log((positive / arr.length));
    console.log((negative / arr.length));
    console.log((zero / arr.length));
}

let ar =[3, 2, 1, 3]
function birthdayCakeCandles(ar) {
    var maxHeight = Math.max(...ar);
    var maxHeightCount = 0;  
    for(var i = 0; i < ar.length; i++){
        if (ar[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeightCount);
        
}



console.log("Eloquent javascript BEGINS HERE")


console.log("///////////////////start Triangle///////////////////");
let increase = "";
for ( let i= 0; i < 9 ; i++){
    increase = increase += "#";
    console.log(increase);
}
console.log("///////////////////End Triangle///////////////////");


console.log("///////////////////START FIZZBUZZ///////////////////");

for( let i = 1; i <= 100; i++){
let result = "";
if (i % 3 == 0 && i % 5 == 0){
    result += "fizzBuzz";
}
else if( i % 3 == 0  && i % 5 !== 0){
    result += "fizz";
}
if (i % 5 == 0 && i % 3 !== 0){
    result += "Buzz";
}
if ( i % 3 !== 0 && i % 5 !== 0 ){
    result += i;
}
console.log( result);
}


console.log("///////////////////END FIZZBUZZ///////////////////");

   


console.log("///////////////////start CHESSBOARD///////////////////");

for ( let i = 1; i <= 8 ; i++ ){
    let CHESSBOARD = "";
     for ( let j = 1; j <=  8; j++){
         if (( j + i + 1) % 3 == 0){
              CHESSBOARD += " ";
         }
         if(( j + i + 1) % 3 !== 0) {
             CHESSBOARD += "#";
         }
     }
     console.log(CHESSBOARD);

 }

console.log("///////////////////END CHESSBOARD///////////////////");



console.log("///////////////////start MULTIPLICATION TABLE ///////////////////");
for(i=0;   i < 9 ;   i++   ){
    for(j = 0;  j < 9 ;  j++){

console.log(i + " X " + j + " = " + i * j)

    }


}
console.log("///////////////////END MULTIPLICATION TABLE///////////////////");




