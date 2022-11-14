//get all tiles
const tiles = [];
for (let i = 0; i < 36; i++) {
  const tile = document.querySelector(`[id="${i}"]`);
  tiles.push(tile);
}
console.log("tiles array: ", tiles);

//create test token
const token = document.createElement("div");
token.className = "player-token";
tiles[0].appendChild(token);
console.log(token);

function move_test(token, dice) {
  try {
    tiles[parseInt(token.parentNode.id) + dice].appendChild(token);
    tiles[token.parentNode.id].firstElement = "";
  } catch (error) {
    tiles[parseInt(token.parentNode.id) + dice - 36].appendChild(token);
    tiles[token.parentNode.id].firstElement = "";
  }
  console.log("move to", token.parentNode.id);
}

const button = document.querySelector("#roll");
button.onclick = () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log("roll ", dice);
  move_test(token, dice);
};
