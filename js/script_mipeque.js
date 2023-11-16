
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);


//tateti//
const board = document.getElementById('board');
    let currentPlayer = 'X';
    const cells = Array.from({ length: 9 });

// Función para crear las casillas del tablero
    function createBoard() {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
            cells[i] = cell;
        }
    }

// Función que maneja el clic en una casilla
    function handleCellClick(e) {
        const clickedCell = e.target;
        const index = clickedCell.dataset.index;

        if (cells[index].textContent === '') {
            cells[index].textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

 // Función para verificar si hay un ganador
    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent
            ) {
                alert(`¡Felicitaciones ${cells[a].textContent} ganaste un 20% de descuento!`);
                resetBoard();
                return;
            }
        }

        if (cells.every(cell => cell.textContent !== '')) {
            alert("¡Empate!");
            resetBoard();
        }
    }

    // Función para reiniciar el tablero
    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }

    // Inicialización del juego
    createBoard();

