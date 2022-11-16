## Project Choice (Tell us which project you're doing!)

- [ ] Flash Cards
- [ ] Trivia (Self-scoring)
- [ ] Spaceman
- [ ] Tower of Hanoi
- [ ] Simon
- [x] Monopoly

## Project Description

> A short description of your game.

**Win Conditions**

- Force other players into bankruptcy(Player can't pay to other player or bank ).
- Collected all Spacial tiles(4).

**Setup**

- Set player's money to 1500G.
- Set player token start at start tile(0).

**Gameplay**

1.  Roll the dice.
2.  Move token to target tile.
3.  Check tile's condition
    - Start tile(1) : Pass the Start tile get 200G.
    - Normal tile(23) :
      - buying property : Player can buy currentPlayer tile or if you already own currentPlayer tile you can buy house > hotel.
      - paying rent : the owner collects rent from you and you can buy currentPlayer tile with the new price.
    - Spacial tile(4) : Player can buy currentPlayer tile and get paid for rent from other player. #wincon
    - Card tiles(8) : Player draw a card from the deck.
    - Stop tile(1) : Skip for 2 turns.
    - Teleport tile(1) : player can choose any tile to go.
    - Go to stop tile(1) : Move player to Stop tile.
    - Tax tile(1) : Pay tax 500G or go to stop tile.
4.  Check wincon .
5.  Next player turn.

## Wire Frames

> You can find Wire Frames at ./prop_images

## User Stories

- As a **Player** , I want to move my token, so that I click on rolls
  button.
- As a **Player** , I want to know about tile's information, so that I move my mouse over it
- As a **Player** , I want to buy a tile, so that I roll, move my token to it and it show modal and choice to buy or not.
- As a **Player** , I want to pay a rent, so that I roll, move my token to it and it show currentPlayer tile has own by -Player- then I click pay or bankrupt after I pay i can choose to buy it or not.
- As a **Player** , I want to draw a card, so that I roll, move my token to it and it show a card i drew.
- As a **Player** , I want to get out from Stop tile, so that I can wait 2 turns or pay 500G then roll the dice to move.
- As a **Player** , I want to move anywhere from Teleport tile, so that I move my token to the tile and it show modal that tells me I can select the tile to move and i click on tile then my token move to it.
- As a **Player** , I want to pay tax, so that I move my token to the tile and it show modal that tells me I need to pay a tax, It has 2 choice pay 500G or go to stop tile.
- As a **Player** , I want to get my salary, so that I move pass the start tile.

### MVP Goals

**Button - onClick**

- [x] get values from(1 or 2) dice(s)
- [x] move _#Token_ to the target _#Tile_
- [x] check tile's type and do the condition
- if Start tile => set player's money+= 200
- if normal tile => owned? modal: pay the rent (then buy or not): buy or not //still cant buy land from other
- if spacial tile => owned? modal: pay the rent (cant buy from others): buy or not
- if card tile => modal: draw a card => you got [lucky card name] => do the card function.
- if stop tile => modal: stop 2 turn => skip player 2 turn.
- if teleport tile => modal: choose where you want to go=>click the tile => move //click the tile changed select from dropdown.
- if go to stop tile => modal: go to stop => move to stop tile.
- if tax tile => modal: pay the tax? pay => -500G: go to stop tile;

- [x] next player

**Tile - mouseOver** > I changed it to onlick.

- [x] modal: show the tile's details. //

**teleport-tile-click**

- [x] modal: choose where you want to go.
- [x] move player's token

### Stretch Goals
