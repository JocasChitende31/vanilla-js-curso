// function init(){
//     let isValid = true;
//     console.log('init do modal', isValid);
// }

// init();

// funções invoccáveis=>geram um escopo isolado de cada arquivo

(function(){
    let isValid = true;
    console.log('modal', isValid);

    function init(){
        console.log('init do modal');
    }

    init();
}())