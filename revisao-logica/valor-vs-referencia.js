// Quando criamos uma variável que aponta para um array ou objecto = é uma refência ex: const a = {} ou const a = [];
// O contrºario é um dado primitivo ex: const a = 1; ...;

function alteraArray(a){
    a.push("addicionado");
}
let arr = ['a'];
console.log(arr);
alteraArray(arr);
console.log(arr);

function alteraPrimitivo(p){
    p+= "adicionado";
    console.log('dentro da função:', p);
}

let msg = " mensagem ";
console.log(msg);
alteraPrimitivo(msg);
console.log(msg);