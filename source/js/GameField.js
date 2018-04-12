class GameField {
  constructor(options) {
    this.field = options.field;
    this.players = options.players;
    this.cardStack = this.shuffleCards(GameField.cards) // случайный порядок в массиве cards
  }

  addPlayers(player) {
    let arr = [];
    for (let i = 0; i < this.players; i++) {
      arr.push(player)
    }
    return arr;
  }

  dealCards() {

  }

  giveCard() {

  }

  clearField() {

  }

  endGame() {

  }

  shuffleCards(arr) {
    return arr.sort( () => Math.random() - 0.5);
  }

}

GameField.cards = ['c14', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'd14', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'h14', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 's14', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13'];
