import { useEffect } from "react";
import useCredlyScript from "../hooks/useCredlyScript";

export default function CredlyBadge() {
  const { loaded /* , setComponentMounted */ } = useCredlyScript();

  /*   useEffect(() => {
    setComponentMounted(true);
  }, []);
 */

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="b0756b9a-82f1-42b1-99a6-000dc05c2f31"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
}
