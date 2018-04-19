class Player {
  constructor(name='Вы') {
    this.name = name;
    this.cardVisible = true;
    this.cards = [];
    this.active = true;
  }

  getCards(cardsStack) { // пока карт меньше cardsStackSize, берём карты из колоды
    while (this.cards.length < Player.cardsStackSize && cardsStack.length > 0) {
      this.cards.push(cardsStack.shift())
    }
    console.log(cardsStack.length);
  }

  setCard() {

  }

}

Player.cardsStackSize = 6;

class PlayerAi extends Player {
  constructor(name='computer') {
    super(name);
    this.ai = true;
    this.cardVisible = false;
  }

  calcMove() {

  }

}
