import Race from './Race';

export default class Elf extends Race {
  static instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}