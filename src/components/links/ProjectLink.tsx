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
      className="flex gap-x-3 bg-rose-2 dark:bg-gray-500 text-white dark:shadow-inner items-center shadow-none dark:shadow-gray-800 rounded  px-4 py-2"
    >
      {children}
    </a>
  );
}
