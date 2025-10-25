'use client';

import { useEffect, useRef } from 'react';

interface TechBackgroundProps {
  variant?: 'grid' | 'particles' | 'circuit' | 'waves';
}

export default function TechBackground({ variant = 'grid' }: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId: number;

    if (variant === 'grid') {
      // Animated Tech Grid
      const drawGrid = (time: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gridSize = 50;
        const offsetX = (time / 50) % gridSize;
        const offsetY = (time / 50) % gridSize;

        ctx.strokeStyle = 'rgba(37, 99, 235, 0.1)'; // Blue
        ctx.lineWidth = 1;

        // Vertical lines
        for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x - offsetX, 0);
          ctx.lineTo(x - offsetX, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y - offsetY);
          ctx.lineTo(canvas.width, y - offsetY);
          ctx.stroke();
        }

        // Add glowing intersections
        ctx.fillStyle = 'rgba(124, 58, 237, 0.3)'; // Purple
        for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize * 2) {
          for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize * 2) {
            const pulse = Math.sin(time / 1000 + x / 100 + y / 100) * 0.5 + 0.5;
            ctx.globalAlpha = pulse * 0.3;
            ctx.beginPath();
            ctx.arc(x - offsetX, y - offsetY, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;

        animationFrameId = requestAnimationFrame((t) => drawGrid(t));
      };
      drawGrid(0);
    } else if (variant === 'particles') {
      // Floating Particles with Connections
      interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
      }

      const particles: Particle[] = [];
      const particleCount = 80;
      const connectionDistance = 150;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }

      const drawParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Draw particle
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * 2
          );
          gradient.addColorStop(0, 'rgba(124, 58, 237, 0.8)'); // Purple
          gradient.addColorStop(1, 'rgba(37, 99, 235, 0)'); // Blue
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              ctx.globalAlpha = 1 - distance / connectionDistance;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;

        animationFrameId = requestAnimationFrame(drawParticles);
      };
      drawParticles();
    } else if (variant === 'circuit') {
      // Circuit Board Pattern
      const circuits: { x: number; y: number; length: number; horizontal: boolean; progress: number; speed: number }[] = [];

      for (let i = 0; i < 30; i++) {
        circuits.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 50,
          horizontal: Math.random() > 0.5,
          progress: Math.random(),
          speed: Math.random() * 0.002 + 0.001,
        });
      }

      const drawCircuit = (time: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circuits.forEach((circuit) => {
          circuit.progress += circuit.speed;
          if (circuit.progress > 1) circuit.progress = 0;

          const gradient = ctx.createLinearGradient(
            circuit.x,
            circuit.y,
            circuit.horizontal ? circuit.x + circuit.length : circuit.x,
            circuit.horizontal ? circuit.y : circuit.y + circuit.length
          );
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0)');
          gradient.addColorStop(circuit.progress, 'rgba(124, 58, 237, 0.6)');
          gradient.addColorStop(Math.min(circuit.progress + 0.1, 1), 'rgba(37, 99, 235, 0)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(circuit.x, circuit.y);
          ctx.lineTo(
            circuit.horizontal ? circuit.x + circuit.length : circuit.x,
            circuit.horizontal ? circuit.y : circuit.y + circuit.length
          );
          ctx.stroke();

          // Draw nodes
          ctx.fillStyle = 'rgba(124, 58, 237, 0.4)';
          ctx.beginPath();
          ctx.arc(circuit.x, circuit.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            circuit.horizontal ? circuit.x + circuit.length : circuit.x,
            circuit.horizontal ? circuit.y : circuit.y + circuit.length,
            3, 0, Math.PI * 2
          );
          ctx.fill();
        });

        animationFrameId = requestAnimationFrame((t) => drawCircuit(t));
      };
      drawCircuit(0);
    } else if (variant === 'waves') {
      // Gradient Waves
      const waves = [
        { amplitude: 30, frequency: 0.02, speed: 0.0005, offset: 0 },
        { amplitude: 40, frequency: 0.015, speed: 0.0007, offset: Math.PI / 2 },
        { amplitude: 25, frequency: 0.025, speed: 0.0003, offset: Math.PI },
      ];

      const drawWaves = (time: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        waves.forEach((wave, index) => {
          const y = canvas.height / 2;
          const phase = time * wave.speed + wave.offset;

          const gradient = ctx.createLinearGradient(0, y - 100, 0, y + 100);
          if (index === 0) {
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0)');
            gradient.addColorStop(0.5, 'rgba(37, 99, 235, 0.1)');
            gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
          } else if (index === 1) {
            gradient.addColorStop(0, 'rgba(124, 58, 237, 0)');
            gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.15)');
            gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
          } else {
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
            gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 40;
          ctx.beginPath();

          for (let x = 0; x <= canvas.width; x += 5) {
            const waveY = y + Math.sin(x * wave.frequency + phase) * wave.amplitude;
            if (x === 0) {
              ctx.moveTo(x, waveY);
            } else {
              ctx.lineTo(x, waveY);
            }
          }
          ctx.stroke();
        });

        animationFrameId = requestAnimationFrame((t) => drawWaves(t));
      };
      drawWaves(0);
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background: 'transparent',
        zIndex: -1
      }}
    />
  );
}
