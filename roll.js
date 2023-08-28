const diceimag = ["1", "2", "3", "4", "5", "6"];
const diceElement = document.querySelectorAll(".dice");
const rollButton = document.getElementById("rollButton");
let rollingInterval;

function rollDice() {
  clearInterval(rollingInterval);
  rollingInterval = setInterval(() => {
    diceElement.forEach(dice => {
      const random = Math.floor(Math.random() * diceimag.length);
      dice.style.backgroundImage = `url('./img/${diceimag[random]}.png')`;
    });
  }, 100);
  setTimeout(() => {
    clearInterval(rollingInterval);
  }, 1500);
}
rollButton.addEventListener("click", rollDice);