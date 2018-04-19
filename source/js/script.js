window.onload = function() {
  let gameField;
  const START_POPUP = document.querySelector('#start');
  const OPTIONS = {};

  START_POPUP.querySelector('button').onclick = function() {
    OPTIONS.playersCount = START_POPUP.querySelector('select').value;
    OPTIONS.field = document.querySelector('#gameField');
    START_POPUP.classList.remove('popup--active');
    gameField = new GameField(OPTIONS);

    const PLAYERS = gameField.addPlayers(PlayerAi); //добавляем игроков ПК
    PLAYERS.unshift(new Player()); // добавляем игрока
    gameField.dealCards(PLAYERS, 'getCards');
    gameField.showPlayers(PLAYERS);

    console.log(PLAYERS);
  }

}
