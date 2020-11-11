class Player {

  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  //fetches the information of all the players under the player tab and saves it in all players
  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", function (data) {
      allPlayers = data.val();
    });
  }
}
