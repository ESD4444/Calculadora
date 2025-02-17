const teclasNumericasEl = document.querySelectorAll(".numero");
const teclasOperacoesEl = document.querySelectorAll(".operacao");
const limparBtn = document.querySelector("#limpar");
const resultadoBtn = document.querySelector("#resultado");
const deletarUmCaractereEl = document.querySelector("#apagar-1");
const visorEl = document.querySelector("#visor");

let operacaoUtilizada = false;
let resultadoUtilizado = false;

teclasNumericasEl.forEach(e => {
    e.addEventListener("click", (element) => {
        if(resultadoUtilizado){
            visorEl.value = element.target.textContent;
            resultadoUtilizado = false;
        }
        else {
            visorEl.value += element.target.textContent;
        }
    })
});

teclasOperacoesEl.forEach(e => {
    e.addEventListener("click", (element) => {
        if(!operacaoUtilizada && visorEl.value != ''){
            visorEl.value += ' ';
            visorEl.value += element.target.textContent;
            visorEl.value += ' ';
            operacaoUtilizada = true;
            resultadoUtilizado = false;
        } else if(operacaoUtilizada && visorEl.value != '') {
            resultado();
            operacaoUtilizada = false;
            visorEl.value += ' ';
            visorEl.value += element.target.textContent;
            visorEl.value += ' ';
            operacaoUtilizada = true;
            resultadoUtilizado = false;
        }
    })
});

limparBtn.addEventListener("click", () => {
    visorEl.value = '';
    operacaoUtilizada = false;
});

resultadoBtn.addEventListener("click", resultado);

deletarUmCaractereEl.addEventListener("click", () => {
    if (visorEl.value[visorEl.value.length - 1] === ' ') {
        visorEl.value = visorEl.value.slice(0, -1);
        visorEl.value = visorEl.value.slice(0, visorEl.value.lastIndexOf(' '));
        
        operacaoUtilizada = false;
    } else {
        visorEl.value = visorEl.value.slice(0, -1);
    }
});

function resultado() {
    if(visorEl.value.trim() !== '' && visorEl.value[visorEl.value.length - 1] !== ' '){
        const visor = visorEl.value.split(' ');
        let num1 = parseFloat(visor[0]);
        let num2 = parseFloat(visor[2]);
        let operacao = visor[1];
        if (operacao === '÷') {
            if (num2 !== 0) {
                visorEl.value = num1 / num2;
            } else {
                visorEl.value = 'Erro: Divisão por zero';
            }
        } else if (operacao === '+') {
            visorEl.value = num1 + num2;
        } else if (operacao === '-') {
            visorEl.value = num1 - num2;
        } else if (operacao === '×') {
            visorEl.value = num1 * num2;
        } else if (operacao === '%') {
            visorEl.value = (num1 * num2) / 100;
        }
        operacaoUtilizada = false;
        resultadoUtilizado = true;
    }
}