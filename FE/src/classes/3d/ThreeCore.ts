import * as THREE from "three";

class ThreeCore {
  private static instance: ThreeCore;
  //Các thuộc tính chung của threeJs sẽ được thiết lập sẵn.
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public light: THREE.AmbientLight;

  constructor() {
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
    
    document.body.appendChild(this.renderer.domElement);

    // Ánh sáng
    this.light = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.light);

    //Xử lý thay đổi kích thước.
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  //đảm bảo chỉ có 1 instance.
  public static getInstance = (): ThreeCore => {
    if (!ThreeCore.instance) {
      ThreeCore.instance = new ThreeCore();
    }
    return ThreeCore.instance;
  };

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default ThreeCore.getInstance();
