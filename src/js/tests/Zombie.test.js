import Zombie from '../Zombie';

test('should create Character for type Zombie', () => {
  const result = new Zombie('Zombie');

  expect(result).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});