import checkStatus from '../app';

test('should show color health', () => {
  const result = checkStatus({
    name: 'Маг',
    health: 90,
  });

  expect(result).toBe('healthy');
});

test('should show color health', () => {
  const result = checkStatus({
    name: 'Маг',
    health: 40,
  });

  expect(result).toBe('wounded');
});

test('should show color health', () => {
  const result = checkStatus({
    name: 'Маг',
    health: 10,
  });

  expect(result).toBe('critical');
});
