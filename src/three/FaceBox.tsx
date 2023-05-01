import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FaceMesh from "./FaceMesh";

export default function FaceBox() {
  return (
    <Canvas
      shadows
      className="touch-none"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <object3D castShadow>
        <FaceMesh></FaceMesh>
      </object3D>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]}></planeGeometry>
        <shadowMaterial></shadowMaterial>
      </mesh>
      <directionalLight position={[20, 10, 15]} castShadow></directionalLight>
      <PerspectiveCamera makeDefault position={[0, 0, 7]}></PerspectiveCamera>
    </Canvas>
  );
}
