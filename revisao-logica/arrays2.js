const nomes = ["Jeorgel", "Alhures", "Ecolelo", "Chitende"];

// MOSTRAR DE FORMA CRESCENTE
for (let i = 0; i < nomes.length; i++) {
    console.log(`${i}: Nome é: ${nomes[i]}`);
}

console.log("\n");

// MOSTRAR DE FORMA DECRESCENTE
for (let i = nomes.length-1; i >=0; i--) {
    console.log(`${i}: Nome é: ${nomes[i]}`);
}
