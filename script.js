const rating = document.querySelectorAll('input');
const button = document.querySelector('.submit-button');
const containerRating = document.querySelector('.container');
const containerMessage = document.querySelector('.container-two');
let valueRating = document.querySelector('.value')
let value;

console.log(containerMessage)

rating.forEach((ratingValue) => {
    ratingValue.addEventListener('click', function() {
        value = ratingValue.value;
    });
});

button.addEventListener('click', () => {
    containerRating.style.display = "none";
    valueRating.innerHTML = value;
    containerMessage.style.display = "flex";
});


