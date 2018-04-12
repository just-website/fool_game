class Player {
  constructor(name='Вы') {
    this.name = name;
    this.cardVisible = true;
    this.cards = [];
    this.active = true;
  }

  getCard() {

  }

  setCard() {

  }

}

class PlayerAi extends Player {
  constructor(name='computer') {
    super(name);
    this.ai = true;
    this.cardVisible = false;
  }

  calcMove() {

  }

}
