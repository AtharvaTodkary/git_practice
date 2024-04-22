var fiboArr = [];
var x = 0;

function fibonacciSeries(){
  for(var i = 0; i<10; i++){
    if(i==0){
      x = 1;
    }else{
      x = fiboArr[i] + fiboArr[i+1];
      fiboArr.push(x);
    }
  }
  for(var i = 0; i<10; i++){
    console.log(fiboArr[i] + " ");
  }
}

fibonacciSeries();
