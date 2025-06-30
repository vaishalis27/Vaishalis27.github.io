import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef } from 'react';

export default function Butterfly(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/butterfly.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={0.4} />
    </group>
  );
}
