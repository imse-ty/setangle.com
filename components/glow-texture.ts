// @ts-nocheck

import * as THREE from 'three';

export const createGlowTexture = () => {
  const size = 64; // Texture size
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');

  // Create radial gradient
  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.6)');
  gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.4)');
  gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  // Fill with gradient
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  // Create texture
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  return texture;
};
