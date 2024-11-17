const visorEl = document.querySelector("#visor");
const num1El = document.querySelector("#num-1");
const num2El = document.querySelector("#num-2");
const num3El = document.querySelector("#num-3");
const num4El = document.querySelector("#num-4");
const num5El = document.querySelector("#num-5");
const num6El = document.querySelector("#num-6");
const num7El = document.querySelector("#num-7");
const num8El = document.querySelector("#num-8");
const num9El = document.querySelector("#num-9");
const num0El = document.querySelector("#num-0");
const adicaoEl = document.querySelector("#adicao");
const subtracaoEl = document.querySelector("#subtracao");
const multiplicacaoEl = document.querySelector("#multiplicacao");
const divisaoEl = document.querySelector("#divisao");
const resultadoEl = document.querySelector("#resultado");
const clearEl = document.querySelector("#clear");

let operacoes = ['+', '−', '×', '÷'];

clearEl.addEventListener("click", clear);

num1El.addEventListener("click", function escreveValor(){
    visorEl.value += '1';
});

num2El.addEventListener("click", function escreveValor(){
    visorEl.value += '2';
});

num3El.addEventListener("click", function escreveValor(){
    visorEl.value += '3';
});

num4El.addEventListener("click", function escreveValor(){
    visorEl.value += '4';
});

num5El.addEventListener("click", function escreveValor(){
    visorEl.value += '5';
});

num6El.addEventListener("click", function escreveValor(){
    visorEl.value += '6';
});

num7El.addEventListener("click", function escreveValor(){
    visorEl.value += '7';
});

num8El.addEventListener("click", function escreveValor(){
    visorEl.value += '8';
});

num9El.addEventListener("click", function escreveValor(){
    visorEl.value += '9';
});

num0El.addEventListener("click", function escreveValor(){
    visorEl.value += '0';
});

adicaoEl.addEventListener("click", function escreveValor(){
    if(verificaOperacao()){
        visorEl.value += ' + ';
    }
});

subtracaoEl.addEventListener("click", function escreveValor(){
    if(verificaOperacao()){
        visorEl.value += ' − ';
    }
});

multiplicacaoEl.addEventListener("click", function escreveValor(){
    if(verificaOperacao()){
        visorEl.value += ' × ';
    }
});

divisaoEl.addEventListener("click", function escreveValor(){
    if(verificaOperacao()){
        visorEl.value += ' ÷ ';
    }
});

resultadoEl.addEventListener("click", exibeResultado);

function clear() {
    visorEl.value = '';
}

function escreveValor(valor) {
    visorEl.value = valor;
}

function verificaOperacao() {
    for(let i = 0; i < visorEl.value.length; i++){
        for(let j = 0; j < operacoes.length; j++){
            if(visorEl.value[i] === operacoes[j]){
                exibeResultado();
                return true;            
            }
        }
    }
    return true;
}

function exibeResultado() {
    let valorDoVisor = visorEl.value;
    let partesDoVisor = valorDoVisor.split(' ');
    if(partesDoVisor[1] === '+'){
        visorEl.value = Number(partesDoVisor[0]) + Number(partesDoVisor[2])
    }
    else if(partesDoVisor[1] === '−'){
        visorEl.value = Number(partesDoVisor[0]) - Number(partesDoVisor[2])
    }
    else if(partesDoVisor[1] === '×'){
        visorEl.value = Number(partesDoVisor[0]) * Number(partesDoVisor[2])
    }
    else if(partesDoVisor[1] === '÷'){
        visorEl.value = Number(partesDoVisor[0]) / Number(partesDoVisor[2])
    }
}

