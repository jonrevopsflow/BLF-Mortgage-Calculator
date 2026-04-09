import { addMonths, parse, differenceInMonths } from 'date-fns';
import { LoanInputs, AccelerationInputs, AmortizationPeriod, CalculationResults } from '../types';

export function calculateMortgage(
  loan: LoanInputs,
  acceleration: AccelerationInputs
): CalculationResults {
  const { principal, interestRate, loanTerm, startDate } = loan;
  const start = parse(startDate, 'yyyy-MM', new Date());
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  // Original Amortization
  const originalAmortization: AmortizationPeriod[] = [];
  let currentBalance = principal;
  for (let i = 1; i <= numPayments; i++) {
    const interest = currentBalance * monthlyRate;
    const principalPaid = Math.min(currentBalance, monthlyPayment - interest);
    currentBalance -= principalPaid;
    
    originalAmortization.push({
      month: i,
      date: addMonths(start, i - 1),
      balance: Math.max(0, currentBalance),
      interest,
      principal: principalPaid,
      extra: 0,
      totalPayment: interest + principalPaid,
    });
    if (currentBalance <= 0) break;
  }

  // Accelerated Amortization
  const acceleratedAmortization: AmortizationPeriod[] = [];
  currentBalance = principal;
  const injectionDate = parse(acceleration.oneTimeInjectionDate, 'yyyy-MM', new Date());
  
  for (let i = 1; i <= numPayments; i++) {
    const currentDate = addMonths(start, i - 1);
    const interest = currentBalance * monthlyRate;
    let extra = acceleration.extraMonthly;

    // Annual Lump Sum
    if (currentDate.getMonth() === acceleration.annualLumpSumMonth) {
      extra += acceleration.annualLumpSum;
    }

    // One-time injection
    if (
      currentDate.getFullYear() === injectionDate.getFullYear() &&
      currentDate.getMonth() === injectionDate.getMonth()
    ) {
      extra += acceleration.oneTimeInjection;
    }

    const principalPaid = Math.min(currentBalance, monthlyPayment - interest + extra);
    currentBalance -= principalPaid;

    acceleratedAmortization.push({
      month: i,
      date: currentDate,
      balance: Math.max(0, currentBalance),
      interest,
      principal: principalPaid - extra,
      extra,
      totalPayment: interest + principalPaid,
    });

    if (currentBalance <= 0) break;
  }

  const originalTotalInterest = originalAmortization.reduce((sum, p) => sum + p.interest, 0);
  const acceleratedTotalInterest = acceleratedAmortization.reduce((sum, p) => sum + p.interest, 0);
  
  const originalPayoffDate = originalAmortization[originalAmortization.length - 1].date;
  const acceleratedPayoffDate = acceleratedAmortization[acceleratedAmortization.length - 1].date;

  const monthsSaved = differenceInMonths(originalPayoffDate, acceleratedPayoffDate);

  return {
    originalAmortization,
    acceleratedAmortization,
    totalInterestSaved: originalTotalInterest - acceleratedTotalInterest,
    timeSavedYears: Math.max(0, monthsSaved / 12),
    originalPayoffDate,
    acceleratedPayoffDate,
    monthlyPayment,
  };
}
