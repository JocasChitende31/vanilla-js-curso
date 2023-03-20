// Criar números randomicos com arrry não repetidos 

function generateRandomInterger(max){
   return parseInt(Math.random() * max);
}

let i =1;
let arr = [];
while (arr.length <= 20) {
    let randomNumber = generateRandomInterger(30);
    // console.log(randomNumber);
    i++;
    if (arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber); 
    }else{
        console.log(randomNumber, 'já existe no array');
    }
}
console.log(arr);
console.log('o loop foi executado: ', i, 'vezes');
// console.log(result);
