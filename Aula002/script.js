var carro = {
    portas: 2,
    marca: "BMW",
    cor: "preta"
}

var modelo

function quantidadeportas(){
    var ter = carro.portas == 4 ? modelo = "Modelo 4 portas": modelo = "Modelo 2 Portas"
    console.log(modelo)
}

quantidadeportas()