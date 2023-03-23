


function fn(cb) {
    console.log('executar a acção callback');
    console.log(typeof cb);

    cb();
}


const callback = () => {
    console.log('funçãoo passada como paramÊtro');
}

fn(callback);


const obj = {
    callback
};

obj.callback();

function fn2(n1) {

    return function (n2) {

        return n1 * n2;
    }
}

const funcao2 = fn2(10);
const mult = funcao2(20);


console.log(mult);


function fn3(){

    fn3.count ++
    return function _fn3(){
        console.log("funcção retornada por parâmetro");
    }
}

fn3.count = 0;

const funcao3 = fn3();
const funcao3a = fn3();
const funcao3b = fn3();

funcao3();

console.log(fn3.count);
