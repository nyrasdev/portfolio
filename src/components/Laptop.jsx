// 3D laptop: the lid opens once when it scrolls into view.
// Model (mac.glb) from shahdinsalman23/react-macbookpro (MIT).
// The screen plays a pre-recorded scroll-through of the BALBOITA site as a video texture
// (much lighter than a live iframe), and only while the section is on screen.
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Model({ progress, video }) {
  const { scene } = useGLTF('/mac.glb');
  const poster = useTexture('/mac-screen.jpg');
  const meshes = useMemo(() => {
    const m = {};
    scene.traverse(o => { m[o.name] = o; });
    return m;
  }, [scene]);

  const videoTex = useMemo(() => {
    if (!video) return null;
    const t = new THREE.VideoTexture(video);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [video]);

  useEffect(() => {
    if (meshes.matte) {
      poster.colorSpace = THREE.SRGBColorSpace;
      // unlit material so the screen shows the site's real colors, not lit/washed out
      meshes.matte.material = new THREE.MeshBasicMaterial({ map: videoTex || poster, toneMapped: false });
    }
    if (meshes.screen) meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  }, [meshes, poster, videoTex]);

  const group = useRef();
  useFrame(() => {
    const p = progress.current;
    if (meshes.screen) {
      const target = THREE.MathUtils.degToRad(180 - p * 90);
      meshes.screen.rotation.x = THREE.MathUtils.lerp(meshes.screen.rotation.x, target, 0.12);
    }
    if (group.current) group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (p - 1) * 0.4, 0.08);
  });

  return (
    <group ref={group} position={[0, -10, 20]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Laptop({ videoSrc }) {
  const wrap = useRef(null);
  const progress = useRef(0);
  const video = useMemo(() => {
    if (!videoSrc || typeof document === 'undefined') return null;
    const v = document.createElement('video');
    v.src = videoSrc;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = 'metadata';
    v.crossOrigin = 'anonymous';
    return v;
  }, [videoSrc]);

  // open the lid once, when the laptop scrolls into view (no pinned scrolling)
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf, start;
    const animate = t => {
      if (start === undefined) start = t;
      const k = Math.min(1, (t - start) / 1400);
      progress.current = 1 - Math.pow(1 - k, 3);
      if (k < 1) raf = requestAnimationFrame(animate);
    };
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduce) progress.current = 1;
      else raf = requestAnimationFrame(animate);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  // play the video only while the section is visible
  useEffect(() => {
    if (!video || !wrap.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.05 });
    io.observe(wrap.current);
    return () => { io.disconnect(); video.pause(); };
  }, [video]);

  return (
    <div ref={wrap} className="laptop">
      <Canvas className="laptop-canvas" camera={{ fov: 12, position: [0, -10, 220] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Environment resolution={128}>
            <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={1.5} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 2, 1]} />
            <Lightformer intensity={1.5} position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
            <Lightformer intensity={3} position={[0, 0, 10]} scale={[10, 4, 1]} />
          </Environment>
          <Model progress={progress} video={video} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/mac.glb');
