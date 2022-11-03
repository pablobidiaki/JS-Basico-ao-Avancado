var pessoa = {
    nome: "Pablo",
    sobrenome:"Bidiaki",
    idade:19,
    altura:1.80,
    casado: false,
    nomeCompleto: function(){
        pessoa.nome = pessoa.nome + " " + pessoa.sobrenome
    }
}

document.getElementById("res").innerHTML = "O nome da pessoa é " + pessoa.nome + " A idade dele(a) é " + pessoa.idade + " e sua altura é de " + pessoa.altura

pessoa.nomeCompleto()
console.log(pessoa)