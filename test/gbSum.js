const assert = require("assert")

const Z = require("../source/index.js")

describe("gbSum", () => {
  it("calculates sums for grouped objects", () => {
    const df = [
      { label: "A", value: 7 },
      { label: "A", value: 3 },
      { label: "B", value: 2 },
      { label: "B", value: 5 },
      { label: "C", value: 75 },
    ]
    const result = Z.gbSum("value", Z.groupBy(d => d.label, df))
    assert.strictEqual(result.length, 3)
    assert.deepStrictEqual(result, [
      { group: "A", sum: 10 },
      { group: "B", sum: 7 },
      { group: "C", sum: 75 },
    ])
  })
})
