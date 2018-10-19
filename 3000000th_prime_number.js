//program to find nth prime number..
let primeNumber;
let isPrime;
let countPrime = 1;
let primeCandidate = 1;

while(countPrime < 500000) {
  primeCandidate+=2;
  isPrime = true;
  for(let divisor = 3; divisor <= Math.sqrt(primeCandidate) ; divisor+=2) {
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
