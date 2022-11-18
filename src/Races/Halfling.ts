import Race from './Race';

export default class Halfling extends Race {
  static instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instance += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}