let inputValue = document.querySelectorAll('input');
let button = document.querySelector('.submit-button');
let value = document.querySelector('.value');
let containerFeedback = document.querySelector('.container-feedback');
let containerResponse = document.querySelector('.container-response');

let buttonValue;

inputValue.forEach((value) => value.addEventListener('click', () => {
    buttonValue = value.value
}));

button.addEventListener('click', () => {
    if(buttonValue != undefined){
        value.innerHTML = buttonValue;
        containerFeedback.classList.add('hidden');
        containerResponse.classList.remove('hidden');
    } else {
        alert('Por gentileza, escolha uma nota para continuar!')
    };
});





