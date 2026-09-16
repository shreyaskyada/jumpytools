export function parseNames(input: string): string[] {
  return input
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter((name) => name.length > 0);
}

export function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

export function getPointerIndex(rotation: number, count: number): number {
  if (count <= 0) return 0;
  const arc = (2 * Math.PI) / count;

  // The pointer is positioned at 12 o'clock (1.5 * PI or -0.5 * PI radians)
  const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  let pointerAngle = (1.5 * Math.PI - normalizedRotation) % (2 * Math.PI);
  if (pointerAngle < 0) {
    pointerAngle += 2 * Math.PI;
  }

  return Math.floor(pointerAngle / arc) % count;
}
