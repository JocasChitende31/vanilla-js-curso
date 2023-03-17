const pessoa = {
    nome: "Jeorgel",
    idade: new Date().getFullYear() -1997,
    email: "jeo@test.com",
    endereco: "Projecto Nova Vida, R1000, E500, ap12:12",
    nacionalidade: "angolana"
}

for(let prop in pessoa){
    console.log(prop,':');

    console.log(pessoa[prop]+'\n');
}