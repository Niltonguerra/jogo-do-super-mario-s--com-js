
const mario = document.querySelector('.mario'); //chama a classe mario de css para o 
                                                //js para poder ativa-la ou desativa-la quando quiser o javascript

const pipe = document.querySelector('.pipe');

const clouds = document.querySelector('.clouds');


const gameover = document.querySelector('.gameover');

 













const jump =  () =>{

    mario.classList.add('jump');


    //setTimeout --- ela executa uma ação depois de um determinado tempo que você define.
    // exemplo: setTimeout(() => function(){},500)  ////  nesse caso estou usando um tempo de 500ms  

    setTimeout(() => {
        mario.classList.remove('jump');
    },1000);

}



document.addEventListener('keydown', jump); 














const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        //o + antes do window.getComputedStyle é para tranformar o dado que vem como string em numero.


    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 105){
        //let posicao = pipePosition + 'px';
        pipe.style.animation = 'none';
        //pipe.style.left =  posicao; //também daria certo se colocar:
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;


        mario.src= 'mario-jump-images/game-over.png';
        mario.style.width= '63px';
        mario.style.marginLeft = '50px'
        
        clouds.style.animation ='none';
        clouds.style.left = `${cloudsPosition}px`;
        gameover.style.display = 'block';

       clearInterval(loop);

 

    }
},10);



