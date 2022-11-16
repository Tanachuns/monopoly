//Player
const playerContrainer = document.querySelector(".player-contrainer");
const popup = document.querySelector(".popup");

class Player {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.money = 1500;
    this.position = 0;
    this.assets = [];
    this.isPlaying = true;

    //create token
    this.tokenElement = document.createElement("div");
    this.tokenElement.className = "player-token";
    this.tokenElement.style.backgroundImage = `url("../src/images/token.png")`;
    this.tokenElement.style.borderColor = color;
    tiles[this.position].element.appendChild(this.tokenElement);
    // console.log(this.tokenElement);

    //create details
    this.detailsElement = document.createElement("div");
    this.detailsElement.className = "player-details";
    this.detailsElement.style.borderColor = this.color;
    let assetsHtml = "";
    this.detailsElement.innerHTML = `
        <h2>${this.name}</h2>
        <p>Money : ${this.money}</p>
        <p>Position : [${this.position}]</p>
        <div class="asset">
            <p>Assets: </p>
            <ul>
                ${assetsHtml}
            </ul>
        </div>`;
    playerContrainer.appendChild(this.detailsElement);
    // console.log(this.detailsElement);
  }
  update() {
    let assetsHtml = "";
    this.assets.forEach((item) => {
      assetsHtml += `<li>[${tiles[item].id}] ${tiles[item].name}</li>`;
    });
    this.detailsElement.innerHTML = `
        <h2>${this.name}</h2>
        <p>Money : ${this.money}</p>
        <p>Position : [${this.position}]</p>
        <div class="asset">
            <p>Assets: </p>
            <ul>
                ${assetsHtml}    
            </ul>
        </div>`;
    console.log("player's details updated.");
  }
  moveByDice(dice) {
    if (this.position + dice > 3) {
      // if (this.position + dice > 4) {
      tiles[this.position + dice - 4].element.appendChild(this.tokenElement);
      this.position = this.position + dice - 4;
      // this.position = this.position + dice - 5;
    } else {
      tiles[this.position + dice].element.appendChild(this.tokenElement);
      this.position += dice;
    }
    console.log(this.name, "rolls ", dice, "then move to", this.position);
  }
  moveTo(tile) {}
  toggleSkip() {
    this.isPlaying = !this.isPlaying;
  }
  setMoney(amount) {
    if (this.money + amount < 0) {
      return false;
    } else {
      this.money += amount;
      return true;
    }
  }

  addAsset(asset) {
    this.assets.push(asset);
    asset.owner = players[players.indexOf(this)];
  }

  removeAsset(asset) {
    this.assets = this.assets.filter((item) => item.id !== asset.id);
  }

  removePlayer(reason) {
    popup.parentElement.style.display = "flex";
    popup.innerHTML = `<h1>${this.name} is Over.</h1>
            <p>reason: ${reason}</p>
              <button id='cancel-btn'>close</button>`;
    const cancelBtn = document.querySelector("#cancel-btn");
    cancelBtn.onclick = () => {
      popup.parentElement.style.display = "none";
    };
    players = players.filter((player) => player !== this);
    this.position = 0;
    this.tokenElement.remove();
    this.detailsElement.remove();
    tiles.forEach((tile) => {
      if (tile.owner == this.id) {
        tile.owner = "";
        tile.setColor("gray");
      }
    });
    console.log(this.name, " is out!");
  }
  // positionCheck() {
  //   const tile = tilesData[this.position];
  //   console.log(tile);
  //   if (tile.type === "normal") {
  //     console.log(tile.owner);
  //     if (tile.owner === "") {
  //       console.log("no owner");
  //       popup.parentElement.style.display = "flex";
  //       popup.innerHTML = `<h1>[${tile.id}] ${tile.name} </h1>
  //       <p>type: ${tile.type}</p>
  //       <img src="${tile.img}" alt="${tile.name}" width="300">
  //       <p>rent : ${tile.rent[tile.lv]} G</p>
  //       <button id='buy-btn'>buy for ${tile.price} G</button>
  //       <button id='cancel-btn'>close</button>`;
  //       const cancelBtn = document.querySelector("#cancel-btn");
  //       cancelBtn.onclick = () => {
  //         popup.parentElement.style.display = "none";
  //       };
  //       const buyBtn = document.querySelector("#buy-btn");
  //       buyBtn.onclick = () => {
  //         this.setMoney(-tile.price);
  //         this.asset.push(tile.id);
  //         tile.owner = players.indexOf(this);
  //         tiles[tile.id].style.background = this.color;
  //         console.log(this.asset, tile.owner);
  //         popup.parentElement.style.display = "none";
  //         this.update();
  //       };
  //     } else if (tile.owner == players.indexOf(this)) {
  //       console.log("time to upgrade");
  //       popup.parentElement.style.display = "flex";
  //       popup.innerHTML = `<h1>[${tile.id}] ${tile.name} </h1>
  //       <p>type: ${tile.type}</p>
  //       <img src="${tile.img}" alt="${tile.name}" width="300">
  //       <p>rent : ${tile.rent[tile.lv]} G</p>
  //       <button id='upgrade-btn'>upgrade for ${tile.upgrade} G</button>
  //       <button id='cancel-btn'>close</button>`;
  //       const cancelBtn = document.querySelector("#cancel-btn");
  //       cancelBtn.onclick = () => {
  //         popup.parentElement.style.display = "none";
  //       };
  //       const upgradeBtn = document.querySelector("#upgrade-btn");
  //       upgradeBtn.onclick = () => {
  //         this.setMoney(-tile.upgrade);
  //         tile.lv += 1;
  //         popup.parentElement.style.display = "none";
  //         this.update();
  //       };
  //     } else {
  //       popup.parentElement.style.display = "flex";
  //       popup.innerHTML = `<h1>[${tile.id}] ${tile.name} </h1>
  //       <p>type: ${tile.type}</p>
  //       <p>Owner: ${players[tile.owner].name}</p>
  //       <img src="${tile.img}" alt="${tile.name}" width="300">
  //       <p>rent : ${tile.rent[tile.lv]} G</p>
  //       <button id='rent-btn'>rent for ${
  //         tile.rent[tile.lv]
  //       } G</button>
  //       <button id='cancel-btn'>close</button>`;
  //       const cancelBtn = document.querySelector("#cancel-btn");
  //       cancelBtn.onclick = () => {
  //         popup.parentElement.style.display = "none";
  //       };
  //       const rentBtn = document.querySelector("#rent-btn");
  //       rentBtn.onclick = () => {
  //         console.log("rent");
  //         this.setMoney(tile.rent[tile.lv] * -1);
  //         players[tile.owner].setMoney(tile.rent[tile.lv]);
  //         console.log(
  //           "pay rent " +
  //             tile.rent[tile.lv] +
  //             " to " +
  //             players[tile.owner].name
  //         );
  //         popup.parentElement.style.display = "none";
  //         this.update();
  //       };
  //     }
  //   } else if (tile.type === "spacial") {
  //     console.log("Temple!");
  //   }
  // }
}
