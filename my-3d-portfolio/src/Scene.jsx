import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Butterfly from './components/Butterfly';

const Scene = () => (
  <Canvas style={{ height: '100vh' }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Stars />
    <Butterfly />
    <OrbitControls />
  </Canvas>
);

export default Scene;
