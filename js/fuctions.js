function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const diceNumber = getRandomDiceNumber();
    const diceImage = document.querySelector('#dice img');
    diceImage.src =`./Kuvat/${diceNumber}.png`;
}

document.getElementById('dice').addEventListener('click', rollDice);