'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// Neural Network Node Component
function NeuralNode({ position, color = '#4f46e5', delay = 0 }: { 
  position: [number, number, number]; 
  color?: string;
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.1;
      meshRef.current.scale.setScalar(hovered ? 1.5 : 1 + Math.sin(time * 3) * 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <octahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial 
        color={hovered ? '#818cf8' : color} 
        emissive={color} 
        emissiveIntensity={hovered ? 0.4 : 0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Connection Lines with Animation
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const connections = [
    [[-2, 1, 0], [-1, 0.5, 0]],
    [[-1, 0.5, 0], [0, 1, 0]],
    [[0, 1, 0], [1, 0.5, 0]],
    [[1, 0.5, 0], [2, 1, 0]],
    [[-2, -1, 0], [-1, -0.5, 0]],
    [[-1, -0.5, 0], [0, -1, 0]],
    [[0, -1, 0], [1, -0.5, 0]],
    [[1, -0.5, 0], [2, -1, 0]],
    [[-1, 0.5, 0], [-1, -0.5, 0]],
    [[0, 1, 0], [0, -1, 0]],
    [[1, 0.5, 0], [1, -0.5, 0]],
    [[-2, 1, 0], [0, 0, 2]],
    [[2, 1, 0], [0, 0, 2]],
    [[-2, -1, 0], [0, 0, -2]],
    [[2, -1, 0], [0, 0, -2]],
  ];

  return (
    <group ref={linesRef}>
      {connections.map((points, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(points.flat())}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#4f46e5" 
            opacity={0.3} 
            transparent
            linewidth={2}
          />
        </line>
      ))}
    </group>
  );
}

// Floating Particles with AI Theme
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 150;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    
    const color = new THREE.Color();
    color.setHSL(0.6 + Math.random() * 0.1, 0.7, 0.5 + Math.random() * 0.3);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        sizeAttenuation 
        transparent 
        opacity={0.8}
        vertexColors
      />
    </points>
  );
}

// Central AI Core
function AICore() {
  const coreRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={coreRef} position={[0, 0, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial 
            color="#4f46e5" 
            emissive="#4f46e5" 
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.25, 1]} />
          <meshStandardMaterial 
            color="#818cf8" 
            emissive="#818cf8" 
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Main AI Background Scene
function AIBackground() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#818cf8" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#a78bfa"
      />
      
      {/* Neural Network Nodes */}
      <NeuralNode position={[-2, 1, 0]} color="#4f46e5" delay={0} />
      <NeuralNode position={[-1, 0.5, 0]} color="#6366f1" delay={0.2} />
      <NeuralNode position={[0, 1, 0]} color="#818cf8" delay={0.4} />
      <NeuralNode position={[1, 0.5, 0]} color="#6366f1" delay={0.6} />
      <NeuralNode position={[2, 1, 0]} color="#4f46e5" delay={0.8} />
      
      <NeuralNode position={[-2, -1, 0]} color="#818cf8" delay={0.1} />
      <NeuralNode position={[-1, -0.5, 0]} color="#6366f1" delay={0.3} />
      <NeuralNode position={[0, -1, 0]} color="#4f46e5" delay={0.5} />
      <NeuralNode position={[1, -0.5, 0]} color="#6366f1" delay={0.7} />
      <NeuralNode position={[2, -1, 0]} color="#818cf8" delay={0.9} />
      
      <NeuralNode position={[0, 0, 2]} color="#a78bfa" delay={1.0} />
      <NeuralNode position={[0, 0, -2]} color="#a78bfa" delay={1.1} />
      
      {/* Central AI Core */}
      <AICore />
      
      {/* Connection Lines */}
      <ConnectionLines />
      
      {/* Floating Particles */}
      <Particles />
    </>
  );
}

export default function AnimatedAIBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <AIBackground />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}