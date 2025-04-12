//Вариант 1 (22 по списку)
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const n = parseInt(prompt("Введите целое число:"));
// const n = 17;

if (isPrime(n)) {
  console.log(n + " - простое число");
} else {
  console.log(n + " - не простое число");
}