import createUsers from '../app';

const types = [
  ['Bowerman', 25, 25],
  ['Swordsman', 40, 10],
  ['Magician', 10, 40],
  ['Daemon', 10, 40],
  ['Undead', 25, 25],
  ['Zombie', 40, 10],
];

test('should create array usersNames for seven names', () => {
  const result = createUsers();

  const expected = types.map(([type, attack, defence]) => ({
    name: type,
    type,
    health: 100,
    level: 1,
    attack,
    defence,
  }));

  expect(result).toEqual(expected);
});