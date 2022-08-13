import { useEffect, useState } from "react";

export default function useCredlyScript() {
  /*   const [componentMounted, setComponentMounted] = useState(false);
   */ const [loaded, setLoaded] = useState(false);
  useEffect(
    () => {
      if (window && document /*  && componentMounted */) {
        const script = document.createElement("script");
        const body = document.getElementsByTagName("body")[0];
        script.type = "application/javascript";
        script.async = true;
        script.src = "https://cdn.credly.com/assets/utilities/embed.js";
        body.appendChild(script);
        script.addEventListener("load", () => {
          setLoaded(true);
        });
      }
    },
    [
      /* componentMounted */
    ]
  );
  return { loaded /* , setComponentMounted */ };
}
