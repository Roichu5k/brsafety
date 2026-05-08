'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { CornerFrame } from '@/components/ui/CornerFrame';

interface Node {
  x: number;
  y: number;
  z: number;
  bad: boolean;
  i: number;
}

interface Projected {
  x: number;
  y: number;
  z: number;
}

interface Props {
  className?: string;
}

const BAD_INDICES = [3, 9, 17, 25, 33, 41];
const R = 220;

export function HeroGlobe({ className = '' }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: -18, y: 22 });
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      setAuto((a) => a + 0.25);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -18 - py * 18, y: 22 + px * 28 });
  };

  const nodes = useMemo<Node[]>(() => {
    const N = 46;
    const arr: Node[] = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      arr.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        bad: BAD_INDICES.includes(i),
        i,
      });
    }
    return arr;
  }, []);

  const edges = useMemo<[number, number, number][]>(() => {
    const E: [number, number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < 0.55) E.push([i, j, d]);
      }
    }
    return E;
  }, [nodes]);

  const yaw = (tilt.y + auto) * Math.PI / 180;
  const pitch = tilt.x * Math.PI / 180;

  const project = (n: Node): Projected => {
    const x = n.x * Math.cos(yaw) + n.z * Math.sin(yaw);
    let z = -n.x * Math.sin(yaw) + n.z * Math.cos(yaw);
    const y = n.y * Math.cos(pitch) - z * Math.sin(pitch);
    z = n.y * Math.sin(pitch) + z * Math.cos(pitch);
    return { x: x * R, y: y * R, z };
  };

  const projected = nodes.map(project);

  return (
    <CornerFrame className={`relative cursor-crosshair ${className}`}>
      <div
        ref={stageRef}
        className="relative flex items-center justify-center"
        onMouseMove={onMouseMove}
        style={{ width: '100%', aspectRatio: '1/1', maxWidth: 540 }}
      >
        <svg
          viewBox="-300 -300 600 600"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            <radialGradient id="g1-sphere" cx="35%" cy="35%">
              <stop offset="0%" stopColor="rgba(0,255,136,0.18)" />
              <stop offset="60%" stopColor="rgba(0,255,136,0.04)" />
              <stop offset="100%" stopColor="rgba(0,255,136,0)" />
            </radialGradient>
            <radialGradient id="g1-bad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ff5570" />
              <stop offset="100%" stopColor="rgba(255,85,112,0)" />
            </radialGradient>
            <filter id="g1-glow">
              <feGaussianBlur stdDeviation="2.4" />
            </filter>
          </defs>

          {/* Sphere base */}
          <circle r={R} fill="url(#g1-sphere)" />
          <circle r={R} fill="none" stroke="rgba(0,255,136,0.18)" strokeWidth="1" />

          {/* Meridians */}
          {[0, 30, 60, 120, 150].map((a) => {
            const rx = R * Math.abs(Math.cos((a + tilt.y + auto) * Math.PI / 180));
            return (
              <ellipse
                key={`m${a}`}
                cx="0"
                cy="0"
                rx={rx}
                ry={R}
                fill="none"
                stroke="rgba(0,255,136,0.08)"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Parallels */}
          {[-0.7, -0.35, 0, 0.35, 0.7].map((py) => {
            const ry = R * 0.18;
            const cy = py * R * Math.cos(pitch);
            const rx = R * Math.sqrt(1 - py * py);
            return (
              <ellipse
                key={`p${py}`}
                cx="0"
                cy={cy}
                rx={rx}
                ry={ry * Math.abs(Math.sin(pitch)) + 0.1}
                fill="none"
                stroke="rgba(0,255,136,0.07)"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Edges */}
          {edges.map(([i, j], k) => {
            const a = projected[i];
            const b = projected[j];
            const opacity = Math.max(0.05, Math.min(0.55, (a.z + b.z) / 4 + 0.4));
            const isBad = nodes[i].bad || nodes[j].bad;
            return (
              <line
                key={k}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={isBad ? '#ff5570' : '#00ff88'}
                strokeOpacity={opacity * (isBad ? 1.2 : 0.7)}
                strokeWidth={isBad ? 1.1 : 0.6}
              />
            );
          })}

          {/* Nodes */}
          {projected.map((p, i) => {
            const front = p.z > -0.2;
            const nodeR = nodes[i].bad ? 5.5 : 3.2;
            const fill = nodes[i].bad ? '#ff5570' : '#00ff88';
            return (
              <g key={i} opacity={front ? 1 : 0.35}>
                {nodes[i].bad && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={14}
                    fill="url(#g1-bad)"
                    filter="url(#g1-glow)"
                  />
                )}
                <circle cx={p.x} cy={p.y} r={nodeR} fill={fill} />
                {nodes[i].bad && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={nodeR + 4}
                    fill="none"
                    stroke="#ff5570"
                    strokeWidth="0.8"
                  >
                    <animate
                      attributeName="r"
                      values={`${nodeR + 3};${nodeR + 10};${nodeR + 3}`}
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.9;0;0.9"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Scan ring */}
          <circle
            r={R}
            fill="none"
            stroke="rgba(0,255,136,0.5)"
            strokeWidth="0.8"
            strokeDasharray="2 6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="22s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

      </div>
    </CornerFrame>
  );
}
