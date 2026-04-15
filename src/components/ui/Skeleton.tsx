type SkeletonProps = {
  variant?: "text" | "title" | "card" | "circle";
  count?: number;
  className?: string;
};

export function Skeleton({ variant = "text", count = 1, className = "" }: SkeletonProps) {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <div
      className={`skeleton-group skeleton-group--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      {items.map((i) => (
        <div key={i} className={`skeleton skeleton--${variant}`} />
      ))}
    </div>
  );
}
