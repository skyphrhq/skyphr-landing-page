export const SPARKLE_PATH_D =
  "M12 0C12.9 6.4 17.6 11.1 24 12C17.6 12.9 12.9 17.6 12 24C11.1 17.6 6.4 12.9 0 12C6.4 11.1 11.1 6.4 12 0Z";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={SPARKLE_PATH_D} />
    </svg>
  );
}

export default SparkleIcon;
