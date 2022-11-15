//get all tiles
const tiles = [];
for (let i = 0; i < 36; i++) {
  const tile = document.querySelector(`[id="${i}"]`);
  // tile.onmouseover = () => {
  //   console.log(tilesData[i]);
  // };
  tiles.push(tile);
}
console.log("tiles array: ", tiles);

//tile-detail

//create test token
const players = [];
players.push(new Player("Player 1", "red"));
players.push(new Player("Player 2", "blue"));
players.push(new Player("Player 3", "green"));
console.log(players);

//roll a dice
const button = document.querySelector("#roll");
const playerTurn = document.querySelector("#turn");
const diceElement = document.querySelector("#dice-1");
let turn = 0;
const diceFaces = ["zero", "one", "two", "three", "four", "five", "six"];
playerTurn.innerHTML = players[turn].name + "'s turn";
button.onclick = () => {
  // const dice = Math.floor(Math.random() * 6) + 1;
  const dice = 1;
  diceElement.style.backgroundImage = `url("../src/images/dice/dice-six-faces-${diceFaces[dice]}.png")`;
  console.log(turn);
  players[turn].moveByDice(dice);
  turn < players.length - 1 ? (turn += 1) : (turn = 0);
  playerTurn.innerHTML = players[turn].name + "'s turn";
};
console.log(tilesData);
