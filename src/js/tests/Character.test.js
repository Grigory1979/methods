import Character from '../Character';

// Наборы недействительных параметров
const invalidParams = [
  [150, 'Zombie', 'Передано некорректное значение имени персонажа'],
  ['A', 'Zombie', 'Передано некорректное значение имени персонажа'],
  [
    'ElevenLetters',
    'Zombie',
    'Передано некорректное значение имени персонажа',
  ],
  ['Zombie', 'Bo', 'Передано некорректное значение типа персонажа'],
  ['Zombie', undefined, 'Передано некорректное значение типа персонажа'],
  ['Zombie', 150, 'Передано некорректное значение типа персонажа'],
];

test.each(invalidParams)(
  'should throw Error for invalid parameters %p',
  (name, type, errorMessage) => {
    expect(() => new Character(name, type)).toThrow(errorMessage);
  },
);

test('should create Character for name "String"', () => {
  const result = new Character('String', 'Zombie');

  expect(result).toEqual({
    name: 'String',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('should be Error for health <= 0 and level up', () => {
  expect(() => {
    const zombie = new Character('Zombie', 'Zombie');
    zombie.attack = 25;
    zombie.defence = 25;
    zombie.damage(135); // health drops to 0
    zombie.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('should not decrease health when the character is already dead', () => {
  const deadZombie = new Character('Zombie', 'Zombie');
  deadZombie.attack = 25;
  deadZombie.defence = 25;
  deadZombie.health = 0; // explicitly set the character's health to 0
  deadZombie.damage(50);
  expect(deadZombie.health).toBe(0);
});

test('should level, attack, defence, health up to 2, 30, 30, 100', () => {
  const user = new Character('String', 'Zombie');
  user.attack = 25;
  user.defence = 25;
  user.levelUp();

  expect(user).toEqual({
    name: 'String',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('should health down to 97', () => {
  const user = new Character('String', 'Zombie');
  user.attack = 25;
  user.defence = 25;
  user.damage(4);

  expect(user).toEqual({
    name: 'String',
    type: 'Zombie',
    health: 97,
    level: 1,
    attack: 25,
    defence: 25,
  });
});