# monopoly

> Project Todo List : [click here](https://shorturl.at/iAN24)

A Fantasy Monopoly game on website.

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Tanachuns/monopoly/main/readme/img/screenshot.png)

## Technologies used

**Client:** HTML, CSS, JavaScript

## Installation

You don't need to install this game, it has two ways to play. 1. You can play it here : https://tanachuns.github.io/monopoly/ 2. clone this repository and open index.html

## User Stories And Gameplay

**Win Condition**

> As a **Player** , I want to win this game. So that I...

Be the Last Man Standing, So It has 2 ways :

1. The Others player are bankrupt (<u>Money is less than 0</u>).
2. You summon The Demon Lord (<u>Collect all temples</u>) and it kills Others.

**Elements**

- 36x Tiles
  - 1x Start
  - 23x Normal
  - 4x Spacial
  - 2x Treasure
  - 2x Event
  - 1x Stop
  -     1x Teleport
  - 1x Move to stop
  - 1x Tax
- Nx Player Token (3-4 is recommend.)
- 2x Treasure Cards (for Test)
- 2x Event Cards (for Test)

**Setup**

> As a **Player** , I want to play this game. So that I...

Click add player button to add player.

- Player start with
  - 1500G
  - Position [0]
  - 0 Asset

**Gameplay**
You need at least 2 players to play, Then click Start button to start the game .

> After I clicked Start the game as a **Player** , I want to move my token. So that I...

1. Game is start with Player 1.
2. Click Roll button to roll the dice.
3. Dice will show a value of each.
4. Player's token move to target tile.
5. Check the condition by tile's type.
6. Click End Turn then the next player's turn start.

**Tiles**

- _Start_ : Every time player pass this tile get 200G.
- _Normal_ : Player can buy this tile if it doesn't has owner.
- _Normal_ : Player need to pay rent if it has owner.
- _Normal_ : After pay rent player can buy this tile from owner with resale price (price\*1.7)
- _Spacial_ : Player can buy this tile if it doesn't has owner.
- _Spacial_ : If player collect all of spacial tiles he will summon The Demon Lord and win the game.
- _Spacial_ : Player need to pay rent if it has owner.
- _Treasure_ : Player draw a card from Treasure pile, And do the card effect.
- _Event_ : Player draw a card from Event pile, And do the card effect.
- _Stop_ : Player need to skip 2 turns.
- _Teleport_ : Player can pay 500G to go everywhere.
- _Move to stop_ : Move player to Stop tile.
- _Tax_ : Player need to pay 200G.

## Wireframes

**Board**
![Board](https://github.com/Tanachuns/monopoly/blob/main/proposal/prop_images/main.png?raw=true)

**Tile detail**
![Tile detail](https://github.com/Tanachuns/monopoly/blob/main/readme/img/tile_detail.png?raw=true)

**Player detail**
![Player detail](https://github.com/Tanachuns/monopoly/blob/main/proposal/prop_images/player%20details.png?raw=true)

## What's next

I have a plan to develop better version of this with..

1. More cards : As you see it has only 2 card for each pile, I will add more card and more effect, And when you click on card pile you will see the list of cards.
2. Better UI/UX : This board has a bad UI/UX so I will make it better and use my original images.
3. Real Multiplayer : I think I can use socket.io to make it multiplayer.

## Readme.md Requirement

- [x] An embedded screenshot of the app
- [x] List of the **Technologies used**
- [x] **Installation instructions**
- [x] Your **User stories** – who are your users, what do they want and why?
- [x] Your **Wireframes** – sketches of major views / interfaces in your application
- [x] Descriptions of any **Unsolved problems** or **major hurdles** you had to overcome
