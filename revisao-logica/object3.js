const producto = {
    nome: 'caneta',
    qtd: 3, 
    // compra: function (n) {
    //     if (n > this.qtd) {
    //         console.log(`oph! apenas restam ${this.qtd}`)
    //     } else {

    //         producto.qtd -= n;
    //         console.log(this.qtd);
    //     }
    // }
    compra(n) {
        if (n > this.qtd) {
            console.log(this)
            console.log(`oph! quantidade indisponível, apenas restam ${this.qtd} canetas`);
        } else {
            producto.qtd -= n;
            console.log(this);
            console.log('qtd no stock: ' + this.qtd);
        }

    },
    // declaração de dunção 
    test1: function () {
        console.log(this);
    },
    // declaração de uma arrow function, forma que surgiu com EchmmaScript2017
    test2: () => {
        console.log(this);
    }
}

producto.compra(2);

producto.test1();

producto.test2();
