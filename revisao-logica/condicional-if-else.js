let idade = 17;
let paisPresentes = true;
let comprouBilhete = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar? R: ${podeViajar} \n`);

// TRABALHANDO COM OPERADOR TERNÁRIO

const msgMaiorIdade = idade >= 18 ? 'É maior de idade pode viajar! \n' : 'Opah! É menor de idade, e não pode viajar! \n';

// condicional if e else, dentro usando a expressão que recebe o valor true o false do operador ternário
if (comprouBilhete) {
    console.log(`Não. Não comprou o bilhete! \n`);
} else {
    // if (idade >= 18) {
    //     console.log(`É maior de idade pode viajar! \n`);
    // } else {
    //     console.log('Opah!!! É menor de idade não pode viajar \n');
    // }
    console.log(msgMaiorIdade);
}

// EXtrutuara condicional if and else
let n1 = 10;
let n2 = 0;
console.log(`As notas do estudante são: ${n1} e ${n2}`);
const media = (n1 + n2) / 2;
if (n1 === 0 || n2 === 0) {
    console.log('Reprovado!\n')
}
else if (media >= 8) {
    console.log(`Aluno aprovaldo com a media: ${media} \n`);
} else {
    console.log(`Aluno reprovado com a média: ${media}, mas há como recuperar\n`);
}

console.log(`FIM DO PROGRAMA`);