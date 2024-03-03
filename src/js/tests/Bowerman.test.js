import Bowerman from '../Bowerman';

test('should create Character for type Bowerman', () => {
  const result = new Bowerman('Bowerman');

  expect(result).toEqual({
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});