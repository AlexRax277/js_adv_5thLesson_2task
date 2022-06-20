import Character from './Character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
