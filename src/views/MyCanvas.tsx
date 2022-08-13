import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight } from "three";
import Name from "../three/Name";

function CanvasInternals() {
  const lightRef = useRef<DirectionalLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.target.position.set(0, 0, 0);
      lightRef.current.shadow.camera.far = 200;
      lightRef.current.shadow.camera.top = -50;
      lightRef.current.shadow.camera.bottom = 50;
      lightRef.current.shadow.camera.left = -50;
      lightRef.current.shadow.camera.right = 50;
      lightRef.current.target.updateMatrixWorld();
      lightRef.current.shadow.camera.updateProjectionMatrix();
    }
  });

  return (
    <>
      <Name />
      <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[300, 300]}></planeGeometry>
        <shadowMaterial opacity={0.5}></shadowMaterial>
      </mesh>
      <directionalLight
        position={[0, 10, 10]}
        castShadow
        ref={lightRef}
      ></directionalLight>
    </>
  );
}
export default function MyCanvas() {
  return (
    <div className="absolute top-0 left-0 w-full h-full ">
      <Canvas
        camera={{ position: [-20, 20, 20], near: 0.1, far: 200 }}
        shadows={{ enabled: true }}
      >
        <CanvasInternals></CanvasInternals>
      </Canvas>
    </div>
  );
}
