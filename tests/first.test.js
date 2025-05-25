const sum = (a, b) => a +b;

test('suma 1 + 2 igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});