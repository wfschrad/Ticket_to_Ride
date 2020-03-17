//launch file for web-based Ticket to Ride game app

/* Game Creation/set-up
Select box to choose # of players
Once selection is made, reveal input boxes for players names and selects for color choice
Once all info is chosen, new game button is enabled
upon newButton click, board appears and setup routine is executed
*/
const playerForm = document.getElementById('form-holder');
const playerSelect = document.getElementById('player-num');
const playerName1 = document.getElementById('player-1-name');
const playerName2 = document.getElementById('player-2-name');
const playerName3 = document.getElementById('player-3-name');
const playerName4 = document.getElementById('player-4-name');
const startLabel = document.getElementById('start-label');

const newGameBtn = document.getElementById('new-game');



playerSelect.addEventListener('change', () => {
    switch(Number(playerSelect.value)) {
        case 4:
            playerName4.classList.remove('hidden');
        case 3:
            playerName3.classList.remove('hidden');
        case 2: 
            playerName2.classList.remove('hidden');
            playerName1.classList.remove('hidden');
            playerSelect.classList.add('hidden');
            newGameBtn.classList.remove('hidden');
            startLabel.innerHTML = 'Enter player names and select "New Game" to start';
    }
});

playerForm.addEventListener('keyup', () => {
    let gameReady = false;
    switch(Number(playerSelect.value)) {
        case 4:
            if (playerName1.value&&playerName2.value&&playerName3.value&&playerName4.value) gameReady = true;
            break;
        case 3:
            if (playerName1.value&&playerName2.value&&playerName3.value) gameReady = true;
            break;
        case 2: 
            if (playerName1.value&&playerName2.value) gameReady = true;
            break;
    }
    if (gameReady) newGameBtn.disabled = false;
});

newGameBtn.addEventListener('click', () => {
    gameInit();
});

function gameInit() {
    //hide setup elements
    //display board
    //initialize game variables
}