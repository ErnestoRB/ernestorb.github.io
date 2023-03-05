export default function ProjectLink({
  children,
  href = "",
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex gap-x-3 bg-gray-500 shadow-inner items-center shadow-gray-800 rounded  px-4 py-2"
    >
      {children}
    </a>
  );
}
