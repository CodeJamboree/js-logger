export const expect = (actualValue, details = '') => {
  const serialize = value => JSON.stringify(value, null, '  ');
  return ({
    equals: expectedValue => {
      const actual = serialize(actualValue);
      const expected = serialize(expectedValue);
      if (actual !== expected) {
        throw new Error(`Expected ${expected}. Received ${actual} ${details}`)
      }
    },
    isFunction: () => {
      if (typeof actualValue === 'function') return;
      throw new Error(`Expected function, but was ${typeof actualValue}. ${details}`);
    },
    is: expectedValue => {
      if (actualValue === expectedValue) return;
      throw new Error(`Expected ${actualValue} to be ${expectedValue}. ${details}`);
    },
    lengthOf: expectedValue => {
      if (actualValue.length === expectedValue) return;
      throw new Error(`Expected length of ${expectedValue} but was ${actualValue.length}. ${details}`);
    },
    startsWith: expectedValue => {
      if (actualValue.startsWith(expectedValue)) return;
      throw new Error(`Expected ${actualValue} to start with ${expectedValue}. ${details}`);
    },
    endsWith: expectedValue => {
      if (actualValue.endsWith(expectedValue)) return;
      throw new Error(`Expected ${actualValue} to end with ${expectedValue}. ${details}`);
    },
  })
}