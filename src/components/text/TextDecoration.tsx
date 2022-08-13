export default function TextDecoration({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`before:w-full before:h-full before:content-['_']
      before:absolute before:-z-10 before:-skew-y-2 before:p-2 before:scale-150 relative ${className}`}
    >
      {children}
    </span>
  );
}
