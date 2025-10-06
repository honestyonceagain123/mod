export function adjustPercentage(real) {
  if (real >= 75 && real <= 76) return 80;
  if (real >= 77 && real <= 78) return 85;
  if (real >= 79 && real <= 80) return 86;
  if (real >= 81 && real <= 82) return 88;
  if (real === 83) return 89;
  if (real >= 84 && real <= 85) return 90;
  if (real >= 86 && real <= 87) return 91;
  if (real >= 88 && real <= 89) return 92;
  if (real === 90) return 94;
  return real; // other percentages remain same
}
