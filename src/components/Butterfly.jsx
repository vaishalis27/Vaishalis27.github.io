// src/components/Butterfly.jsx
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Butterfly(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/butterfly.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play(); // play first available animation
    }
  }, [actions]);

  

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={0.4} />
    </group>
  );
}
