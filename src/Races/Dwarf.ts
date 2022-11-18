import Race from './Race';

export default class Dwarf extends Race {
  static instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}