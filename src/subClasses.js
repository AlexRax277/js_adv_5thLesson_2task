import Character from './mainClass';

export default class SubCharacter extends Character {
  static #health = 100;

  static #level = 1;

  static #attack = 0;

  static #defence = 0;

  static #foo = (typeofsubclass) => {
    if (typeofsubclass === 'Bowman') {
      SubCharacter.#attack = 25;
      SubCharacter.#defence = 25;
    } else if (typeofsubclass === 'Swordsman') {
      SubCharacter.#attack = 40;
      SubCharacter.#defence = 10;
    } else if (typeofsubclass === 'Magician') {
      SubCharacter.#attack = 10;
      SubCharacter.#defence = 40;
    } else if (typeofsubclass === 'Daemon') {
      SubCharacter.#attack = 25;
      SubCharacter.#defence = 25;
    } else if (typeofsubclass === 'Undead') {
      SubCharacter.#attack = 40;
      SubCharacter.#defence = 10;
    } else {
      SubCharacter.#attack = 10;
      SubCharacter.#defence = 40;
    }
    return { attack: SubCharacter.#attack, defence: SubCharacter.#defence };
  };

  constructor(name, type) {
    super(name, type);
    this.health = SubCharacter.#health;
    this.level = SubCharacter.#level;
    this.attack = SubCharacter.#foo(this.type).attack;
    this.defence = SubCharacter.#foo(this.type).defence;
  }
}
