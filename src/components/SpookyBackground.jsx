import React, { useEffect, useRef } from 'react';

export default function SpookyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles: floating cursed embers & cyber sparks
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -(Math.random() * 0.7 + 0.2), // float upwards
      opacity: Math.random() * 0.6 + 0.1,
      color: Math.random() > 0.4 ? 'rgba(239, 68, 68,' : 'rgba(168, 85, 247,' // Red or Purple
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle foggy background gradient
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 50,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, 'rgba(15, 12, 24, 0.4)');
      gradient.addColorStop(1, 'rgba(5, 5, 8, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw floating embers
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color === 'rgba(239, 68, 68,' ? '#ef4444' : '#a855f7';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
