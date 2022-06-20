import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('throw error Character', () => {
  expect(() => { new Character('P', 'Zombie'); }).toThrow('Incorrect data-input!');
});

test.each([
  ['Paul', 'Bowman', Bowman, {
    name: 'Paul', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Hue', 'Swordsman', Swordsman, {
    name: 'Hue', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Carl', 'Magician', Magician, {
    name: 'Carl', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Mickey', 'Daemon', Daemon, {
    name: 'Mickey', type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Robert', 'Undead', Undead, {
    name: 'Robert', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Nick', 'Zombie', Zombie, {
    name: 'Nick', type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40,
  }],
])('basic test', (name, type, SubClass, expectedResult) => {
  const result = new SubClass(name, type);
  expect(result).toEqual(expectedResult);
});

test('test methods', () => {
  const user = new Magician('Bobby', 'Magician');
  user.levelup();
  user.damage(25);
  const userData = {
    name: 'Bobby',
    type: 'Magician',
    health: 87,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(user).toEqual(userData);
});

test('throw health_error in damage_method', () => {
  const pip = new Character('Pip', 'Zombie');
  pip.health = 0;
  expect(() => {
    pip.damage(200);
  }).toThrow('health_error');
});

test('throw health_error in levelup_method', () => {
  const pip = new Character('Pip', 'Zombie');
  pip.health = 0;
  expect(() => {
    pip.levelup();
  }).toThrow('health_error');
});
