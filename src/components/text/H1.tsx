export default function H1({ children, className = "" }: BasicComponentProps) {
  return (
    <h1 className={`text-3xl lg:text-4xl xl:text-5xl ${className}`}>
      {children}
    </h1>
  );
}
