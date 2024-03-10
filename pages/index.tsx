import { Canvas } from '@react-three/fiber'
import { CameraControls, Gltf } from '@react-three/drei'
export default function App() {
  return (
    <div id="canvas-container">
      <Canvas style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}>
        <CameraControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <Gltf src="./COP_-_AKC_BES.gltf" />
      </Canvas>
    </div>
  )
}