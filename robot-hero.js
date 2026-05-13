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
  camera.position.set(0, 0.02, 7.2);

  const ambient = new THREE.AmbientLight(0xaefdf8, 1.85);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0x74fff7, 2.8);
  keyLight.position.set(2.8, 4.4, 3.6);
  scene.add(keyLight);

  const setCursor = (value) => {
    canvas.style.cursor = value;
  };
  setCursor("grab");

  // Global pointer move so eyes follow even outside the canvas.
  window.addEventListener("pointermove", (event) => {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    pointer.targetX = clamp((event.clientX - cx) / (rect.width * 1.8), -1, 1);
    pointer.targetY = clamp((event.clientY - cy) / (rect.height * 1.8), -1, 1);
  });

  canvas.addEventListener("pointerenter", () => {
    pointer.inside = true;
  });

  canvas.addEventListener("pointerleave", () => {
    pointer.inside = false;
  });

  canvas.addEventListener("pointerdown", (event) => {
    drag.active = true;
    drag.startX = event.clientX;
    drag.startY = event.clientY;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    drag.velX = 0;
    drag.velY = 0;
    drag.pointerId = event.pointerId;
    drag.moved = false;
    setCursor("grabbing");
    try {
      canvas.setPointerCapture(event.pointerId);
    } catch (_) {
      /* noop */
    }
    event.preventDefault();
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!drag.active) return;
    const dx = event.clientX - drag.lastX;
    const dy = event.clientY - drag.lastY;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    drag.rotY += dx * 0.0095;
    drag.rotX += dy * 0.006;
    drag.rotX = clamp(drag.rotX, -0.6, 0.6);
    drag.velX = dx * 0.0095;
    drag.velY = dy * 0.006;
    if (Math.abs(event.clientX - drag.startX) + Math.abs(event.clientY - drag.startY) > 4) {
      drag.moved = true;
    }
  });

  const endDrag = (event) => {
    if (!drag.active) return;
    drag.active = false;
    setCursor("grab");
    try {
      if (event && drag.pointerId != null) {
        canvas.releasePointerCapture(drag.pointerId);
      }
    } catch (_) {
      /* noop */
    }
    drag.pointerId = null;
  };

  canvas.addEventListener("pointerup", (event) => {
    const wasDrag = drag.moved;
    endDrag(event);
    if (!wasDrag) {
      waveTimer = 1.6;
      bounce = 0.45;
    }
  });

  canvas.addEventListener("pointercancel", endDrag);

  canvas.addEventListener("dblclick", () => {
    waveTimer = 2.4;
    bounce = 0.7;
  });

  canvas.addEventListener("wheel", (event) => {
    if (!pointer.inside) return;
    event.preventDefault();
    const next = clamp(stage.scale.x + event.deltaY * -0.0008, 0.62, 1.05);
    stage.scale.setScalar(next);
  }, { passive: false });

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsed = clock.getElapsedTime();
    const dt = clock.getDelta();
    const motionScale = reducedMotion.matches ? 0.3 : 1;

    pointer.x = lerp(pointer.x, pointer.targetX, 0.08);
    pointer.y = lerp(pointer.y, pointer.targetY, 0.08);

    if (!drag.active) {
      drag.rotY += drag.velX;
      drag.rotX += drag.velY;
      drag.rotX = clamp(drag.rotX, -0.6, 0.6);
      drag.velX *= 0.93;
      drag.velY *= 0.93;
    }

    hoverStrength = lerp(hoverStrength, pointer.inside ? 1 : 0, 0.08);

    waveTimer = Math.max(0, waveTimer - dt);
    bounce *= 0.92;

    const idleSpin = (drag.active || Math.abs(drag.velX) > 0.001)
      ? 0
      : Math.sin(elapsed * 0.45) * 0.18 * motionScale;

    robot.root.rotation.y = drag.rotY + idleSpin + pointer.x * 0.18;
    robot.root.rotation.x = drag.rotX - 0.04 + pointer.y * 0.08;
    robot.root.position.y = Math.sin(elapsed * 1.6) * 0.08 * motionScale + bounce;

    const headYaw = pointer.x * 0.55 - drag.rotY * 0.25;
    const headPitch = -pointer.y * 0.32 - drag.rotX * 0.2;
    robot.head.rotation.y = lerp(robot.head.rotation.y, headYaw, 0.12);
    robot.head.rotation.x = lerp(robot.head.rotation.x, headPitch, 0.12);
    robot.head.rotation.z = Math.sin(elapsed * 0.7) * 0.04 * motionScale;

    const eyeX = pointer.x * 0.04;
    const eyeY = -pointer.y * 0.025;
    robot.eyeLeft.position.x = -0.21 + eyeX;
    robot.eyeRight.position.x = 0.21 + eyeX;
    robot.eyeLeft.position.y = eyeY;
    robot.eyeRight.position.y = eyeY;

    const blinkPhase = (elapsed * 0.6) % 5;
    const blinking = blinkPhase > 4.82;
    robot.eyes.scale.y = blinking ? 0.1 : 1;

    const targetMouthScale = 1 + hoverStrength * 0.4;
    robot.mouth.scale.x = lerp(robot.mouth.scale.x, targetMouthScale, 0.12);
    robot.cheekLeft.scale.setScalar(lerp(robot.cheekLeft.scale.x, 1 + hoverStrength * 0.3, 0.1));
    robot.cheekRight.scale.setScalar(lerp(robot.cheekRight.scale.x, 1 + hoverStrength * 0.3, 0.1));

    robot.leftArm.rotation.z = -0.18 + Math.sin(elapsed * 1.3) * 0.05 * motionScale;
    robot.leftArm.rotation.x = Math.sin(elapsed * 0.9) * 0.04 * motionScale;

    if (waveTimer > 0) {
      const phase = (1.6 - Math.min(1.6, waveTimer)) * 6;
      robot.rightArm.rotation.z = lerp(robot.rightArm.rotation.z, -2.0 + Math.sin(phase) * 0.45, 0.18);
      robot.rightArm.rotation.x = Math.cos(phase) * 0.2;
    } else {
      robot.rightArm.rotation.z = lerp(robot.rightArm.rotation.z, 0.18 + Math.sin(elapsed * 1.6) * 0.06 * motionScale, 0.1);
      robot.rightArm.rotation.x = lerp(robot.rightArm.rotation.x, Math.sin(elapsed * 1.1) * 0.05 * motionScale, 0.1);
    }

    const wobbleSpeed = drag.active ? 5 : 2.4;
    robot.antennaPivot.rotation.z = Math.sin(elapsed * wobbleSpeed) * (0.08 + hoverStrength * 0.12) * motionScale;
    robot.antennaPivot.rotation.x = Math.cos(elapsed * wobbleSpeed * 0.85) * 0.05 * motionScale;

    const pulse = 0.7 + Math.sin(elapsed * 2.6) * 0.3;
    robot.antennaTip.material.emissiveIntensity = pulse * 1.6;
    robot.heart.material.emissiveIntensity = 1.2 + Math.sin(elapsed * 3.6) * 0.4;

    platform.ring.rotation.z += 0.012 * motionScale;
    platform.innerRing.rotation.z -= 0.02 * motionScale;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  host.classList.add("robot-ready");
  host.dataset.robotReady = "true";
  animate();
}
