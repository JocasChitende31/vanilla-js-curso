// tipos de dados primitivos: string, number (int, float e double) e boolean

let minhaVar = 'Minha String\n';
let minhaVar2 = "Minha \"String\" com aspas duplas";

const idade = 27 + " anos";
const idade2= 30;
// const sms = "Eu possuo " + idade + " anos";
const sms = "Eu possuo";

const result = `${sms} ${idade}`;

// console.log(minhaVar + minhaVar2);
console.log(sms + idade)
console.log(result);
console.log(typeof minhaVar, typeof sms, typeof result, typeof idade, typeof idade2);

const n1= 10;
const n2= 1.1;
console.log(`O tipo do n1 é ${typeof n1}, e o seu valor é: ${n1}`);
console.log(`O tipo do n2 é ${typeof n2}, e o seu valor é: ${n2}`);

const isValid=true;
console.log(`o tipo da var VALID é: ${typeof isValid}, e seu valor é: ${isValid}`);
console.log(`O tipo do da negação isNotValid é: ${typeof !isValid}, e seu valor é: ${!isValid}`);