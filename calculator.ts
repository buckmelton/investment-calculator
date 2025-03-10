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

function calculateInvestment(data: InvestmentData): CalculationResult {} // => result[]

function printResults(results: CalculationResult) {
  // print (output) the results
}

const results = calculateInvestment(data);

printResults(results);
