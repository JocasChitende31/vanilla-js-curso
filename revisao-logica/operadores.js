
// + - * ** % /

let n1 = 10;
let n2 = 2;

// OPERADORES ARITIMETICOS
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 ** n2);
console.log(n1 / n2);
console.log(n1 % n2);

// OPERADORES DE ATRIBUIÇÃO
let n3 = 20;
n3 = n3 + 15;
n3 -= 12;
console.log(n3);

// OPERADORES DE INCREMENTO E DECREMENTO
// icremento ++ (pós ++ ou  ++ prê )
// decremento -- (pós -- ou -- prê)
let i = 0;
i++;
i--;
++i;
--i;
console.log(i);


// COMPARAÇÃO
// igualdade de valor ==
// igualdade de valor e tipo ===
// < > <= >= 
// != valores diferentes
// !== valores e tipos diferentes 

console.log(n1, n2, n3);

console.log(n1 != "10");
console.log(n1 > n2);
console.log(n2 >= n3);

// OPERADORES LÓGICOS
/*
 OU -> ||
 E -> &&
 NOT -> !
*/

let idade = 18;
let paiPresentes = true;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paiPresentes === true) && comprouBilhete;
console.log(`Pode Viajar? R: ${podeViajar}`);


// Exempolo de pressendência de operadores
console.log(n1, n2, n3);
n1 = 6;
n2 = 8;
const media1 = n1 + n2 / 2;
const media = (n1 + n2) / 2;
console.log(`a meia 1 é: ${media1}`);
console.log(`a media é: ${media}`);
