class Tile {
  constructor(id, name /*, element*/, type, img, price = 0, rent = 0) {
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
    tiles[this.id].element.style.background = this.color;
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
    "South Mountrain",
    "normal",
    "https://img.freepik.com/premium-photo/artwork-is-fabulous-landscape-mountains-rocks-fantasy-sketch-amazing-nature-artwork-sketch-beautiful-mountain-peaks-illustration_86390-6638.jpg?",
    60,
    [2, 10, 120, 250]
  )
);
tiles.push(
  new Tile(
    5,
    "Old Man's River",
    "normal",
    "https://i.pinimg.com/originals/00/87/fa/0087fa0f28c55867b07939c49b030e0d.jpg",
    100,
    [6, 30, 270, 550]
  )
);
tiles.push(
  new Tile(
    6,
    "South Waterfall",
    "normal",
    "https://www.wallpaperflare.com/static/429/451/785/fantasy-art-waterfalls-fantasy-wallpaper.jpg",
    100,
    [6, 30, 270, 550]
  )
);
tiles.push(
  new Tile(
    7,
    "Old Man's Treasure.",
    "Treasure",
    "https://i.pinimg.com/originals/fd/62/05/fd620538842fc20e805668c9ad10dc0e.jpg"
  )
);

tiles.push(
  new Tile(
    8,
    "South Plains",
    "normal",
    "https://i.pinimg.com/originals/c6/36/15/c63615d0623ee72fd86d963d370ee2b5.jpg",
    120,
    [8, 40, 100, 600]
  )
);
tiles.push(
  new Tile(
    9,
    "Orc Village",
    "Stop",
    "https://i.pinimg.com/originals/91/30/4a/91304ac2aadab9cf92f95b2488c8cd97.jpg"
  )
);

tiles.push(
  new Tile(
    10,
    "Arcisk Road",
    "normal",
    "https://i.pinimg.com/originals/94/99/33/94993389c1a6526b02981a956e6ff023.jpg",
    140,
    [10, 50, 150, 750]
  )
);

tiles.push(
  new Tile(
    11,
    "Orc Mine",
    "normal",
    "https://cdnb.artstation.com/p/assets/images/images/002/023/259/large/-1.jpg",
    140,
    [10, 50, 150, 750]
  )
);
tiles.push(
  new Tile(
    12,
    "Orc Mountrain",
    "normal",
    "https://i.pinimg.com/564x/74/0e/45/740e459aab2a5e075fd9524a7ebf974b.jpg",
    160,
    [12, 60, 180, 900]
  )
);
tiles.push(
  new Tile(
    13,
    "Orc River",
    "normal",
    "https://static.wikia.nocookie.net/willowdale/images/7/7c/Vale_village.jpg",
    160,
    [12, 60, 180, 900]
  )
);
tiles.push(
  new Tile(
    14,
    "Orc Lord's Raid.",
    "event",
    "https://images.squarespace-cdn.com/content/v1/586fb9819f7456494bb601c3/1658750939224-X65ICQI94VRESVQASX8C/158335_1920x1342.jpg?"
  )
);
tiles.push(
  new Tile(
    15,
    "Orc Waterfall",
    "normal",
    "https://live.cdn.renderosity.com/gallery/items/2278830/images/1357243/6f5135ba50e7f266230d8a17e38a6097_original.jpg",
    180,
    [14, 70, 200, 950]
  )
);
tiles.push(
  new Tile(
    16,
    "The Temple of the West.",
    "spacial",
    "https://static.wikia.nocookie.net/starwars/images/f/fc/Dark_Temple_infobox.png/revision/latest?cb=20150822184915",
    100,
    [100]
  )
);

tiles.push(
  new Tile(
    17,
    "Orc Plains",
    "normal",
    "https://i.pinimg.com/originals/44/bd/33/44bd330733fa01950a3f16f15be8c3e9.jpg",
    180,
    [14, 70, 200, 950]
  )
);
tiles.push(
  new Tile(
    18,
    "Portal Gate",
    "teleport",
    "https://i0.wp.com/i.pinimg.com/originals/ca/ff/30/caff3089909c9ea1becbe7347404c616.jpg"
  )
);
tiles.push(
  new Tile(
    19,
    "Itrept Road",
    "normal",
    "https://c4.wallpaperflare.com/wallpaper/861/248/943/cyberpunk-city-street-futuristic-city-art-wallpaper-preview.jpg",
    220,
    [18, 90, 250, 1050]
  )
);

tiles.push(
  new Tile(
    20,
    "The Temple of the North.",
    "spacial",
    "https://static.wikia.nocookie.net/starwars/images/f/fc/Dark_Temple_infobox.png/revision/latest?cb=20150822184915",
    100,
    [100]
  )
);

tiles.push(
  new Tile(
    21,
    "Bysic Mine",
    "normal",
    "https://www.mtgnexus.com/img/gallery/1275-dwarven-mine.jpg",
    220,
    [18, 90, 250, 1050]
  )
);

tiles.push(
  new Tile(
    22,
    "Binteac's Treasure.",
    "Treasure",
    "https://i.pinimg.com/originals/3d/43/84/3d4384f2ae313b1fd0c495fe92f9bdf8.jpg"
  )
);
tiles.push(
  new Tile(
    23,
    "Bysic Mountrain",
    "normal",
    "https://c4.wallpaperflare.com/wallpaper/575/832/835/landscape-mountains-artwork-digital-art-wallpaper-preview.jpg",
    260,
    [22, 110, 330, 1150]
  )
);
tiles.push(
  new Tile(
    24,
    "Old Lumberyard",
    "normal",
    "https://i.pinimg.com/originals/0d/b2/15/0db21565801ca384768fa16bcb31e8ba.jpg",
    260,
    [22, 110, 330, 1150]
  )
);
tiles.push(
  new Tile(
    25,
    "Dragon's Waterfall",
    "normal",
    "https://www.wallpaperup.com/uploads/wallpapers/2013/01/19/30268/7ee72bd3d49da25da2004732cb57b51e-700.jpg",
    280,
    [24, 120, 360, 1200]
  )
);
tiles.push(
  new Tile(
    26,
    "North Plains",
    "normal",
    "https://gameranx.com/wp-content/uploads/2022/07/fantasy-games-granblue-fantasy-relink-e1658573907930.jpg",
    280,
    [24, 120, 360, 1200]
  )
);
tiles.push(
  new Tile(
    27,
    "Orc Caravan",
    "tostop",
    "https://i0.wp.com/dash28.org/wp-content/uploads/2020/05/image6.jpg"
  )
);
tiles.push(
  new Tile(
    28,
    "The Temple of the East.",
    "spacial",
    "https://static.wikia.nocookie.net/starwars/images/f/fc/Dark_Temple_infobox.png/revision/latest?cb=20150822184915",
    100,
    [100]
  )
);
tiles.push(
  new Tile(
    29,
    "Ilir Road",
    "normal",
    "https://cdnb.artstation.com/p/assets/images/images/003/345/515/large/mustafa-ozkan-hallway2.jpg",
    300,
    [26, 130, 390, 1275]
  )
);
tiles.push(
  new Tile(
    30,
    "Mimanya Forest",
    "normal",
    "https://c4.wallpaperflare.com/wallpaper/538/692/943/elves-fence-forest-wolf-wallpaper-preview.jpg",
    300,
    [26, 130, 390, 1275]
  )
);
tiles.push(
  new Tile(
    31,
    "Elf's Treasure.",
    "treasure",
    "https://w0.peakpx.com/wallpaper/281/362/HD-wallpaper-treasury-art-fantasy-gold-treasure.jpg"
  )
);
tiles.push(
  new Tile(
    32,
    "Mimanya Forest",
    "normal",
    "https://c4.wallpaperflare.com/wallpaper/538/692/943/elves-fence-forest-wolf-wallpaper-preview.jpg",
    350,
    [35, 175, 500, 1500]
  )
);

tiles.push(
  new Tile(
    33,
    "Mimanya River",
    "normal",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hMfjc8WjN6JmXq-ajhiABJ7YYER0EKuIGg&usqp=CAU",
    350,
    [35, 175, 500, 1500]
  )
);
tiles.push(
  new Tile(
    34,
    "Speed Limit",
    "tax",
    "https://c4.wallpaperflare.com/wallpaper/637/206/385/road-girl-the-city-fantasy-wallpaper-preview.jpg"
  )
);
tiles.push(
  new Tile(
    35,
    "Dragon Nest",
    "normal",
    "https://cdnb.artstation.com/p/assets/covers/images/020/233/133/large/davey-baker-bf88134b-2ab3-4791-be28-8b190ab7892d.jpg",
    400,
    [50, 200, 600, 2000]
  )
);
