import React from "react";

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Link = ({ children, href, className }: LinkProps) => {
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
