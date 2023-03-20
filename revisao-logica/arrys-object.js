const names = ['Alhures', 'Jeorgel', 'Chitende'];

const pessoa = {
    name: 'Alhures',
    idade: 28,
    email: 'test@gmail.com'
}

const pessoa2 = {};

const pessoas = [
    {
        nome: 'Alhures',
        idade: 28
    }, {
        nome: 'Jeorgel',
        idade: 26
    }, {
        "nome": 'Negas',
        "idade": 24
    }, {
        nome: 'Alva',
        idade: 17
    }
]

console.log(pessoas);

let aprovados = [];
for (let i = 0; i <= pessoas.length - 1; i++) {
    if (pessoas[i].idade <= 18) {
        console.log(`O candidato(a) ${pessoas[i].nome}-(idade:${pessoas[i].idade} < 18), não pode ser admitida  `);
    } else {
        aprovados += `${pessoas[i].nome} \n`;
    }
}
console.log(`Nome dos aprovados: \n${aprovados}`);