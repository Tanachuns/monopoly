const test = document.querySelector(".testbtn");
const popupContrainer = document.querySelector(".popup-contrainer");

//get all tiles
tiles.forEach((tile) => {
  tile.element.onclick = () => {
    popup.parentElement.style.display = "flex";
    popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
      tileLevel[tile.lv]
    }) </h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" height="200">
            <p>Price : ${tile.price} G</p>
            <p>Rent : ${tile.rent[tile.lv]} G</p>

            <button id='cancel-btn'>close</button>`;
    const cancelBtn = document.querySelector("#cancel-btn");
    cancelBtn.onclick = () => {
      popup.parentElement.style.display = "none";
    };
  };
  tiles.push(tile);
});

// console.log("tiles array: ", tiles);

//create test token
let players = [];
players.push(new Player(0, "Player 1", "red"));
players.push(new Player(1, "Player 2", "blue"));
players.push(new Player(2, "Player 3", "green"));
// console.log(players);

//roll a dice
const buttonRoll = document.querySelector("#roll");
const buttonEnd = document.querySelector("#end");
const playerTurn = document.querySelector("#turn");
const diceElement = document.querySelector("#dice-1");
let turn = 0;
const diceFaces = ["zero", "one", "two", "three", "four", "five", "six"];
const tileLevel = ["Camp", "House", "City", "Barrack"];

function checkTile(currentPlayer, tile) {
  try {
    if (tile.type === "normal") {
      console.log(`tile:[${tile.id}]${tile.name}`);
      if (tile.owner === "") {
        console.log(`has no owner`);
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
          tileLevel[tile.lv]
        }) </h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300">
            <p>Rent : ${tile.rent[tile.lv]} G</p>
            <button id='buy-btn'>buy for ${tile.price} G</button>
            <button id='cancel-btn'>close</button>`;
        const cancelBtn = document.querySelector("#cancel-btn");
        cancelBtn.onclick = () => {
          popup.parentElement.style.display = "none";
        };
        const buyBtn = document.querySelector("#buy-btn");
        buyBtn.onclick = () => {
          if (currentPlayer.setMoney(-tile.price)) {
            currentPlayer.assets.push(tile.id);
            tile.owner = players.indexOf(currentPlayer);
            tiles[tile.id].element.style.background = currentPlayer.color;
            console.log(
              currentPlayer.name + "buy",
              tile.id,
              tile.name,
              "he has ",
              currentPlayer.assets
            );
            popup.parentElement.style.display = "none";
            allUpdate();
          } else {
            currentPlayer.removePlayer("bankrupt");
          }
        };
      } else if (tile.owner === currentPlayer.id) {
        console.log("time to upgrade");
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
          tileLevel[tile.lv]
        }) </h1>
              <p>type: ${tile.type}</p>
              <img src="${tile.img}" alt="${tile.name}" width="300">
              <p>Rent : ${tile.rent[tile.lv]} G</p>
              <button id='upgrade-btn'>upgrade for ${tile.upgrade} G</button>
              <button id='cancel-btn'>close</button>`;
        const cancelBtn = document.querySelector("#cancel-btn");
        cancelBtn.onclick = () => {
          popup.parentElement.style.display = "none";
        };
        const upgradeBtn = document.querySelector("#upgrade-btn");
        upgradeBtn.onclick = () => {
          if (currentPlayer.setMoney(-tile.upgrade)) {
            tile.lv += 1;
            console.log(
              tile.name,
              " has upgraded from",
              tileLevel[tile.lv - 1],
              " to ",
              tileLevel[tile.lv]
            );
            popup.parentElement.style.display = "none";
            allUpdate();
          } else {
            currentPlayer.removePlayer("bankrupt");
          }
        };
      } else {
        console.log("time to pay rent");
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
          tileLevel[tile.lv]
        }) </h1>
              <p>type: ${tile.type}</p>
              <img src="${tile.img}" alt="${tile.name}" width="300">
              <p>Rent : ${tile.rent[tile.lv]} G</p>
              <button id='rent-btn'>pay ${tile.rent[tile.lv]} G</button>`;
        const rentBtn = document.querySelector("#rent-btn");
        rentBtn.onclick = () => {
          if (currentPlayer.setMoney(-tile.rent[tile.lv])) {
            players[tile.owner].setMoney(tile.rent[tile.lv]);
            console.log(
              currentPlayer.name,
              " pay ",
              tile.rent[tile.lv],
              "G to ",
              players[tile.owner].name
            );
            popup.parentElement.style.display = "none";
            allUpdate();
          } else {
            currentPlayer.removePlayer("bankrupt");
          }
        };
      }
    } else if (tile.type === "spacial") {
      console.log(`tile:[${tile.id}]${tile.name}`);
      if (tile.owner === "") {
        console.log(`has no owner`);
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
          tileLevel[tile.lv]
        }) </h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300">
            <p>Rent : ${tile.rent[tile.lv]} G</p>
            <button id='buy-btn'>buy for ${tile.price} G</button>
            <button id='cancel-btn'>close</button>`;
        const cancelBtn = document.querySelector("#cancel-btn");
        cancelBtn.onclick = () => {
          popup.parentElement.style.display = "none";
        };
        const buyBtn = document.querySelector("#buy-btn");
        buyBtn.onclick = () => {
          if (currentPlayer.setMoney(-tile.price)) {
            currentPlayer.assets.push(tile.id);
            tile.owner = players.indexOf(currentPlayer);
            tiles[tile.id].element.style.background = currentPlayer.color;
            console.log(
              currentPlayer.name + "buy",
              tile.id,
              tile.name,
              "he has ",
              currentPlayer.assets
            );
            popup.parentElement.style.display = "none";
            allUpdate();
          } else {
            currentPlayer.removePlayer("bankrupt");
          }
        };
      } else {
        console.log("time to pay rent");
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
          tileLevel[tile.lv]
        }) </h1>
              <p>type: ${tile.type}</p>
              <img src="${tile.img}" alt="${tile.name}" width="300">
              <p>Rent : ${tile.rent[tile.lv]} G</p>
              <button id='rent-btn'>pay ${tile.rent[tile.lv]} G</button>`;
        const rentBtn = document.querySelector("#rent-btn");
        rentBtn.onclick = () => {
          if (currentPlayer.setMoney(-tile.rent[tile.lv])) {
            players[tile.owner].setMoney(tile.rent[tile.lv]);
            console.log(
              currentPlayer.name,
              " pay ",
              tile.rent[tile.lv],
              "G to ",
              players[tile.owner].name
            );
            popup.parentElement.style.display = "none";
            allUpdate();
          } else {
            currentPlayer.removePlayer("bankrupt");
          }
        };
      }
    } else if (tile.type === "treasure") {
    } else if (tile.type === "stop") {
    } else if (tile.type === "teleport") {
    } else if (tile.type === "tostop") {
    } else if (tile.type === "tax") {
    }
  } catch (error) {
    console.log("no tile in Tiles.js");
    console.log("you are on test make sure this log wont show when finish");
    console.error(error);
  }
}

function allUpdate() {
  players.forEach((player) => {
    player.update();
  });
}

function rolls() {
  turn === players.length ? (turn = 0) : (turn = turn);
  // const dice = Math.floor(Math.random() * 6) + 1;
  if (players.length > 1) {
    const dice = 1; //for test
    diceElement.style.backgroundImage = `url("../src/images/dice/dice-six-faces-${diceFaces[dice]}.png")`;
    let currentPlayer = players[turn];

    if (!currentPlayer.isPlaying) {
      console.log("player isnt in the game");
    } else {
      console.log("player in game");
      currentPlayer.moveByDice(dice);
      buttonRoll.style.display = "none";
      setTimeout(() => {
        buttonEnd.style.display = "block";
      }, 1200);
      setTimeout(
        () => checkTile(currentPlayer, tiles[currentPlayer.position]),
        1000
      );
    }
  } else {
    popup.parentElement.style.display = "flex";
    popup.innerHTML = `<h1>${players[0].name} is Winner.</h1>
              <button id='cancel-btn'>close</button>`;
    const cancelBtn = document.querySelector("#cancel-btn");
    cancelBtn.onclick = () => {
      popup.parentElement.style.display = "none";
    };
  }
}

function endTurn() {
  buttonEnd.style.display = "none";
  setTimeout(() => {
    buttonRoll.style.display = "block";
  }, 200);
  turn < players.length - 1 ? (turn += 1) : (turn = 0);
  playerTurn.innerHTML = players[turn].name + "'s Turn.";
}

playerTurn.innerHTML = players[turn].name + "'s turn";
buttonRoll.onclick = () => rolls();
buttonEnd.onclick = () => endTurn();

test.onclick = () => {
  players[1].removePlayer("test button");
};
