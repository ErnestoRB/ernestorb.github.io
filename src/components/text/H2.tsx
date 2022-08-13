export default function H2({ children, className }: BasicComponentProps) {
  return (
    <h2 className={`text-2xl lg:text-3xl xl:text-4xl ${className}`}>
      {children}
    </h2>
  );
}
