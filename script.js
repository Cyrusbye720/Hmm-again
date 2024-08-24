// Tic-Tac-Toe
const ticTacToeBoard = document.getElementById('tic-tac-toe-board');
let ticTacToeTurn = 'X';

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', function() {
        if (cell.textContent === '') {
            cell.textContent = ticTacToeTurn;
            ticTacToeTurn = ticTacToeTurn === 'X' ? 'O' : 'X';
        }
    });
    ticTacToeBoard.appendChild(cell);
}

// Interactive Animation
document.getElementById('reveal-message').addEventListener('click', function() {
    const message = document.getElementById('hidden-message');
    message.style.display = 'block';
    message.style.animation = 'fadeIn 2s';
});

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('slides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
