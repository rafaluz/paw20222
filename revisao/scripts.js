// ####### INTRODUÇÃO A JAVASCRIPT #######

// ####### VARIAVEIS E TIPOS DE DADOS (let e const)

var nome = "Rafael"
var numero = 1000
var status = true


// Let cria uma variavel que pode ter seu valor alterado e const cria uma variavel constante


// alert e console.log

// alert("Pedro")

// alert("minha mensagem")


// ####### OPERAÇÕES MATEMÁTICAS

// m1 = 8
// m2 = 10
// media = (m1 + m2) / 2

// console.log(media)

// ####### Estrutura Condicional (IF)

// if (media >= 7){
//     console.log("Aprovado")
// } else {
//     console.log("reprovado")
// }

// ####### Estrutura de repetição 
    // FOR

    // alunos = ['eliaquim', 'Paulo', 'Angelo', 'Priscila', 'Maiane']
    
    // for para percorrer uma lista de itens

    // for (x in alunos){
    //     console.log(alunos[x])
    // }

    // for para fazer um laço de tamanho determinado

    // for (let i = 0; i <10; i++){
    //     console.log(i)
    // }

    // WHILE

    // let contador = 0;
    // while(contador < 10){
    //     console.log(contador);
    //     contador++;
    // }



// ####### DOM (Modelo de Objeto de Documento)
    // document.getElementById("IdDoElemento")
    // document.querySelector("Elemento");

// O Javascript mapeia todos os elementos html em objetos que podem ser manipulados
// Quando um elemento possui um id, podemos chamar ele pelo seu id diretamente e fazer alguma ação, como alterar seu conteúdo:

// console.log(userName.textContent)

function mudaCor(cor){
    userName.style.color = cor;
}

// Alterar o conteudo de um elemento (textContent)


// ####### EVENTOS
    // onclick, onmouseover, etc...
// ####### FUNÇÕES

    // function nomeDaFuncao(let argumentos){
    //     // code
    // }

    // chamar a função
    // nomeDaFuncao()

    // Alterar cor

    function mudaCor(cor){
        userName.style.color = cor
    }

    
    // Função para mostrar alert, sendo chamada com um clique de botão


//Arrow functions 
    // argumentos => {
    // }

    // (arg1, arg2) => {
    // }

    // () => {
    // }

// ####### CONSUMINDO API DO GITHUB (api.github.com)


function getProfileInfosGitHub(){
    const url = `https://api.github.com/users/rafaluz`
    fetch(url) // acessando a rota
    .then(response => response.json()) //pega o resultado e transforma em json
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userAvatar.src = data.avatar_url
    })
}

getProfileInfosGitHub()
