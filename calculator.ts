// data:
// initial investment
// annual contribution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}

function calculateInvestment(data: InvestmentData) {} // => result[]

function printResults(results) {
  // print (output) the results
}

const results = calculateInvestment(data);

printResults(results);
