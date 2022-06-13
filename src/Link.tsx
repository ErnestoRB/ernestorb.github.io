const Link: React.FC<{ href: string; className?: string }> = ({
  children,
  href,
  className
}) => {
  return (
    <a
      href={href}
      className={`px-4 py-2 inline-flex justify-center items-center gap-x-2 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
