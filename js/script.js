// declarando variaveis 

let inputRangeRed = 0;
let inputRangeGreen = 0;
let inputRangeBlue = 0;

let inputTextRed = 0;
let inputTextGreen = 0;
let inputTextBlue = 0;

let divSquare = 0;
let divSquareText = 0;

let r = '0';
let g = '0';
let b = '0';

// iniciando o carregamento do console
window.addEventListener('load', () => {
    mapElements()
});


// funçao para mapar o html no javascript
function mapElements() {
    inputRangeRed = document.querySelector('#inputRangeRed');
    inputRangeGreen = document.querySelector('#inputRangeGreen');
    inputRangeBlue = document.querySelector('#inputRangeBlue');

    inputTextRed = document.querySelector('#inputTextRed');
    inputTextGreen = document.querySelector('#inputTextGreen');
    inputTextBlue = document.querySelector('#inputTextBlue');

    divSquare = document.querySelector('#divSquare')
    divSquareText = document.querySelector('#divSquareText')

    // escutando o evento change na função handleInputRangeChange
    inputRangeRed.addEventListener('change', handleInputRangeChange)
    inputRangeGreen.addEventListener('change', handleInputRangeChange)
    inputRangeBlue.addEventListener('change', handleInputRangeChange)

    inputTextRed.addEventListener('change',handleInputTextChange)
    inputTextGreen.addEventListener('change',handleInputTextChange)
    inputTextBlue.addEventListener('change',handleInputTextChange)

};

// funçao handleInputRangeChange que escuta o input range e retorna o numero
function handleInputRangeChange(event) {
    const value = event.target.value;
    const id = event.target.id;

    switch (id) {
        case 'inputRangeRed':
            r = value;
            break;

        case 'inputRangeGreen':
            g = value;
            break;
        case 'inputRangeBlue':
            b = value;
            break;
    }

    syncDiv()
}

// funçao que desenha os valores rgb na div square
function syncDiv() {
    divSquare.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    divSquareText.textContent = `RGB (${r}. ${g}. ${b})`;

    inputTextRed.value = r;
    inputTextGreen.value = g;
    inputTextBlue.value = b;
}

function syncDivText() {
    divSquare.style.backgroundColor = `rgb(${r} ${g} ${b})`;

    inputRangeRed.value = r;
    inputRangeGreen.value = g;
    inputRangeBlue.value = b;
}

function handleInputTextChange() {
    const value = event.target.valueAsNumber;
    const id = event.target.id;

    switch (id) {
        case 'inputTextRed':
            r = value;
            break;

        case 'inputTextGreen':
            g = value;
            break;
        case 'inputTextBlue':
            b = value;
            break;
    }

    syncDivText()
}