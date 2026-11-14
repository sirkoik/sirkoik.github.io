import { Canvas } from "@react-three/fiber";
// import BoxMesh from "./BoxMesh";
import DesertObjects from "./DesertObjects";
import { Suspense } from "react";
import type { Color } from "three";

// fog is the same color as the background / sky
// const fogColor = "#F5DEB3";
const fogColor = 'lightblue';
const skyColor = 'lightblue';

export default function CactusScene() {
// Note about import. Use: const modelUrl = `${import.meta.env.BASE_URL}models/robot.glb` to avoid gotchas with github pages


    return (
        <Canvas style={{ width: '100dvw', height: '100dvh', backgroundColor: skyColor }} camera={{ position: [0, 2, 20] }} >
            <ambientLight intensity={1} />
            <fog attach="fog" args={[fogColor, 25, 35]}></fog>
            <directionalLight position={[0, 5, 5]} />
            {/* <BoxMesh /> */}
            <Suspense fallback={<mesh><boxGeometry></boxGeometry></mesh>}>
                <DesertObjects />
            </Suspense>
        </Canvas>
    )
}