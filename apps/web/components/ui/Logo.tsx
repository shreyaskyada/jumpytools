interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({ size = 18, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19 5L8 18h7L12 27l13-13h-7l1-9z"
        fill="currentColor"
      />
    </svg>
  );
}
