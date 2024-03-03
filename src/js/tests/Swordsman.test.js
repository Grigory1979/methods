import Swordsman from '../Swordsman';

test('should create Character for type "Swordsman"', () => {
  const result = new Swordsman('Swordsman');

  expect(result).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});