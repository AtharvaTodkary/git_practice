var fiboArr = [0,1];

function fibonacciSeries(){
  for(var i = 0; i<100; i++){
      var x = fiboArr[i] + fiboArr[i+1];
      fiboArr.push(x);
  }
  for(var i = 0; i<100; i++){
    console.log(fiboArr[i]*fiboArr[i] + " ");
  }
}

fibonacciSeries();
