/// @ts-nocheck
import { useSpring, animated as a } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import FaceTexture from "./textures/FaceTexture";

const config = {
  tension: 200,
  mass: 1,
  friction: 50,
};

export default function FaceBox() {
  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config,
  }));

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ rotation: [y * 0.1, x * 0.1, 0] });
  });

  return (
    <Canvas shadows className="touch-none">
      <a.mesh
        {...bind()}
        rotation={rotation as unknown as [x: number, y: number, z: number]}
        castShadow
      >
        <boxGeometry args={[2, 2, 2]}></boxGeometry>
        <meshPhongMaterial shininess={5} specular="#ffffff">
          <FaceTexture></FaceTexture>
        </meshPhongMaterial>
      </a.mesh>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]}></planeGeometry>
        <shadowMaterial></shadowMaterial>
      </mesh>
      <directionalLight position={[20, 10, 15]} castShadow></directionalLight>
    </Canvas>
  );
}
