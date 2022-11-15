class Tile {
  constructor(id, name /*, element*/, type, img, price, rent) {
    this.id = id;
    this.name = name;
    this.element = document.querySelector(`[id="${id}"]`);
    this.type = type;
    this.img = img;
    this.owner = "";
    this.price = price;
    this.reSale = this.price * 1.7;
    this.lv = 0;
    this.rent = rent;
    this.upgrade = this.price * 0.2;
  }
  setColor(color) {
    this.color = color;
  }
  setOwner(owner) {
    this.owner = owner;
  }
}

const tiles = [];
tiles.push(new Tile(0, "start", "start", "", "", 0, 0, 0, [], 0));

tiles.push(
  new Tile(
    1,
    "Mushroom Road",
    "normal",
    "https://i.ytimg.com/vi/LbKUB_HuKYY/maxresdefault.jpg",
    60,
    [2, 10, 120, 250]
  )
);
tiles.push(
  new Tile(
    2,
    "Yatsu Farm",
    "normal",
    "https://cdna.artstation.com/p/assets/images/images/000/354/594/large/rachel-noy-rachel-noy-japanese-village-scene-udk.jpg",
    60,
    [2, 10, 120, 250]
  )
);

tiles.push(
  new Tile(
    3,
    "The Temple of the South.",
    "spacial",
    "https://static.wikia.nocookie.net/starwars/images/f/fc/Dark_Temple_infobox.png/revision/latest?cb=20150822184915",
    100,
    [100]
  )
);
tiles.push(
  new Tile(
    4,
    "South Mount.",
    "normal",
    "https://img.freepik.com/premium-photo/artwork-is-fabulous-landscape-mountains-rocks-fantasy-sketch-amazing-nature-artwork-sketch-beautiful-mountain-peaks-illustration_86390-6638.jpg?",
    60,
    [2, 10, 120, 250]
  )
);
tiles.push(
  new Tile(
    5,
    "Old man's River",
    "normal",
    "https://i.pinimg.com/originals/00/87/fa/0087fa0f28c55867b07939c49b030e0d.jpg",
    100,
    [6, 30, 270, 550]
  )
);
