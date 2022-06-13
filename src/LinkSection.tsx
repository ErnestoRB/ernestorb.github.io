import { useState } from "react";

const LinkSection = ({ links }: { links: string[] }) => {
  const [activeLink, setActiveLink] = useState<String>();

  return (
    <div className="rounded-md p-2 bg-white bg-opacity-80 flex justify-center items-center">
      {links.map((link) => (
        <a
          key={link}
          href={link}
          onClick={() => setActiveLink(link)}
          className="w-4 h-4 flex items-center justify-center"
        >
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              link === activeLink ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        </a>
      ))}
    </div>
  );
};

export default LinkSection;
