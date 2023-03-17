// let e const -> são variáveis de escopo de bloco
// var -> variável de escopo de função
let n = "global";

function mostrarN() {

    let n1 = "n1 local";
    console.log("valor de n1: ", n1);

    if (true) {
        var n2 = "n2 dentro do if e declarado com o var";
    }
    console.log(n2);
    console.log(n1);


}


mostrarN();

console.log('o valor de n no escopo global: ', n);

function fnExt() {

    let n = "n local da fnExterna";

    function fnInter() {
        let n = "n local da fnInterna";
        console.log(n);
    }
    console.log(n);

    fnInter();
}

fnExt();