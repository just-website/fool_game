class GameField {
  constructor(options) {
    this.field = options.field;
    this.playersCount = options.playersCount;
    this.cardStack = this.shuffleCards(GameField.cards) // случайный порядок в массиве cards
  }

  addPlayers(player) {
    let arr = [];
    for (let i = 0; i < this.playersCount; i++) {
      arr.push(new player())
    }
    return arr;
  }

  showPlayers(players) { //вот это быдлокод... проблема в том, что бы рассадить ai и игрока по своим местам
    let playersPosition = this.field.querySelectorAll('.hand');
    for (let i = 0; players.length; i++) {
      let player = players.pop();
      console.log(player);
      if (!player.ai) this.showCards(player.cards, playersPosition[2]); // у игрока жёстко задано место
      else if (i === 2) this.showCards(player.cards, playersPosition[++i]);
      else this.showCards(player.cards, playersPosition[i]);
    }
  }

  showCards(cards, position) {
    for (let i = 0; i < cards.length; i++) {
      let card = document.createElement('div');
      card.classList.add('hand__card');
      if (position.classList.contains('hand__player')) card.style.backgroundImage = 'url("img/Cards/' + cards[i] + '.png")';
      else card.setAttribute('data-visible', 'false');
      position.appendChild(card);
    }
  }

  dealCards(players, method) { // к каждому игроку применяем его метод
    players.forEach( (player) => player[method](this.cardStack) );
  }

  giveCard() {

  }

  clearField() {

  }

  endGame() {

  }

  shuffleCards(cardStack) {
    return cardStack.sort( () => Math.random() - 0.5);
  }

}

GameField.cards = ['c14', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'd14', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'h14', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 's14', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13'];
