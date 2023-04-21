/**
 * Generates a UUIDv4 compatible string.
 */
export function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getRandomNumberBetween(fromInclusive: number, toInclusive: number, decimals: number = 0): number {
  const number = Math.floor(Math.random() * (toInclusive - fromInclusive + 1) + fromInclusive);
  return parseFloat(number.toFixed(decimals));
}
