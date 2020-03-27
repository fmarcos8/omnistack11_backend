const { generateUniqId } = require('../../src/utils');

describe('Generate Unique ID', () => {
  it('should generate an unique id', () => {
    const id = generateUniqId(4);

    expect(id).toHaveLength(8);
  })
});