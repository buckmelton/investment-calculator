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

type CalculationResult = InvestmentResult[] | string;

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

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - initialAmount - totalContributions;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalContributions,
      totalInterestEarned
    });
  }

  return annualResults;

}

function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount}`);
    console.log(`Total Contributions: ${yearEndResult.totalContributions}`);
    console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned}`);
    console.log(`----------------------------`);
  }
}

const results = calculateInvestment(data);

printResults(results);
