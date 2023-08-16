console.log("um string literal pode ficar entre aspas duplas");
console.log("um string literal pode ficar entre aspas simples");
console.log(`um string literal pode ficar entre crases`);

console.log("concatenação e interporlação");
const num = 14.5;
console.log("o valor do produto é : " + num);
console.log("o valor do produto é: " + num);
console.log(`o valor do produto é ${num}`);

console.log("conversão entre number e string")

const str1 = num.toString();
console.log(`tipo de ${str1} é ${typeof str1}`)

const str2 = num.toFixed(2)
console.log(`tipo de ${str2} é ${typeof str2}`)

const num1 = Number("14.5")
console.log(`tipo de ${num1} é ${typeof num1}`)

const num2 = parseInt("21",10);
console.log(`tipo de ${num2}: ${typeof num2}`)

const num4 = parseFloat("21.34",10)
console.log(`tipo de ${num4}: ${typeof num4}`)



