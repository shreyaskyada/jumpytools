export function validateName(name: string): boolean {
  if (!name) return false;
  const trimmed = name.trim();
  return trimmed.length > 0 && /^[a-zA-Z\s]{1,50}$/.test(trimmed);
}
