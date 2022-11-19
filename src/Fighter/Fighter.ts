import Energy from '../Energy';

export default interface Fighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  levelUp(): void;
}