import { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeCore from "../../classes/3d/ThreeCore";

export const useTerrain = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Tạo geometry cho terrain
    const geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
    const material = new THREE.MeshStandardMaterial({
      color: 0x228b22,
      wireframe: false,
    });
    const terrain = new THREE.Mesh(geometry, material);

    // Xoay terrain sao cho nó nằm phẳng trên mặt đất
    terrain.rotation.x = -Math.PI / 2;
    terrain.position.y = -0.5;
    ThreeCore.scene.add(terrain);

    // Thêm ánh sáng
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    ThreeCore.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(100, 200, 100).normalize();
    ThreeCore.scene.add(directionalLight);

    // Thêm đường chéo
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const createDiagonalLine = (points: THREE.Vector3[]) => {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      return new THREE.Line(lineGeometry, lineMaterial);
    };

    const diagonalLine1 = createDiagonalLine([
      new THREE.Vector3(-500, 0.1, -500),
      new THREE.Vector3(500, 0.1, 500),
    ]);

    const diagonalLine2 = createDiagonalLine([
      new THREE.Vector3(-500, 0.1, 500),
      new THREE.Vector3(500, 0.1, -500),
    ]);

    ThreeCore.scene.add(diagonalLine1, diagonalLine2);

    // Thiết lập camera và controls
    ThreeCore.camera.position.set(0, 150, 200);
    ThreeCore.camera.lookAt(0, 0, 0);
    ThreeCore.initCameraControls();
    ThreeCore.setPosition();

    // Gắn renderer vào container nếu tồn tại
    if (containerRef.current) {
      containerRef.current.appendChild(ThreeCore.renderer.domElement);
    }

    // Lắng nghe sự kiện controls thay đổi để render lại
    const handleControlChange = () => ThreeCore.render();
    ThreeCore.controls.addEventListener('change', handleControlChange);

    // Xử lý sự kiện resize
    const handleResize = () => ThreeCore.onWindowResize();
    window.addEventListener("resize", handleResize);

    // Lắng nghe sự kiện mousemove
    window.addEventListener("mousemove", ThreeCore.handleMouseMove);

    // Cleanup khi component unmount
    return () => {
      ThreeCore.scene.remove(
        terrain,
        ambientLight,
        directionalLight,
        diagonalLine1,
        diagonalLine2
      );
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();

      ThreeCore.controls.removeEventListener('change', handleControlChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", ThreeCore.handleMouseMove);
    };
  }, []);

  return containerRef;
};
