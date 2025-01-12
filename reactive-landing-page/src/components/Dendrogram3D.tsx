import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sampleData from "../data/sampleData.json"; // Import the updated JSON

const Dendrogram3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Helper: Create text sprites
    const createTextSprite = (text, position) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = "24px Arial";
        context.fillStyle = "#ffffff";
        context.fillText(text, 10, 50);
      }
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);
      sprite.position.copy(position);
      return sprite;
    };

    // Recursive function to create nodes and links
    const createTree = (node, depth = 0, parentPosition = new THREE.Vector3()) => {
      const x = depth * 2; // Increase spacing with depth
      const y = parentPosition.y - 2; // Vertical spacing
      const z = parentPosition.z + Math.random() - 0.5; // Slight 3D offset
      const nodePosition = new THREE.Vector3(x, y, z);

      // Create a sphere for the node
      const sphereGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(nodePosition);
      scene.add(sphere);

      // Add text to the node
      const label = createTextSprite(node.file, nodePosition.clone().add(new THREE.Vector3(0, 0.5, 0)));
      scene.add(label);

      // Draw a line to the parent node
      if (depth > 0) {
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
        const points = [parentPosition, nodePosition];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      }

      // Recursively create children
      if (node.children) {
        node.children.forEach((child, index) =>
          createTree(child, depth + 1, nodePosition)
        );
      }
    };

    // Start creating the tree from the root node
    createTree(sampleData);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

export default Dendrogram3D;
