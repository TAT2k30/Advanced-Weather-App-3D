import { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeCore from "../../classes/3d/ThreeCore";

export const useTerrain = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);  // ref cho div container

  useEffect(() => {
    // Tạo mặt phẳng terrain rộng hơn
    const points = [];
    points.push(new THREE.Vector3(-100, 0, 0));
    points.push(new THREE.Vector3(0, 100, 0));
    points.push(new THREE.Vector3(100, 0, 0));
    points.push(new THREE.Vector3(100, 0, 0));

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    ThreeCore.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(100, 200, 100).normalize();
    ThreeCore.scene.add(directionalLight);

    // Tạo một đường line (sử dụng các điểm)
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const line = new THREE.Line(lineGeometry, lineMaterial);

    // Thêm line vào scene
    ThreeCore.scene.add(line);

    // Đặt vị trí của camera để nhìn thấy mặt phẳng rộng hơn
    ThreeCore.camera.position.set(0, 150, 200);
    ThreeCore.camera.lookAt(0, 0, 0);

    // Gắn renderer vào container
    if (containerRef.current) {
      containerRef.current.appendChild(ThreeCore.renderer.domElement);
    }

    // Hàm render - Tối ưu hóa để giảm giật lag
    let needRender = true;
    const animate = () => {
      if (needRender) {
        requestAnimationFrame(animate);
        ThreeCore.render();
        needRender = false;
      }
    };

    // Lắng nghe sự kiện resize và mousemove để tối ưu lại rendering
    window.addEventListener("resize", () => (needRender = true));
    window.addEventListener("mousemove", () => (needRender = true));

    animate();

    // Cleanup khi component unmount
    return () => {
      ThreeCore.scene.remove(terrain, ambientLight, directionalLight, line);
      geometry.dispose();
      material.dispose();
      ThreeCore.renderer.dispose();
    };
  }, []);

  return containerRef;  // Trả về ref để sử dụng trong component
};
