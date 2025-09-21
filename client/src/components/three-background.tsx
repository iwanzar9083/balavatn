import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || typeof window === "undefined") {
      setShowFallback(true);
      return;
    }
    
    if (!window.THREE) {
      console.warn('Three.js library not loaded, using CSS fallback');
      setShowFallback(true);
      return;
    }

    const canvas = canvasRef.current;
    const THREE = window.THREE;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      // Try to create WebGL renderer with fallback
      let renderer: any;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      } catch (webglError) {
        console.warn('WebGL not supported, falling back to CSS renderer:', webglError);
        // Hide canvas and use CSS animation fallback
        canvas.style.display = 'none';
        setShowFallback(true);
        return;
      }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create floating particles
    const particleCount = 50;
    const particles: any[] = [];

    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(0.05, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x00d4ff : 0x8b5cf6,
        transparent: true,
        opacity: 0.6
      });

      const particle = new THREE.Mesh(geometry, material);

      particle.position.x = (Math.random() - 0.5) * 20;
      particle.position.y = (Math.random() - 0.5) * 20;
      particle.position.z = (Math.random() - 0.5) * 20;

      particle.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };

      scene.add(particle);
      particles.push(particle);
    }

      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        particles.forEach(particle => {
          particle.position.x += particle.velocity.x;
          particle.position.y += particle.velocity.y;
          particle.position.z += particle.velocity.z;

          // Wrap around screen
          if (particle.position.x > 10) particle.position.x = -10;
          if (particle.position.x < -10) particle.position.x = 10;
          if (particle.position.y > 10) particle.position.y = -10;
          if (particle.position.y < -10) particle.position.y = 10;
          if (particle.position.z > 10) particle.position.z = -10;
          if (particle.position.z < -10) particle.position.z = 10;

          particle.rotation.x += 0.01;
          particle.rotation.y += 0.01;
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

    window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        // Cleanup Three.js resources
        if (renderer) {
          scene.clear();
          renderer.dispose();
        }
      };
    } catch (error) {
      console.warn('Three.js initialization failed, using CSS fallback:', error);
      // Hide canvas if Three.js fails
      if (canvasRef.current) {
        canvasRef.current.style.display = 'none';
      }
      setShowFallback(true);
    }
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        data-testid="three-canvas"
      />
      {showFallback && (
        <div className="css-particles" data-testid="css-fallback">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="css-particle"
              style={{
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 15}s`,
                animationDelay: `${Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
