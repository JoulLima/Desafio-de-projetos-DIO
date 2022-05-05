let order = [];
let clickedOrder = [];
let score = 0;

const somVermelho = document.getElementById("somVermelho")
const somAmarelo = document.getElementById("somAmarelo")
const somAzul = document.getElementById("somAzul")
const somVerde = document.getElementById("somVerde")

//0-verde
//1-vermelho
//2-amarelo
//3-azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//cria ordem aleatória
let shuffleOrder= () => {
                    //Math.floor para arredondar o numero sorteado
                                //Math.random *4 para sortear numero entre 0 e 4
    let colorOrder = Math.floor(Math.random()*4);
    //atribuindo o indice do array com a cor que sai na colorOrder
    order[order.length] = colorOrder;
    clickedOrder = [];
    //order quantas vezes passou pelo i
    for(let i in order){
        let elementColor = createColorElement(order[i]); 

        lightColor(elementColor, Number(i)+ 1 )
    }

}
// acende proxima cor
let lightColor = (element, number) => {
    number = number * 800;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    },number+200)

    

}

//checa se os botoes clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    //para cada i dentro do nosso clickOrder a gente faz a comparação
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    } 
    // nessa funcao verifica se o nosso valor escolhido 1º,2º,3º...bater respectivamente com a ordem criada
    if(clickedOrder.length == order.length){
        
        ponto.innerHTML = score;
        nextLevel();

    }
}

//função para o clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=> {
    createColorElement(color).classList.remove('selected');
    checkOrder();
    },250)

    
}

//funcao que retorna a cor
let createColorElement = (color) => {


    if(color == 0){
        
        return green;
        
    } else if(color == 1){
        
        return red;
    }else if(color == 2){
        
        return yellow;
    }else if(color == 3){
     
        return blue;    
    }
}

//funcao para proximo nivel
let nextLevel= () =>{
    score++;
    shuffleOrder()

}

//funcão para game over
let gameOver = () => {
    alert('Pontuação: ${score)!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
    ponto.innerHTML = '--';

}

let playGame = () => {
    alert('Bem vindo ao Gênesis!Iniciando novo jogo');
    score = 0;

        nextLevel();
}

green.onclick = () => click(0);
red.onclick = () =>  click(1);
yellow.onclick = () =>  click(2);
blue.onclick = () =>  click(3);

playGame();