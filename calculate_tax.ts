function calculateTax(brackets: number[][], income: number): number {
  let tax: number = 0;
  let remainingIncome: number = income;

  for (let i = 0; i < brackets.length; i++) {
    let range = 0;
    if (i > 0) {
      range = brackets[i][0] - brackets[i - 1][0];
    } else {
      range = brackets[i][0];
    }
    let taxableAmount = Math.min(remainingIncome, range);
    tax += (taxableAmount * brackets[i][1]) / 100;
    remainingIncome -= taxableAmount;
  }

  return tax;
}

describe("2303. Calculate Amount Paid in Taxes", () => {
  it("Happy Path - 01", () => {
    expect(
      calculateTax(
        [
          [3, 50],
          [7, 10],
          [12, 25],
        ],
        10
      )
    ).toStrictEqual(2.65);
  });
});
