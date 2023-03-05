import { useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useRef } from "react";
import { BufferGeometry, Material, Mesh, Vector3 } from "three";
import FaceTexture from "./textures/FaceTexture";

const XVector = new Vector3(1, 0, 0);
const YVector = new Vector3(0, 1, 0);

const props = {
  from: { rotation: [0, 0, 0] },
  to: { rotation: [0, Math.PI, 0] },
  config: { mass: 5, tension: 100, friction: 20 },
  loop: { reverse: true },
};

export default function FaceMesh() {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const isSpinning = useRef<boolean>(true);
  const isDragging = useRef<boolean>(false);
  const lastRotation = useRef<[number, number]>([0, 0]);
  const [{ rotation }, api] = useSpring(() => ({
    ...props,
    onRest(result, ctrl, item) {
      if (!isDragging.current && !isSpinning.current) {
        lastRotation.current = [0, 0];
        isSpinning.current = true;
        api.start({
          ...props,
        });
      }
    },
  }));

  const bind = useDrag(({ offset: [dX, dY], first, last }) => {
    const [rX, rY] = [dY * 0.05, dX * 0.05];
    if (first) {
      isSpinning.current = false;
      isDragging.current = true;
    }
    if (last) {
      isDragging.current = false;
    }

    api.start({
      rotation: [rX, rY, 0],
    });
  });

  useFrame((state) => {
    const [x, y] = rotation.get();
    const [lastX, lastY] = lastRotation.current;
    meshRef.current?.rotateOnWorldAxis(YVector, y - lastY);
    meshRef.current?.rotateOnWorldAxis(XVector, x - lastX);
    lastRotation.current = [x, y];
  });

  return (
    // @ts-ignore
    <mesh {...bind()} ref={meshRef} castShadow>
      <boxGeometry args={[3, 3, 3]}></boxGeometry>
      <meshPhongMaterial shininess={2} specular="#ffffff">
        <FaceTexture></FaceTexture>
      </meshPhongMaterial>
    </mesh>
  );
}
