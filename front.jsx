/* Hero V1 — Globo terráqueo con nodos buenos/malos */
const { useEffect, useRef, useState, useMemo } = React;

function Hero1Globe() {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: -18, y: 22 });
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    let raf;
    const tick = () => { setAuto((a) => a + 0.25); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e) => {
    const r = stageRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -18 - py * 18, y: 22 + px * 28 });
  };

  // generate nodes on a sphere (fibonacci sphere)
  const nodes = useMemo(() => {
    const N = 46;
    const arr = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      arr.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        bad: [3, 9, 17, 25, 33, 41].includes(i),
        i,
      });
    }
    return arr;
  }, []);

  // edges connecting close nodes
  const edges = useMemo(() => {
    const E = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y, dz = nodes[i].z - nodes[j].z;
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (d < 0.55) E.push([i, j, d]);
      }
    }
    return E;
  }, [nodes]);

  const R = 220;
  const yaw = (tilt.y + auto) * Math.PI / 180;
  const pitch = tilt.x * Math.PI / 180;
  const project = (n) => {
    // rotate around Y (yaw), then X (pitch)
    let x = n.x * Math.cos(yaw) + n.z * Math.sin(yaw);
    let z = -n.x * Math.sin(yaw) + n.z * Math.cos(yaw);
    let y = n.y * Math.cos(pitch) - z * Math.sin(pitch);
    z = n.y * Math.sin(pitch) + z * Math.cos(pitch);
    return { x: x * R, y: y * R, z, };
  };

  const projected = nodes.map(project);

  return (
    <div className="hero-shell" style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, #112620 0%, #060a0c 55%, #03060a 100%)' }} data-screen-label="V1 Globe">
      <div className="brs-grid-bg" />

      {/* nav */}
      <nav className="brs-nav">
        <div className="brs-logo">
          <div className="brs-logo-mark" style={{ background: 'linear-gradient(135deg,#0d1f1a,#1d3a31)', boxShadow: '0 0 0 1px rgba(74,222,170,0.3) inset' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade9f" strokeWidth="2"><path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" /></svg>
          </div>
          <div>
            BR Safety
            <small>auditoría · vigilancia · respuesta</small>
          </div>
        </div>
        <ul>
          <li><a>Auditorías</a></li>
          <li><a>Servicios</a></li>
          <li><a>Casos</a></li>
          <li><a>Manifiesto</a></li>
        </ul>
        <a className="brs-nav-cta" style={{ background: '#4ade9f', color: '#04130d' }}>
          Reservar diagnóstico
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>↗</span>
        </a>
      </nav>

      {/* hero */}
      <div className="brs-hero-grid">
        <div className="brs-hero-copy">
          <span className="brs-eyebrow" style={{ background: 'rgba(74,222,170,0.08)', color: '#4ade9f', border: '1px solid rgba(74,222,170,0.25)' }}>
            <span className="dot" style={{ background: '#4ade9f' }}></span>
            Auditando 4.218 superficies en vivo
          </span>
          <h1>
            Cada nodo<br />
            de tu red<br />
            <em style={{ color: '#4ade9f' }}>// importa.</em>
          </h1>
          <p>
            Auditamos webs, infraestructura y redes Wi-Fi para PYMES que dependen de su digital. Encontramos lo que escanean los atacantes —antes que ellos.
          </p>
          <div className="brs-cta-row">
            <button className="brs-btn" style={{ background: '#4ade9f', color: '#04130d' }}>
              Solicitar auditoría →
            </button>
            <button className="brs-btn brs-btn-secondary" style={{ color: '#9aa6ad' }}>
              [ ver_metodología.md ]
            </button>
          </div>
        </div>

        {/* 3D globe stage */}
        <div className="brs-stage" ref={stageRef} onMouseMove={onMove} style={{ cursor: 'crosshair' }}>
          <div className="brs-corner tl" style={{ color: '#4ade9f' }} />
          <div className="brs-corner tr" style={{ color: '#4ade9f' }} />
          <div className="brs-corner bl" style={{ color: '#4ade9f' }} />
          <div className="brs-corner br" style={{ color: '#4ade9f' }} />

          <svg viewBox="-300 -300 600 600" style={{ width: 540, height: 540, overflow: 'visible' }}>
            <defs>
              <radialGradient id="g1-sphere" cx="35%" cy="35%">
                <stop offset="0%" stopColor="rgba(74,222,170,0.18)" />
                <stop offset="60%" stopColor="rgba(74,222,170,0.04)" />
                <stop offset="100%" stopColor="rgba(74,222,170,0)" />
              </radialGradient>
              <radialGradient id="g1-bad" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ff5570" />
                <stop offset="100%" stopColor="rgba(255,85,112,0)" />
              </radialGradient>
              <filter id="g1-glow"><feGaussianBlur stdDeviation="2.4" /></filter>
            </defs>

            {/* sphere base */}
            <circle r={R} fill="url(#g1-sphere)" />
            <circle r={R} fill="none" stroke="rgba(74,222,170,0.18)" strokeWidth="1" />

            {/* meridians/parallels (simple) */}
            {[0, 30, 60, 120, 150].map((a) => {
              const rx = R * Math.abs(Math.cos((a + tilt.y + auto) * Math.PI / 180));
              return <ellipse key={'m'+a} cx="0" cy="0" rx={rx} ry={R} fill="none" stroke="rgba(74,222,170,0.08)" strokeWidth="0.6" />;
            })}
            {[-0.7, -0.35, 0, 0.35, 0.7].map((py) => {
              const ry = R * 0.18;
              const cy = py * R * Math.cos(pitch);
              const rx = R * Math.sqrt(1 - py*py);
              return <ellipse key={'p'+py} cx="0" cy={cy} rx={rx} ry={ry * Math.abs(Math.sin(pitch)) + 0.1} fill="none" stroke="rgba(74,222,170,0.07)" strokeWidth="0.6" />;
            })}

            {/* edges */}
            {edges.map(([i, j], k) => {
              const a = projected[i], b = projected[j];
              const opacity = Math.max(0.05, Math.min(0.55, (a.z + b.z) / 4 + 0.4));
              const isBad = nodes[i].bad || nodes[j].bad;
              return <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={isBad ? '#ff5570' : '#4ade9f'} strokeOpacity={opacity * (isBad ? 1.2 : 0.7)} strokeWidth={isBad ? 1.1 : 0.6} />;
            })}

            {/* nodes */}
            {projected.map((p, i) => {
              const front = p.z > -0.2;
              const r = nodes[i].bad ? 5.5 : 3.2;
              const fill = nodes[i].bad ? '#ff5570' : '#4ade9f';
              return (
                <g key={i} opacity={front ? 1 : 0.35}>
                  {nodes[i].bad && <circle cx={p.x} cy={p.y} r={14} fill="url(#g1-bad)" filter="url(#g1-glow)" />}
                  <circle cx={p.x} cy={p.y} r={r} fill={fill} />
                  {nodes[i].bad && <circle cx={p.x} cy={p.y} r={r + 4} fill="none" stroke="#ff5570" strokeWidth="0.8">
                    <animate attributeName="r" values={`${r+3};${r+10};${r+3}`} dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0;0.9" dur="1.6s" repeatCount="indefinite" />
                  </circle>}
                </g>
              );
            })}

            {/* scan ring */}
            <circle r={R} fill="none" stroke="rgba(74,222,170,0.5)" strokeWidth="0.8" strokeDasharray="2 6">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="22s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* readout */}
          <div style={{ position: 'absolute', top: 28, left: 28, color: '#4ade9f' }}>
            <div className="brs-readout">
              <div className="row"><span className="k">LAT</span><span>40.4168°N</span></div>
              <div className="row"><span className="k">LON</span><span>003.7038°W</span></div>
              <div className="row"><span className="k">SCAN</span><span style={{ color: '#fff' }}>ACTIVE</span></div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 28, right: 28, textAlign: 'right', color: '#ff5570' }}>
            <div className="brs-readout">
              <div className="row" style={{ justifyContent: 'flex-end' }}><span className="k">THREATS</span><span style={{ color: '#ff5570' }}>06</span></div>
              <div className="row" style={{ justifyContent: 'flex-end' }}><span className="k">SAFE</span><span style={{ color: '#4ade9f' }}>40</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* services strip */}
      <div className="brs-services" style={{ background: 'rgba(4,10,8,0.55)', backdropFilter: 'blur(8px)', color: '#cfd6da' }}>
        {[
          { n: '01', label: 'Servicio', name: 'Auditoría Web', meta: 'OWASP · API · SPA' },
          { n: '02', label: 'Servicio', name: 'Infra & Cloud', meta: 'AWS · GCP · On-prem' },
          { n: '03', label: 'Servicio', name: 'Wi-Fi & Redes', meta: 'WPA3 · Rogue AP · 802.1X' },
          { n: '04', label: 'Servicio', name: 'Red Team', meta: 'Phishing · Físico · OSINT' },
        ].map((s) => (
          <div className="item" key={s.n}>
            <span className="num">{s.n}</span>
            <span className="label">{s.label}</span>
            <span className="name">{s.name}</span>
            <span className="meta">{s.meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
window.Hero1Globe = Hero1Globe;
