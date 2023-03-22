
// function init(){
//     let isValid = false;
//     console.log("init menu", isValid);
// }

// init();

 // funções invoccáveis=>geram um escopo isolado de cada arquivo

(function(n1,n2,n3){

    let isValid = true;
    console.log('menu', isValid);
    
    function init(){
        console.log('init do menu');
    }
    
    init();
     
    console.log(n1+n2+n3)
})(10,29,20);