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
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return('Initial investment amount must be at least zero.');
  }

  if (expectedReturn < 0) {
    return('Expected return must be at least zero.');
  }

  if (duration < 0) {
    return('No valid amount of years provided.');
  }
}

function printResults(results: CalculationResult) {
  // print (output) the results
}

const results = calculateInvestment(data);

printResults(results);
