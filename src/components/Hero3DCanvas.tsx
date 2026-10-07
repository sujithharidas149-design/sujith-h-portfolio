import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090708, 0.05);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group to hold all interactive 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Ambient & Directional Lighting with Burgundy Tint
    const ambientLight = new THREE.AmbientLight(0xfff0ea, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8f0, 1.8);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    const burgundyRimLight = new THREE.PointLight(0x9B2946, 3.5, 12);
    burgundyRimLight.position.set(-4, -2, 2);
    scene.add(burgundyRimLight);

    const deepBurgundyLight = new THREE.PointLight(0x67152A, 2.5, 10);
    deepBurgundyLight.position.set(4, -3, -1);
    scene.add(deepBurgundyLight);

    // 2. Floating Central Glass Card (Simulating high-end digital dashboard / browser)
    const glassGeometry = new THREE.BoxGeometry(2.6, 1.7, 0.04);
    
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x25070e,
      roughness: 0.15,
      metalness: 0.2,
      transmission: 0.7,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const mainCard = new THREE.Mesh(glassGeometry, glassMaterial);
    mainCard.position.set(0.6, 0.2, 0.5);
    mainGroup.add(mainCard);

    // Glass Card Frame Border
    const edges = new THREE.EdgesGeometry(glassGeometry);
    const borderMaterial = new THREE.LineBasicMaterial({ color: 0x9B2946, linewidth: 1.5 });
    const cardBorder = new THREE.LineSegments(edges, borderMaterial);
    mainCard.add(cardBorder);

    // 3. Analytics Graph Curve (3D Spline line inside the digital ecosystem)
    const curvePoints = [
      new THREE.Vector3(-1.1, -0.5, 0.05),
      new THREE.Vector3(-0.6, -0.3, 0.07),
      new THREE.Vector3(-0.1, -0.4, 0.06),
      new THREE.Vector3(0.3, 0.1, 0.08),
      new THREE.Vector3(0.7, -0.05, 0.09),
      new THREE.Vector3(1.1, 0.55, 0.1)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const curveGeometry = new THREE.TubeGeometry(curve, 40, 0.025, 8, false);
    const curveMaterial = new THREE.MeshStandardMaterial({
      color: 0x9B2946,
      emissive: 0x67152A,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8
    });
    const graphTube = new THREE.Mesh(curveGeometry, curveMaterial);
    mainCard.add(graphTube);

    // Floating Data Points along the curve
    const pointGeo = new THREE.SphereGeometry(0.05, 16, 16);
    const pointMat = new THREE.MeshBasicMaterial({ color: 0xF5F0EA });
    curvePoints.forEach((pt) => {
      const pMesh = new THREE.Mesh(pointGeo, pointMat);
      pMesh.position.copy(pt);
      mainCard.add(pMesh);
    });

    // 4. Secondary Floating UI Glass Cards (Social card, KPI card)
    const smallCardGeo = new THREE.BoxGeometry(1.4, 0.9, 0.03);
    const smallCardMat = new THREE.MeshPhysicalMaterial({
      color: 0x4a0e1c,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.6,
      transparent: true,
      opacity: 0.75,
    });

    const smallCard1 = new THREE.Mesh(smallCardGeo, smallCardMat);
    smallCard1.position.set(-1.4, -0.8, 1.1);
    smallCard1.rotation.set(0.1, 0.25, -0.08);
    const smallCard1Border = new THREE.LineSegments(new THREE.EdgesGeometry(smallCardGeo), new THREE.LineBasicMaterial({ color: 0x67152A }));
    smallCard1.add(smallCard1Border);
    mainGroup.add(smallCard1);

    const smallCard2 = new THREE.Mesh(smallCardGeo, smallCardMat);
    smallCard2.position.set(1.9, 1.4, -0.3);
    smallCard2.rotation.set(-0.15, -0.2, 0.1);
    const smallCard2Border = new THREE.LineSegments(new THREE.EdgesGeometry(smallCardGeo), new THREE.LineBasicMaterial({ color: 0x9B2946 }));
    smallCard2.add(smallCard2Border);
    mainGroup.add(smallCard2);

    // 5. Abstract 3D Torus / Ring (Creative Orbit)
    const torusGeo = new THREE.TorusGeometry(2.2, 0.015, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x67152A,
      emissive: 0x4A0E1C,
      roughness: 0.3,
      metalness: 0.8
    });
    const orbitRing = new THREE.Mesh(torusGeo, torusMat);
    orbitRing.rotation.x = Math.PI / 3;
    orbitRing.rotation.y = Math.PI / 8;
    mainGroup.add(orbitRing);

    // 6. Ambient Particle Dust (Stars/Nodes in burgundy & gold)
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x9B2946);
    const color2 = new THREE.Color(0xF5F0EA);
    const color3 = new THREE.Color(0x67152A);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Interaction & Mouse Parallax with Smooth Damping (Lerp)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Viewport Visibility tracking to pause WebGL when not visible
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!prefersReducedMotion) {
        // Slow subtle movement
        mainGroup.rotation.y = targetX * 1.5 + Math.sin(elapsedTime * 0.25) * 0.08;
        mainGroup.rotation.x = -targetY * 1.5 + Math.cos(elapsedTime * 0.2) * 0.06;

        // Floating sub-cards gentle oscillation
        smallCard1.position.y = -0.8 + Math.sin(elapsedTime * 0.7) * 0.08;
        smallCard2.position.y = 1.4 + Math.cos(elapsedTime * 0.6) * 0.08;
        mainCard.position.y = 0.2 + Math.sin(elapsedTime * 0.5) * 0.04;

        orbitRing.rotation.z = elapsedTime * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // WebGL Context Lost handling
    const canvas = renderer.domElement;
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animationFrameId);
    };
    const handleContextRestored = () => {
      animate();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      glassGeometry.dispose();
      glassMaterial.dispose();
      borderMaterial.dispose();
      curveGeometry.dispose();
      curveMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
