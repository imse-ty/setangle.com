// @ts-nocheck

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createGlowTexture } from './glow-texture';

const DustParticles = () => {
  const mountRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Dust particles
    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Glow texture
    const glowTexture = createGlowTexture();

    const particleMaterial = new THREE.PointsMaterial({
      map: glowTexture,
      size: 0.01,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth cursor reaction
      const targetX = (mouseX.current / window.innerWidth) * 2 - 1;
      const targetY = -(mouseY.current / window.innerHeight) * 2 + 1;

      particleSystem.rotation.y +=
        0.001 * (targetX - particleSystem.rotation.y);
      particleSystem.rotation.x +=
        0.001 * (targetY - particleSystem.rotation.x);

      renderer.render(scene, camera);
    };

    animate();

    // Mouse move event
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    />
  );
};

export default DustParticles;
