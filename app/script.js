const test = document.querySelector(".testbtn");
//get all tiles
const tiles = [];
for (let i = 0; i < 36; i++) {
  const tile = document.querySelector(`[id="${i}"]`);
  // tile.onmouseover = () => {
  //   console.log(tilesData[i]);
  // };
  tiles.push(tile);
}
// console.log("tiles array: ", tiles);

//create test token
let players = [];
players.push(new Player(0, "Player 1", "red"));
players.push(new Player(1, "Player 2", "blue"));
players.push(new Player(2, "Player 3", "green"));
// console.log(players);

//roll a dice
const button = document.querySelector("#roll");
const playerTurn = document.querySelector("#turn");
const diceElement = document.querySelector("#dice-1");
let turn = 0;
const diceFaces = ["zero", "one", "two", "three", "four", "five", "six"];
playerTurn.innerHTML = players[turn].name + "'s turn";

function rolls() {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceElement.style.backgroundImage = `url("../src/images/dice/dice-six-faces-${diceFaces[dice]}.png")`;

  if (!players[turn].isPlaying) {
    console.log("player isnt in the game");
  } else {
    console.log("player in game");
    players[turn].moveByDice(dice);
  }
  turn == players.length - 1 ? (turn = 0) : (turn += 1);
  playerTurn.innerHTML = players[turn].name + "'s Turn.";
  // const dice = Math.floor(Math.random() * 6) + 1;
}

button.onclick = () => rolls();
test.onclick = () => {
  players[1].removePlayer();
};
