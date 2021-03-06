
// Declarando as variaveis 
var jogador, vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var mario = '<img src="assets/images/Mariocabeca.png" class= "personagem";>';
var luigi = '<img src="assets/images/Luigicabeca.png" class= "personagem";>';
var audio1 = new Audio("assets/sound/sommario.mp3")
var audioVitoria = new Audio("assets/sound/somvitoria.mp3")
var audioReiniciar = new Audio("assets/sound/somreiniciar.mp3")







mudarJogador(mario);    


function escolherQuadrado(id){

            
    if(vencedor !== null){
        return
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = '#FFFFFF';
    quadrado.style.backgroundImage = "URL('assets/images/bloco aberto.png')" 
    
        

    if (jogador === mario){
        jogador = luigi;
        audio1.play();
       
        
    }else{
        jogador = mario;
        audio1.play();
  
        
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador

}

function checaVencedor (){
    var quadrado1= document.getElementById(1);
    var quadrado2= document.getElementById(2);
    var quadrado3= document.getElementById(3);
    var quadrado4= document.getElementById(4);
    var quadrado5= document.getElementById(5);
    var quadrado6= document.getElementById(6);
    var quadrado7= document.getElementById(7);
    var quadrado8= document.getElementById(8);
    var quadrado9= document.getElementById(9);


    if (checaSequencia(quadrado1, quadrado2,quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5,quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5,quadrado6);
        mudarVencedor(quadrado4);
    }

    if (checaSequencia(quadrado7, quadrado8,quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4,quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    
    if (checaSequencia(quadrado2, quadrado5,quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    
    if (checaSequencia(quadrado3, quadrado6,quadrado9)){
        mudarCorQuadrado(quadrado3, quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5,quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5,quadrado7)){
        mudarCorQuadrado(quadrado3, quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

function mudarVencedor(quadrado){
    vencedor= quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
    

}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "URL('assets/images/bloco-verde.png')";;
    quadrado1.style.backgroundSize = "contain"
    quadrado2.style.background  = "URL('assets/images/bloco-verde.png')";
    quadrado2.style.backgroundSize = "contain"
    quadrado3.style.background  = "URL('assets/images/bloco-verde.png')";;
    quadrado3.style.backgroundSize = "contain"
    audioVitoria.play();
}
    


function checaSequencia(quadrado1, quadrado2,quadrado3){
    var eigual= false;
    

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual= true;
    }
    return eigual
} 

function reiniciar(){

    vencedor = null
    vencedorSelecionado.innerHTML= ' ';

    for (var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        
        quadrado.innerHTML = '-'
        quadrado.style.color = 'transparent';
        quadrado.style.backgroundImage = "URL('assets/images/box.png')" 
        quadrado.style.backgroundSize = 'contain'
        audioVitoria.pause()
        audioReiniciar.play()
    mudarJogador(mario);
    }
}