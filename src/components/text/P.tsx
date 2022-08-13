export default function P({ children, className = "" }: BasicComponentProps) {
  return (
    <p className={`text-sm sm:text-base lg:text-lg ${className}`}>{children}</p>
  );
}
