export function validateName(name: string): boolean {
  if (!name) return false;
  const trimmed = name.trim();
  // Name should be non-empty and contain letters or spaces
  return trimmed.length > 0 && /^[a-zA-Z\s]{1,50}$/.test(trimmed);
}
