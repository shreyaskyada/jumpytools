export function validateStatement(statement: string): boolean {
  const trimmed = statement.trim();
  return trimmed.length >= 3 && trimmed.length <= 500;
}
