import Magician from '../Magician';

test('should create Magician for type "Magician"', () => {
  const result = new Magician('Magician');

  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});