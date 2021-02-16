const { expect } = require("chai")

const usecases = require('../domain/usecases');

describe('The usecase', () => {
  it('returns an empty grocery list', () => {
    // given
    const datasource = {
      getGroceryList: () => []
    };

    // when
    const result = usecases.getGroceryList(datasource);

    // then
    expect(result).to.deep.equal([]);
  });

  it('returns a grocery list with an element', () => {
    // given
    const datasource = {
      getGroceryList: () => ['beurre']
    };

    // when
    const result = usecases.getGroceryList(datasource);

    // then
    expect(result).to.deep.equal(['beurre']);
  });
})