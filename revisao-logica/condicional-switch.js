let diaSemana = 1;

if (diaSemana === 0) {
    console.log('Domingo');
} else if (diaSemana === 1) {
    console.log('segunda-feira');
} else if (diaSemana === 2) {
    console.log('terça-feira');
} else if (diaSemana === 3) {
    console.log('quarta-feira');
} else if (diaSemana === 4) {
    console.log('quinta-feira');
} else if (diaSemana === 5) {
    console.log('sexta-feira');
} else {
    console.log('sábado');
}

// switch
let dia = "";
switch (diaSemana) {
    case 0:
        dia = "primeiro dia da senana";
        break;
    case 1:
        dia = "Segundo dia da semana";
        break;
    case 2:
        dia = "terceiro dia da semana";
        break;
    case 3:
        dia = "quarto dia da semana";
        break;
    case 4:
        dia = "quinto dia da semana";
        break;
    case 5:
        dia = "sexto dia da semana";
        break;
    case 6:
        dia = "sétimo dia da semana";
        break;
    default:
        dia = "Este dia da semana não existe, certifique-se de que digitou um número válido!";
        break;
}

console.log(`${dia}`);