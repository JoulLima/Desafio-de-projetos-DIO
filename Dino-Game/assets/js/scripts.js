var sonic = document.querySelector('.sonic'); // Uma constante não pode ser sobrescrita
const background = document.querySelector('.background');
let isJumping = false; //informar que o personagem esta pulando
let position = 0;
let isGameOver = false;
var sonicRoll = document.querySelector('.sonicRoll');
const startButton = document.querySelector('.start-button');
let pontos = 0;
const exibirPlacar = document.querySelector('.placar') 
var somJump=document.getElementById("somJump");
var somMorte=document.getElementById("somMorte");
somMorte.volume = 0.3;    
var somFundo=document.getElementById("somFundo");
somFundo.volume = 0.3;

function start(){
    startButton.addEventListener('click', (event) => {
    

        startButton.style.display = 'none';
        document.addEventListener('keyup', handlekeyUp);
        createinimigos();
        runScore();
        somFundo.play();

        }
        
        )


function    handlekeyUp(event){
 
    if (event.keyCode === 32) {
        if(!isJumping){//se ele não estiver pulando, ele pula
        jump();
        somJump.play();
        }
    }
}


function jump(){
   
    isJumping = true;
    

    let upInterval = setInterval(() => {
       if(position >= 360) {
           clearInterval(upInterval)

        //Descer
        let downInterval = setInterval(()=> {
          if (position <= 110){
              clearInterval(downInterval);
              isJumping = false;
            } else{
            
            position -= 20;
            sonicRoll.classList.remove('sonicRoll')
            sonic.classList.add('sonic');
           sonic.style.bottom = position + 'px';
            }
        }, 20);
       } else {
       
        //subindo
        position += 20;
        sonicRoll.classList.add('sonicRoll')
        sonic.classList.remove('sonic');
        sonic.style.bottom = position + 'px';
        sonicRoll.style.bottom = position + 'px';
        
           }
    }, 20);
}

function createinimigos(){
    
    const inimigos = document.createElement('div');
    let inimigosPosition= 1000;
    

    if (isGameOver) return;

    inimigos.classList.add('inimigos');
    background.appendChild(inimigos);
    inimigos.style.left = 1000 +'px';
    

    let leftInterval = setInterval(() => {
        if (inimigosPosition < - 60) {
            //saiu da tela
            clearInterval(leftInterval);
            background.removeChild(inimigos);
        } else if (inimigosPosition > 0 && inimigosPosition < 110 && position < 110) {  //operador && ele checa outra função
            //game over

            clearInterval(leftInterval);
            somMorte.play();            
            somFundo.pause();
            alert('Sua pontuação foi: '+ pontos + ' Metros');
            location.reload();
            return
            
	        
            isGameOver = true
        } else{
        inimigosPosition -= 10;
        inimigos.style.left = inimigosPosition + 'px';                
        }
    },20)

    if (!isGameOver) {
        do {
            randomTime = Math.floor(Math.random() * 4000); 
        } while ((randomTime > 200) && (randomTime < 900));

    setTimeout(createinimigos, randomTime) //recursividade, a função vai se chamando infinitamente
    randomTime = 0;
    }
}
function runScore(){
    pontos = 0;

    const placar = document.createElement('h4');
    placar.classList.add('placar');
    background.appendChild(placar);
    
    let intervaloPontos = setInterval(() => {
        if(isGameOver){
            placar.classList.remove('placar');
            clearInterval(intervaloPontos);
            return;
        }

        pontos+=3;
        let classePlacar = document.querySelector('.placar');
        classePlacar.innerHTML = pontos+ ' metros';
    }, 100);
} 


}




sonicRoll.classList.remove('sonicRoll')


