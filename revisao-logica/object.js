// DECLARAÇÃO FORMAL DE UM BOJECTO
// const pessoa = new  Object();
// pessoa.name = "Jeorgel";
// pessoa.dataNasc = "31/03/1997";
// let anoNasc = 1997;
// pessoa.idade = (- anoNasc + 2023);
// console.log(pessoa);
// let prop = "name";
// console.log(pessoa[prop]);
// console.log(pessoa["idade"]);


// DECLARAÇÃO LITERAL DE UM OBJECTO
const dataNascimento= "31/03/1997";
const anoNasc= 1997;


const pessoa = {
    nome: "jeorgrl",
    dataNasc: dataNascimento,
    idade: (- anoNasc + new Date().getFullYear()) 
}
console.log(pessoa);