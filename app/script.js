//get all tiles
const tiles = [];
for (let i = 0; i < 36; i++) {
  const tile = document.querySelector(`[id="${i}"]`);
  tiles.push(tile);
}
console.log("tiles array: ", tiles);

//Player

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.money = 1500;
    this.position = 0;
    this.property = [];

    this.tokenElement = document.createElement("div");
    this.tokenElement.className = "player-token";
    this.tokenElement.style.background = color;
    tiles[this.position].appendChild(this.tokenElement);
    console.log(this.tokenElement);
  }

  moveByDice(dice) {
    console.log("roll ", dice);
    try {
      tiles[this.position + dice].appendChild(this.tokenElement);
      tiles[this.position].firstElement = "";
      this.position += dice;
    } catch (error) {
      tiles[this.position + dice - 36].appendChild(this.tokenElement);
      tiles[this.position].firstElement = "";
      this.position += dice - 36;
    }

    console.log("move to", this.tokenElement.parentNode.id);
    console.log("move to", this.position);
  }
}

//create test token
const players = [];
for (let i = 0; i < 2; i++) {
  players.push(new Player("player" + i, "red"));
}

const button = document.querySelector("#roll");
button.onclick = () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  player1.moveByDice(dice);
};
