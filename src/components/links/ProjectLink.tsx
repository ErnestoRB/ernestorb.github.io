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
      className="flex gap-x-3 bg-white dark:bg-gray-500  border border-l-8 border-gray-100 hover:scale-105 transition-transform text-black dark:text-white border-l-rose-1 dark:border-0 shadow-inner items-center  font-semibold dark:shadow-gray-800 rounded  px-4 py-2"
    >
      {children}
    </a>
  );
}
