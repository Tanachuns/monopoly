class Card {
  constructor(name, desc, img, effect) {
    this.name = name;
    this.img = img;
    this.desc = desc;
    this.effect = effect;
  }
}

const treasures = [];
const events = [];

treasures.push(
  new Card(
    "Gold Bag",
    "It has 100G inside.",
    "https://i.pinimg.com/736x/da/66/f2/da66f27bc6fe8cf1f06433830c85e225.jpg",
    function (player) {
      player.setMoney(100);
    }
  )
);

treasures.push(
  new Card(
    "Witch's Wand",
    "You can sell it! (1000G)",
    "https://static.wikia.nocookie.net/ojamajowitchling/images/6/6d/PeperutoPoron.png",
    function (player) {
      player.setMoney(1000);
    }
  )
);

events.push(
  new Card(
    "Waylay",
    "You got robbed.(-100G)",
    "https://gwent.pro/img/721-big.jpg",
    function (player) {
      player.setMoney(-100);
    }
  )
);