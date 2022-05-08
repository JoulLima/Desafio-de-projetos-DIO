var sonic = document.querySelector('.sonic'); // Uma constante não pode ser sobrescrita
const background = document.querySelector('.background');
let isJumping = false; //informar que o personagem esta pulando
let position = 0;
let isGameOver = false;

function    handlekeyUp(event){
    if (event.keyCode === 32) {
        if(!isJumping){//se ele não estiver pulando, ele pula
        jump();
        }
    }
}

function jump(){
    
    isJumping = true;

    let upInterval = setInterval(() => {
       if(position >= 260) {
           clearInterval(upInterval)

        //Descer
        let downInterval = setInterval(()=> {
          if (position <= 110){
              clearInterval(downInterval);
              isJumping = false;
            } else{
            position -= 20;
           sonic.style.bottom = position + 'px';
            }
        }, 20);
       } else {
       
        //subindo
        position += 20;
        sonic.style.bottom = position + 'px';
       }
    }, 20);
}

function createinimigos(){
    const inimigos = document.createElement('div');
    let inimigosPosition= 1000;
    let randomTime = Math.random() * 6000;

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
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
            isGameOver = true
        } else{
        inimigosPosition -= 10;
        inimigos.style.left = inimigosPosition + 'px';                
        }
    },20)

    setTimeout(createinimigos, randomTime) //recursividade, a função vai se chamando infinitamente

}


createinimigos();
document.addEventListener('keyup', handlekeyUp);
