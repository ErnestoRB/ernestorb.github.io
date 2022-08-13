export default function Container({
  children,
  className,
  id,
}: BasicComponentProps & { id?: string }) {
  return (
    <div
      className={`w-full px-4 py-2 md:px-8 md:py-4 lg:px-16 lg:py-8 xl:px-32 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
