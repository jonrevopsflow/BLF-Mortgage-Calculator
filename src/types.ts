export interface LoanInputs {
  principal: number;
  interestRate: number;
  loanTerm: number; // years
  startDate: string; // YYYY-MM
}

export interface AccelerationInputs {
  extraMonthly: number;
  annualLumpSum: number;
  annualLumpSumMonth: number; // 0-11
  oneTimeInjection: number;
  oneTimeInjectionDate: string; // YYYY-MM
}

export interface AmortizationPeriod {
  month: number;
  date: Date;
  balance: number;
  interest: number;
  principal: number;
  extra: number;
  totalPayment: number;
}

export interface CalculationResults {
  originalAmortization: AmortizationPeriod[];
  acceleratedAmortization: AmortizationPeriod[];
  totalInterestSaved: number;
  timeSavedYears: number;
  originalPayoffDate: Date;
  acceleratedPayoffDate: Date;
  monthlyPayment: number;
}
