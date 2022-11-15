//Player
const playerContrainer = document.querySelector(".player-contrainer");
const popup = document.querySelector(".popup");

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.money = 1500;
    this.position = 0;
    this.asset = [];

    //create token
    this.tokenElement = document.createElement("div");
    this.tokenElement.className = "player-token";
    this.tokenElement.style.background = color;
    tiles[this.position].appendChild(this.tokenElement);
    console.log(this.tokenElement);

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
    console.log(this.detailsElement);
  }
  update() {
    let assetsHtml = "";
    this.asset.forEach((item) => {
      console.log(tiles[item].name);
      assetsHtml += `<li>[${tilesData[item].id}] ${tilesData[item].name}</li>`;
    });
    console.log(this.asset, assetsHtml);
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
  }
  setMoney(amount) {
    this.money += amount;
    this.update();
  }

  positionCheck() {
    const currentTile = tilesData[this.position];
    console.log(currentTile);
    if (currentTile.type === "normal") {
      console.log(currentTile.owner);
      if (currentTile.owner === "") {
        console.log("no owner");
        popup.parentElement.style.display = "flex";
        popup.innerHTML = `<h1>[${currentTile.id}] ${currentTile.name} </h1>
        <p>type: ${currentTile.type}</p>
        <img src="${currentTile.img}" alt="${currentTile.name}" width="300">
        <p>rent : ${currentTile.rent[currentTile.lv]} G</p>
        <button id='buy-btn'>buy for ${currentTile.price} G</button>
        <button id='cancel-btn'>close</button>`;
        const cancelBtn = document.querySelector("#cancel-btn");
        cancelBtn.onclick = () => {
          popup.parentElement.style.display = "none";
        };
        const buyBtn = document.querySelector("#buy-btn");
        buyBtn.onclick = () => {
          this.setMoney(-currentTile.price);
          this.asset.push(currentTile.id);
          currentTile.owner = players.indexOf(this);
          console.log(this.asset, currentTile.owner);
          popup.parentElement.style.display = "none";
          this.update();
        };
      } else if (currentTile.owner == players.indexOf(this)) {
        console.log("time to upgrade");
      } else {
        this.setMoney(currentTile.rent[currentTile.lv] * -1);
        players[currentTile.owner].setMoney(currentTile.rent[currentTile.lv]);
        console.log(
          "pay rent " +
            currentTile.rent[currentTile.lv] +
            " to " +
            players[currentTile.owner].name
        );
      }
    } else if (currentTile.type === "spacial") {
      console.log("Temple!");
    }
  }

  moveByDice(dice) {
    if (this.position + dice > 35) {
      tiles[this.position + dice - 36].appendChild(this.tokenElement);
      this.position = this.position + dice - 36;
    } else {
      tiles[this.position + dice].appendChild(this.tokenElement);
      this.position += dice;
    }
    console.log("position check");
    this.positionCheck();
    this.update();
    console.log(this.name, "rolls ", dice, "then move to", this.position);
  }
}
