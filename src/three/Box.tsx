import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";

function Box() {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(t, 0, t);
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="cyan" position={[0, 0, 5]} />
      <mesh ref={ref}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default function BoxCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Box></Box>
      </Canvas>
    </div>
  );
}
