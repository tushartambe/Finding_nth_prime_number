//program to find nth prime number..
let primeNumber;
let isPrime;
let countPrime = 0;
let primeCandidate = 1;
let primeNumberAtPosition = process.argv[2];

if(primeNumberAtPosition >=1) {
  while(countPrime < primeNumberAtPosition) {
    primeCandidate++;
    isPrime = true;
    let divisor = 2;  

    while(divisor <= Math.sqrt(primeCandidate)) {
      if((primeCandidate % divisor) == 0){
        isPrime = false;
        divisor = primeCandidate;
      }
      divisor++
    }

    if(isPrime){
      countPrime+=1;
      primeNumber = primeCandidate;
    }
  }

  console.log("Prime number at position ",countPrime,"is :",primeCandidate);
} else {
  console.log("Enter valid index ");
}
