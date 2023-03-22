
// function init(){
//     let isValid = false;
//     console.log("init menu", isValid);
// }

// init();

 // funções invoccáveis=>geram um escopo isolado de cada arquivo

(function(){

    let isValid = true;
    console.log('menu', isValid);

    function init(){
        console.log('init do menu');
    }

    init();
})();