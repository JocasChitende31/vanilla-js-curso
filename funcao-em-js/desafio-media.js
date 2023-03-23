
'use strict'

// RESOLVENDO O DESAFIO USANDO UMA FUNCTION DECLARECTION

let msgNota = 'A nota final do estudante é: ';
let msgMedia = 'Contudo, sua média é: ';
let msgZero = 'O estudante não fez nenhuma prova.';

function calcularMedia() {

    let media = parseInt(0);
    let divisor = 0;

    for (let i = 0; i < arguments.length; i++) {
        media += arguments[i];

        if (typeof media !== 'number') {
            return 'Erro! caracter ' + `'${arguments[i]}'` + ' não permitido.';
        }
        divisor++;
    }
    if (media === 0) {
        console.log(msgZero);
        return media;
    } else {

        console.log(`${msgNota} ${media}/${divisor}`);
        return msgMedia + (media / divisor);
    }

}

console.log(`${calcularMedia(10, 2, '1')}`);


//  RESOLVENDO O DESÁFIO USANDO UMA FUNÇÃO AUTO-INVOCÁVEL

(function () {

    function calcularMedia() {
        let total = 0;
        let qtd = arguments.length;

        for (let i = 0; i < qtd; i++) {

            if (typeof arguments[i] !== 'number') {
                throw Error('only number');
            }

            total += arguments[i];

        }

        let media = (total / qtd) || 0;

        return media;
    }

    console.log(calcularMedia(10, 20));
})();