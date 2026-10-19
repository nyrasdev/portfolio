// Scroll-driven laptop: the lid opens as you scroll through the section.
// Model (mac.glb) from shahdinsalman23/react-macbookpro (MIT); screen shows the BALBOITA interface.
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, createPortal } from '@react-three/fiber';
import { Environment, Html, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Model({ progress, site }) {
  const { scene } = useGLTF('/mac.glb');
  const tex = useTexture('/mac-screen.jpg');
  const meshes = useMemo(() => {
    const m = {};
    scene.traverse(o => { m[o.name] = o; });
    return m;
  }, [scene]);

  useEffect(() => {
    if (meshes.matte?.material) {
      tex.colorSpace = THREE.SRGBColorSpace;
      meshes.matte.material.map = tex;
      meshes.matte.material.emissiveIntensity = 0;
      meshes.matte.material.metalness = 0;
      meshes.matte.material.roughness = 1;
      meshes.matte.material.needsUpdate = true;
    }
    if (meshes.screen) meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  }, [meshes, tex]);

  const group = useRef();
  const live = useRef(null);
  useFrame(() => {
    const p = progress.current;
    if (live.current) live.current.style.opacity = String(Math.min(1, Math.max(0, (p - 0.45) / 0.3)));
    if (meshes.screen) {
      const target = THREE.MathUtils.degToRad(180 - p * 90);
      meshes.screen.rotation.x = THREE.MathUtils.lerp(meshes.screen.rotation.x, target, 0.12);
    }
    if (group.current) group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (p - 0.5) * 0.35, 0.08);
  });

  return (
    <group ref={group} position={[0, -10, 20]}>
      <primitive object={scene} />
      {site && meshes.screen && createPortal(
        <Html transform position={[0, -0.53, -11.52]} rotation={[Math.PI / 2, 0, Math.PI]} zIndexRange={[5, 0]} style={{ pointerEvents: 'none' }}>
          <div ref={live} className="laptop-live" style={{ opacity: 0 }}>
            <iframe src={site} title="BALBOITA website, live" loading="lazy" tabIndex={-1} />
          </div>
        </Html>,
        meshes.screen
      )}
    </group>
  );
}

export default function Laptop({ children, site }) {
  const wrap = useRef(null);
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      progress.current = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <div ref={wrap} className="laptop">
      <div className="laptop-stage">
        <div className="laptop-copy">{children}</div>
        <Canvas className="laptop-canvas" camera={{ fov: 12, position: [0, -10, 220] }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Environment resolution={256}>
              <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 10, 1]} />
              <Lightformer intensity={1.5} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 2, 1]} />
              <Lightformer intensity={1.5} position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
              <Lightformer intensity={3} position={[0, 0, 10]} scale={[10, 4, 1]} />
            </Environment>
            <Model progress={progress} site={site} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload('/mac.glb');
