import Race from './Race';

export default class Orc extends Race {
  static instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instance += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}