import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";

export default function FaceTexture() {
  const texture = useLoader(
    TextureLoader,
    "https://avatars.githubusercontent.com/u/55329286"
  );

  return (
    <Suspense>
      <primitive object={texture} attach="map"></primitive>
    </Suspense>
  );
}
