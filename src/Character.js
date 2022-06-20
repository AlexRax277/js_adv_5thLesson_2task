export default class Character {
  static #shortest_name = 2;

  static #longest_name = 10;

  static #types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  static #health_error = new Error('health_error');

  constructor(name, type) {
    this.name = name;
    this.type = type;

    if (this.name.length < Character.#shortest_name
      || name.length > Character.#longest_name
      || !Character.#types.includes(type)) {
      throw new Error('Incorrect data-input!');
    }
  }

  levelup() {
    if (this.health === 0) {
      throw Character.#health_error;
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw Character.#health_error;
    }
  }
}
