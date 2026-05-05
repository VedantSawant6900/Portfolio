import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.min.js";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function createRobot() {
  const root = new THREE.Group();

  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8ff7f5,
    metalness: 0.44,
    roughness: 0.18,
    clearcoat: 0.85,
    clearcoatRoughness: 0.16,
    emissive: 0x0a4f53,
    emissiveIntensity: 0.32,
  });

  const trimMaterial = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    metalness: 0.28,
    roughness: 0.62,
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: 0xf7cf63,
    metalness: 0.5,
    roughness: 0.28,
    emissive: 0x7a5d07,
    emissiveIntensity: 0.18,
  });

  const glowMaterial = new THREE.MeshStandardMaterial({
    color: 0xbefef8,
    emissive: 0x69fff7,
    emissiveIntensity: 1.2,
    metalness: 0.1,
    roughness: 0.2,
  });

  const body = new THREE.Mesh(new THREE.BoxGeometry(1.48, 1.85, 0.92), shellMaterial);
  body.position.y = 0.2;
  root.add(body);

  const bodyTrim = new THREE.Mesh(new THREE.BoxGeometry(1.18, 1.48, 0.12), trimMaterial);
  bodyTrim.position.set(0, 0.2, 0.49);
  root.add(bodyTrim);

  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.62, 0.08), glowMaterial);
  screen.position.set(0, 0.38, 0.54);
  root.add(screen);

  const screenLineLeft = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.07, 0.03), accentMaterial);
  screenLineLeft.position.set(-0.2, 0.15, 0.58);
  root.add(screenLineLeft);

  const screenLineRight = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.07, 0.03), accentMaterial);
  screenLineRight.position.set(0.1, 0.15, 0.58);
  root.add(screenLineRight);

  const head = new THREE.Group();
  head.position.y = 1.72;
  root.add(head);

  const headMesh = new THREE.Mesh(new THREE.BoxGeometry(1.32, 1.05, 1.02), shellMaterial);
  head.add(headMesh);

  const facePlate = new THREE.Mesh(new THREE.BoxGeometry(1.02, 0.72, 0.08), trimMaterial);
  facePlate.position.z = 0.53;
  head.add(facePlate);

  const eyes = new THREE.Group();
  eyes.position.set(0, 0.08, 0.58);
  head.add(eyes);

  const eyeLeft = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 24), glowMaterial);
  eyeLeft.position.x = -0.2;
  eyes.add(eyeLeft);

  const eyeRight = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 24), glowMaterial);
  eyeRight.position.x = 0.2;
  eyes.add(eyeRight);

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.07, 0.03), accentMaterial);
  mouth.position.set(0, -0.18, 0.59);
  head.add(mouth);

  const antennaPivot = new THREE.Group();
  antennaPivot.position.set(0.18, 0.52, 0);
  head.add(antennaPivot);

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.42, 16), accentMaterial);
  antenna.position.y = 0.2;
  antennaPivot.add(antenna);

  const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), glowMaterial);
  antennaTip.position.y = 0.44;
  antennaPivot.add(antennaTip);

  const leftArm = new THREE.Group();
  leftArm.position.set(-0.95, 0.92, 0);
  root.add(leftArm);

  const leftUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.94, 0.28), shellMaterial);
  leftUpperArm.position.y = -0.45;
  leftArm.add(leftUpperArm);

  const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), accentMaterial);
  leftHand.position.y = -0.95;
  leftArm.add(leftHand);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.95, 0.92, 0);
  root.add(rightArm);

  const rightUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.94, 0.28), shellMaterial);
  rightUpperArm.position.y = -0.45;
  rightArm.add(rightUpperArm);

  const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), accentMaterial);
  rightHand.position.y = -0.95;
  rightArm.add(rightHand);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.96, 0.34), shellMaterial);
  leftLeg.position.set(-0.34, -1.06, 0);
  root.add(leftLeg);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.96, 0.34), shellMaterial);
  rightLeg.position.set(0.34, -1.06, 0);
  root.add(rightLeg);

  const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.16, 0.72), trimMaterial);
  leftFoot.position.set(-0.34, -1.58, 0.1);
  root.add(leftFoot);

  const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.16, 0.72), trimMaterial);
  rightFoot.position.set(0.34, -1.58, 0.1);
  root.add(rightFoot);

  const shoulderLeft = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), accentMaterial);
  shoulderLeft.position.set(-0.95, 0.92, 0);
  root.add(shoulderLeft);

  const shoulderRight = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), accentMaterial);
  shoulderRight.position.set(0.95, 0.92, 0);
  root.add(shoulderRight);

  root.scale.setScalar(1.05);

  return {
    root,
    head,
    eyes,
    antennaPivot,
    leftArm,
    rightArm,
  };
}

function createPlatform() {
  const platform = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.78, 1.98, 0.26, 48),
    new THREE.MeshStandardMaterial({
      color: 0x102038,
      metalness: 0.52,
      roughness: 0.42,
      emissive: 0x07101f,
      emissiveIntensity: 0.28,
    }),
  );
  base.position.y = -1.78;
  platform.add(base);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.06, 18, 64),
    new THREE.MeshStandardMaterial({
      color: 0x69fff7,
      emissive: 0x33f7ff,
      emissiveIntensity: 0.95,
      metalness: 0.22,
      roughness: 0.25,
    }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -1.64;
  platform.add(ring);

  return { platform, ring };
}

export function initRobotHero(host) {
  if (!host || host.dataset.robotReady === "true" || !window.WebGLRenderingContext) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.className = "robot-hero-canvas";
  host.prepend(canvas);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch (error) {
    canvas.remove();
    throw error;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.02, 6.95);

  const ambient = new THREE.AmbientLight(0xaefdf8, 1.85);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0x74fff7, 2.8);
  keyLight.position.set(2.8, 4.4, 3.6);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xffd166, 1.4);
  rimLight.position.set(-3.6, 2.2, -2.4);
  scene.add(rimLight);

  const fillLight = new THREE.PointLight(0x5aa9ff, 18, 10, 2);
  fillLight.position.set(0, 1.2, 2.8);
  scene.add(fillLight);

  const stage = new THREE.Group();
  stage.rotation.x = -0.08;
  stage.position.y = -0.08;
  stage.scale.setScalar(0.88);
  scene.add(stage);

  const robot = createRobot();
  const platform = createPlatform();
  stage.add(robot.root);
  stage.add(platform.platform);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let pointerTargetX = 0;
  let pointerTargetY = 0;
  let pointerX = 0;
  let pointerY = 0;
  let spinBoost = 0;

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) {
      return;
    }
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();

  host.addEventListener("pointermove", (event) => {
    const rect = host.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    pointerTargetX = clamp((x - 0.5) * 2, -1, 1);
    pointerTargetY = clamp((y - 0.5) * 2, -1, 1);
  });

  host.addEventListener("pointerleave", () => {
    pointerTargetX = 0;
    pointerTargetY = 0;
  });

  host.addEventListener("click", () => {
    spinBoost += 0.9;
  });

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsed = clock.getElapsedTime();
    const motionScale = reducedMotion.matches ? 0.35 : 1;

    pointerX += (pointerTargetX - pointerX) * 0.06;
    pointerY += (pointerTargetY - pointerY) * 0.06;
    spinBoost *= 0.94;

    robot.root.position.y = Math.sin(elapsed * 1.55) * 0.1 * motionScale - 0.02;
    robot.root.rotation.y = Math.sin(elapsed * 0.45) * 0.16 * motionScale + pointerX * 0.45 + spinBoost;
    robot.root.rotation.x = -0.06 + pointerY * 0.18;
    robot.head.rotation.y = Math.sin(elapsed * 0.9) * 0.18 * motionScale;
    robot.head.rotation.z = Math.sin(elapsed * 0.7) * 0.06 * motionScale;
    robot.leftArm.rotation.z = -0.42 + Math.sin(elapsed * 1.45) * 0.12 * motionScale;
    robot.rightArm.rotation.z = 0.52 + Math.sin(elapsed * 2.4) * 0.48 * motionScale;
    robot.rightArm.rotation.x = Math.cos(elapsed * 1.65) * 0.16 * motionScale;
    robot.antennaPivot.rotation.z = Math.sin(elapsed * 2.8) * 0.14 * motionScale;
    platform.ring.rotation.z += 0.01 * motionScale;
    stage.rotation.y = pointerX * 0.12;

    const blinkPhase = (elapsed * 0.8) % 4;
    const blinkScale = blinkPhase > 3.78 ? 0.12 : 1;
    robot.eyes.scale.y = blinkScale;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  host.classList.add("robot-ready");
  host.dataset.robotReady = "true";
  animate();
}
