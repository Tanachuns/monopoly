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
    this.skipTurn = 0;

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
    let spacial = 0;
    this.assets.forEach((item) => {
      assetsHtml += `<li>[${tiles[item].id}] ${tiles[item].name}</li>`;
      if (item === 3 || item === 16 || item === 20 || item === 28) {
        spacial += 1;
      }
    });
    spacial === 4
      ? endGame(this.name + " has summoned Demon Lord and Killed all of you.")
      : (spacial = 0);
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
    console.log("Board updated.");
  }
  moveByDice(dice) {
    if (this.position + dice > 35) {
      console.log(this.name + " passed start get 200G");
      this.setMoney(200);
      console.log(tiles[this.position + dice - 36]);
      // if (this.position + dice > 4) {
      tiles[this.position + dice - 36].element.appendChild(this.tokenElement);
      this.position = this.position + dice - 36;
      // this.position = this.position + dice - 5;
    } else {
      tiles[this.position + dice].element.appendChild(this.tokenElement);
      this.position += dice;
    }
    console.log(this.name, "rolls ", dice, "then move to", this.position);
  }
  moveTo(tileId) {
    if (tileId <= 18) {
      console.log(this.name + " passed start get 200G");
      this.setMoney(200);
    }
    tiles[tileId].element.appendChild(this.tokenElement);
    this.position = parseInt(tileId);
    console.log(this.name, " moved to ", this.position);
  }
  skip(turns) {
    this.skipTurn += turns;
  }
  setMoney(amount) {
    if (this.money + amount < 0) {
      return false;
    } else {
      this.money += amount;
      console.log(this.name + " " + amount);
      return true;
    }
  }

  addAsset(id) {
    this.assets.push(id);
    tiles[id].setOwner(this.id);
    tiles[id].setColor(this.color);
  }

  removeAsset(asset) {
    this.assets = this.assets.filter((item) => item.id !== asset.id);
  }

  removePlayer(reason) {
    popup.parentElement.style.display = "flex";
    popup.innerHTML = `<h1>${this.name} is Over.</h1>
            <p> ${reason}</p>
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
      if (tile.owner === this.id) {
        tile.owner = "";
        tile.lv = 0;
        tile.setColor("lightgray");
      }
    });
    console.log(this.name, " is out!");
  }
}
