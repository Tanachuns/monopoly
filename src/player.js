//Player
const playerContrainer = document.querySelector(".player-contrainer");
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
    this.detailsElement.innerHTML = `
        <h2>${this.name}</h2>
        <p>Money : ${this.money}</p>
        <p>Position : [${this.position}]</p>
        <div class="asset">
            <p>Assets: </p>
            <ul>
                <li>[1] land 1 </li>
            </ul>
        </div>`;
    playerContrainer.appendChild(this.detailsElement);
    console.log(this.detailsElement);
  }
  update() {
    this.detailsElement.innerHTML = `
        <h2>${this.name}</h2>
        <p>Money : ${this.money}</p>
        <p>Position : [${this.position}]</p>
        <div class="asset">
            <p>Assets: </p>
            <ul>
                <li>[1] land 1 </li>
            </ul>
        </div>`;
  }
  setMoney(amount) {
    this.money += amount;
    this.update();
  }

  positionCheck() {
    const currentTile = tilesData[this.position];
    if (currentTile.type === "normal") {
      if ((currentTile.owner = "")) {
        this.setMoney(currentTile.rent[currentTile.lv] * -1);
        console.log(
          "pay rent " +
            currentTile.rent[currentTile.lv] +
            " to " +
            currentTile.owner.name
        );
      } else {
      }
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
    this.positionCheck();
    this.update();
    console.log(this.name, "rolls ", dice, "then move to", this.position);
  }
}
