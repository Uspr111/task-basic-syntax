export function romanToInteger(str) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    for (let index = 0; index < str.length; index++) {
        const value = values[str[index]];
        const nextValue = values[str[index + 1]];
        result += value < nextValue ? -value : value;
    }

    return result;
}
