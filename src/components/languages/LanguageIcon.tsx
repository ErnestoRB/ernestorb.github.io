import { useEffect, useState } from "react";
import unknownIcon from "../../iconos/unknown.svg";

export default function LanguageIcon({
  lang,
  format = "svg",
}: {
  lang: string;
  format?: "svg" | "png";
}) {
  const [imgSrc, setImgSrc] = useState<any>(null);

  useEffect(() => {
    if (!lang) return;
    import(`../../iconos/${lang.toLowerCase()}.${format}`)
      .then((mod) => setImgSrc(mod.default))
      .catch(() => {});
  }, [lang]);

  if (!imgSrc) {
    return (
      <img
        src={unknownIcon}
        alt={`${lang} icon not found`}
        className="w-8 h-8"
      />
    );
  }

  return (
    <img
      draggable="false"
      src={imgSrc}
      alt={`${lang} icon`}
      className="w-8 h-8 inline"
    />
  );
}
