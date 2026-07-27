export function isValidNumber(value: string): boolean {
  if (value.trim() === '') return false;
  const num = Number(value);
  return !isNaN(num) && isFinite(num);
}
