var fiboArr = [0,1];
var initVar = 0;

function fibonacciSeries(){
  for(var i = 0; i<10; i++){
    // fiboArr[i+2] = fiboArr[i] + fiboArr[i+1];
    var x = fiboArr[i] + fiboArr[i+1];
    fiboArr.append(x);
  }
  for(var i = 0; i<10; i++){
    console.log(fiboArr[i] + " ");
  }
}

fibonacciSeries();
