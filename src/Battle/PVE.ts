import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  static _winner = 0;

  constructor(
    private player1: Fighter,
    private monster: (Fighter | SimpleFighter)[],
  ) {
    super(player1);
  }

  static atackPlayer(
    player: Fighter,
    monster1: SimpleFighter | Fighter,
  ): void {
    while (player.lifePoints !== -1) {
      player.attack(monster1);
      monster1.attack(player);
      if (monster1.lifePoints === -1) break;
    }
  }

  fight(): number {
    this.monster.forEach((elem) => {
      PVE.atackPlayer(this.player1, elem);
    });
    return super.fight();
  }
}