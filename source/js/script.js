//помимо скрипта есть два класса Player и GameField
window.onload = function() {
  let gameField;
  const startPopup = document.querySelector('#start');
  const options = {};

  startPopup.querySelector('button').onclick = function() {
    options.players = startPopup.querySelector('select').value;
    options.field = document.querySelector('#gameField');
    startPopup.classList.remove('popup--active');
    gameField = new GameField(options);

    const players = gameField.addPlayers( new PlayerAi()); // может эту переменную сделать отдельным классом?
    players.unshift(new Player());

    console.log(players);

    // gameField.dealCards();
  }

}
