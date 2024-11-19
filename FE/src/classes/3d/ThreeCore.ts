import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class ThreeCore {
  private static instance: ThreeCore;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;

  private constructor() {
    // Khởi tạo Scene
    this.scene = new THREE.Scene();

    // Khởi tạo Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 5, 10);

    // Khởi tạo Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    document.body.appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  public static getInstance(): ThreeCore {
    if (!ThreeCore.instance) {
      ThreeCore.instance = new ThreeCore();
    }
    return ThreeCore.instance;
  }

  public onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public initCameraControls() {
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.target.set(0, 0, 0);
  }

  public setPosition() {
    const rotation = this.controls.getAzimuthalAngle() - Math.PI / 2;
    const radius = 10;
    this.scene.position.x = radius * Math.cos(rotation);
    this.scene.position.z = radius * Math.sin(rotation);
  }

  public handleMouseMove = (event: MouseEvent) => {
    const mouseX = (event.clientX / window.innerWidth) - 0.5;
    const mouseY = (event.clientY / window.innerHeight) - 0.5;
    const speed = 10;

    this.camera.position.x += (mouseX * speed - this.camera.position.x) * 0.05;
    this.camera.position.y += (-mouseY * speed - this.camera.position.y) * 0.05;
    this.camera.lookAt(0, 0, 0);
  };
}

export default ThreeCore.getInstance();
