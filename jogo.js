var altura = 0;
var largura = 0;
var vidas =1;
var tempo= 30;
var criaMosquitoTempo = 1500;

 

//Função para o tamanho da tela ser ajustada automaticamente.
function ajustaTamanhoTelaJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoTelaJogo();
//Criando o conômetro do jogo
var conometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(conometro); 
        clearInterval(criaMosquito);  
        document.location.href ="vitoria.html";
    }else{
    document.getElementById('conometro').innerHTML = tempo;
    }
} , 1000)

//Função para criar os moquitos de forma randômica.
function posicaoRandomica(){

    //remover o mosquito anterior caso ele exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        
        console.log('v' + vidas);
        if(vidas >3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src="img/coracao_vazio.png";
            vidas++;
            
        } 
    }
    //Criando posições randômicas dos mosquitos
    var posicaoX = Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor(Math.random() * altura) -90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
    console.log(posicaoX, posicaoY);

    //Criando o elemento mosquito 
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className =tamanhoAleatorio()+ ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    
}
// Função para criar o tamnaho do mosquito aleatoriamente
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);  
    
    switch(classe){
        case 0:
            return 'mosquito'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'

    }
    console.log(classe);  
}
//Função para inverter aleatoriamente o lado do mosquito
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);  
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'


    }
    console.log(classe);  
}
//Funçao para iniciar o jogo
function iniciarJogo(){
   var nivel = document.getElementById('nivel').value;
   if(nivel  === ''){
    alert('selecione um nível para iniciar o jogo');
    return false;
   }
   window.location.href = "app.html?" + nivel;
    
   
    
}
// Associando o nível de dificuldade selecionado
var nivel = window.location.search;
    nivel= nivel.replace('?', '' );
    if(nivel === 'normal'){
       criaMosquitoTempo = 1500;

    }else if(nivel ==='dificil'){
        criaMosquitoTempo = 1000;
    }else if(nivel === 'hardcore'){
        criaMosquitoTempo = 750;

    }