function sumSalary(salaries) {
  let sum = 0;

  for (const value of Object.values(salaries)) {
    if (typeof value === 'number' && Number.isFinite(value)) {
      sum += value;
    }
  }
  return sum;
  // ваш код...
}
