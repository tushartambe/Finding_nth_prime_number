//program to find nth prime number..
let primeNumber;
let isPrime;
let countPrime = 0;
let primeCandidate = 1;

while(countPrime < 10001) {
  primeCandidate++;
  isPrime = true;
  for(let divisor =2 ; divisor <= Math.sqrt(primeCandidate) ; divisor++) {
    if((primeCandidate % divisor) == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    countPrime+=1;
    primeNumber = primeCandidate;
  }
}

console.log("prime number = ",primeNumber,"at position ",countPrime);
