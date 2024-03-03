import Undead from '../Undead';

test('should create Character for type Undead', () => {
  const result = new Undead('Undead');

  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});