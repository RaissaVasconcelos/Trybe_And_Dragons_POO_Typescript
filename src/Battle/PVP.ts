import Battle from './Battle';
import Character from '../Character';

export default class PVP extends Battle {
  constructor(private player1: Character, private player2: Character) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints !== -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
      if (this.player2.lifePoints === -1) break;
    }
    return super.fight();
  }
}