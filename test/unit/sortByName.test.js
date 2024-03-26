const { expect } = require("@jest/globals");
const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const output = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(sorting.sortByName(input)).toEqual(output);
  });
});
