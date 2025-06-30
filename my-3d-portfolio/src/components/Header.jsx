import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Butterfly from './Butterfly';

export default function Header() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} />
        <Butterfly position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="overlay">
        <h1 className="title">Hi, I'm Vaishali Singh</h1>
        <p className="subtitle">AI Engineer | Python Developer | ML Enthusiast</p>
      </div>
    </div>
  );
}
