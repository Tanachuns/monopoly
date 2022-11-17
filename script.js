const popupContrainer = document.querySelector(".popup-contrainer");

//get all tiles
tiles.forEach((tile) => {
  tile.element.onclick = () => {
    popup.parentElement.style.display = "flex";
    tile.type === "normal"
      ? (popup.innerHTML = `<h1>[${tile.id}] ${tile.name}(${
          tileLevel[tile.lv]
        }) </h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300">
            <p>Price : ${tile.price} G</p>
            <p>Rent : ${tile.rent[tile.lv]} G</p>
            <button id='cancel-btn'>close</button>`)
      : (popup.innerHTML = `<h1>[${tile.id}] ${tile.name} </h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300">
            <p>Price : ${tile.price} G</p>
            <p>Rent : ${tile.rent[tile.lv]} G</p>
            <button id='cancel-btn'>close</button>`);
    const cancelBtn = document.querySelector("#cancel-btn");
    cancelBtn.onclick = () => {
      popup.parentElement.style.display = "none";
    };
  };
});

// console.log("tiles array: ", tiles);

//create test token
let players = [];
players.push(new Player(0, "Player 1", "red"));
players.push(new Player(1, "Player 2", "blue"));
players.push(new Player(2, "Player 3", "green"));
players.push(new Player(3, "Player 4", "pink"));
players.push(new Player(4, "Player 5", "violet"));

// console.log(players);

//spacial wincon test
// players[0].addAsset(16);
// players[0].addAsset(20);
// players[0].addAsset(28);

//roll a dice
const buttonRoll = document.querySelector("#roll");
const buttonEnd = document.querySelector("#end");
const playerTurn = document.querySelector("#turn");
const dice1Element = document.querySelector("#dice-1");
const dice2Element = document.querySelector("#dice-2");

let turn = 0;
const diceFaces = ["zero", "one", "two", "three", "four", "five", "six"];
const tileLevel = ["Land", "House", "City", "Barrack"];

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
            currentPlayer.addAsset(tile.id);

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
            players.forEach((player) => {
              if (player.id == tile.owner) {
                player.setMoney(tile.rent[tile.lv]);
                console.log(
                  currentPlayer.name,
                  " pay ",
                  tile.rent[tile.lv],
                  "G to ",
                  player.name
                );
              }
            });
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
      } else if (tile.owner === currentPlayer.id) {
        console.log("time to upgrade");
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${tile.id}] ${tile.name}</h1>
              <p>type: ${tile.type}</p>
              <img src="${tile.img}" alt="${tile.name}" width="300">
              <p>Welcome Back</p>
              <button id='cancel-btn'>close</button>`;
        const cancelBtn = document.querySelector("#cancel-btn");
        cancelBtn.onclick = () => {
          popup.parentElement.style.display = "none";
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
            players.forEach((player) => {
              if (player.id == tile.owner) {
                player.setMoney(tile.rent[tile.lv]);
                console.log(
                  currentPlayer.name,
                  " pay ",
                  tile.rent[tile.lv],
                  "G to ",
                  players[tile.owner].name
                );
              }
            });
            popup.parentElement.style.display = "none";
            allUpdate();
          } else {
            currentPlayer.removePlayer("bankrupt");
          }
        };
      }
    } else if (tile.type === "treasure") {
      console.log(currentPlayer.name + ` found a treasure!`);
      popup.parentElement.style.display = "flex";
      let draw = Math.floor(Math.random() * treasures.length);
      let card = treasures[draw];
      console.log(card, draw);

      popup.innerHTML = `<h1>[${tile.id}] ${tile.name}</h1>
            <p>Treasure: ${card.name}</p>
            <p>${card.desc}</p>
            <img src="${card.img}" alt="${card.name}" width="300"><br>
            <button id='draw-btn'>Take a treasure</button>`;

      const drawBtn = document.querySelector("#draw-btn");
      drawBtn.onclick = () => {
        card.effect(currentPlayer);
        allUpdate();
        popup.parentElement.style.display = "none";
      };
    } else if (tile.type === "event") {
      console.log(currentPlayer.name + ` found a event!`);
      popup.parentElement.style.display = "flex";
      let draw = Math.floor(Math.random() * events.length);
      let card = events[draw];
      console.log(card, draw);
      popup.innerHTML = `<h1>[${tile.id}] ${tile.name}</h1>
            <p>Event: ${card.name}</p>
            <p>${card.desc}</p>
            <img src="${card.img}" alt="${card.name}" width="300"><br>
            <button id='draw-btn'>close</button>`;

      const drawBtn = document.querySelector("#draw-btn");
      drawBtn.onclick = () => {
        card.effect(currentPlayer);
        allUpdate();
        popup.parentElement.style.display = "none";
      };
    } else if (tile.type === "stop") {
      console.log(currentPlayer.name + ` found Orc Village.`);
      popup.parentElement.style.display = "flex";
      popup.innerHTML = `<h1>[${tile.id}] ${tile.name}</h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300"><br>
            <p>You got captured by Orc Army!</p>
            <p><strong>Skip 2 turns</strong></p>
            <button id='cancel-btn'>close</button>`;
      const cancelBtn = document.querySelector("#cancel-btn");
      cancelBtn.onclick = () => {
        currentPlayer.skip(2);
        popup.parentElement.style.display = "none";
      };
    } else if (tile.type === "teleport") {
      console.log(currentPlayer.name + ` found Ancient Portal Gate.`);
      popup.parentElement.style.display = "flex";
      popup.innerHTML = `<h1>[${tile.id}] ${tile.name}</h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300"><br>
            <label for="tiles">Choose your destination:</label>
        <select name="tiles" id="tele-tiles">
        </select>
        <br>
        <br>
            <button id='tele-btn'>Teleport 500G</button>
            <button id='cancel-btn'>close</button>`;

      const cancelBtn = document.querySelector("#cancel-btn");
      cancelBtn.onclick = () => {
        popup.parentElement.style.display = "none";
      };
      const teleBtn = document.querySelector("#tele-btn");
      const destination = document.querySelector("#tele-tiles");
      tiles.forEach((tile) => {
        const newTile = document.createElement("option");
        newTile.value = tile.id;
        newTile.innerText = `[${tile.id}]  ${tile.name}`;
        destination.appendChild(newTile);
      });

      teleBtn.onclick = () => {
        if (currentPlayer.setMoney(-500)) {
          currentPlayer.moveTo(destination.value);

          popup.parentElement.style.display = "none";
          allUpdate();
          setTimeout(
            () => checkTile(currentPlayer, tiles[currentPlayer.position]),
            1000
          );
        } else {
          currentPlayer.removePlayer("bankrupt");
        }
      };
    } else if (tile.type === "tostop") {
      console.log(currentPlayer.name + ` found Orc Army`);
      popup.parentElement.style.display = "flex";
      popup.innerHTML = `<h1>[${tile.id}] ${tile.name}</h1>
            <p>type: ${tile.type}</p>
            <img src="${tile.img}" alt="${tile.name}" width="300"><br>
            <p>You got captured by Orc Army!</p>
            <button id='cancel-btn'>Go to Orc Village</button>`;
      const cancelBtn = document.querySelector("#cancel-btn");
      cancelBtn.onclick = () => {
        popup.parentElement.style.display = "none";
        currentPlayer.moveTo(9);
        setTimeout(
          () => checkTile(currentPlayer, tiles[currentPlayer.position]),
          1000
        );
      };
    } else if (tile.type === "tax") {
      console.log("time to pay bill");
      popup.parentElement.style.display = "flex";
      popup.innerHTML = `<h1>[${tile.id}] ${tile.name} </h1>
              <p>type: ${tile.type}</p>
              <img src="${tile.img}" alt="${tile.name}" width="300">
              <p>You move too fast!</p>
              <button id='rent-btn'>pay 200G</button>`;
      const rentBtn = document.querySelector("#rent-btn");
      rentBtn.onclick = () => {
        if (currentPlayer.setMoney(-200)) {
          popup.parentElement.style.display = "none";
          allUpdate();
        } else {
          currentPlayer.removePlayer("bankrupt");
        }
      };
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
  tiles.forEach((tile) => {
    tile.element.style.background = tile.color;
  });
}

function endGame(reason = "Last man standing.") {
  popup.parentElement.style.display = "flex";
  popup.innerHTML = `<h1>${players[0].name} is Winner.</h1>
              <p> ${reason}</p>
              <button id='cancel-btn'>close</button>`;
  const cancelBtn = document.querySelector("#cancel-btn");
  cancelBtn.onclick = () => {
    popup.parentElement.style.display = "none";
    buttonRoll.style.display = "none";
    buttonEnd.style.display = "none";
  };
}

function rolls() {
  turn === players.length ? (turn = 0) : (turn = turn);
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  let currentPlayer = players[turn];
  if (players.length > 1) {
    // const dice = dice1 + dice2;
    const dice = 18; //for test
    dice1Element.style.backgroundImage = `url("./src/images/dice/dice-six-faces-${diceFaces[dice1]}.png")`;
    dice2Element.style.backgroundImage = `url("./src/images/dice/dice-six-faces-${diceFaces[dice2]}.png")`;

    if (currentPlayer.skipTurn > 0) {
      currentPlayer.skip(-1);

      console.log(
        currentPlayer.name,
        " has to wait for" + currentPlayer.skipTurn + " turns."
      );
      buttonRoll.style.display = "none";
      setTimeout(() => {
        buttonEnd.style.display = "block";
      }, 1200);
    } else {
      console.log(currentPlayer.name + " in game");
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
    endGame();
  }
}

function endTurn() {
  buttonEnd.style.display = "none";
  setTimeout(() => {
    buttonRoll.style.display = "block";
  }, 200);
  turn < players.length - 1 ? (turn += 1) : (turn = 0);
  console.log("Turn ended.");
  console.log("========================================");
  console.log(players[turn].name + "'s Turn.");
  playerTurn.innerHTML = players[turn].name + "'s Turn.";
}

allUpdate();

playerTurn.innerHTML = players[turn].name + "'s turn";
buttonRoll.onclick = () => rolls();
buttonEnd.onclick = () => endTurn();
