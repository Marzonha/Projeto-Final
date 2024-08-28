// src/components/Modelo3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Modelo3D = () => {
  const { scene } = useGLTF('./src/Main/xbox_series_s.glb');
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default Modelo3D;