import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function BoxMesh() {
    const bMesh = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        const a = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
        if (!bMesh.current) return;

        bMesh.current.rotation.x = a;
        bMesh.current.rotation.y = a;
    })

    return (
        <mesh ref={bMesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhongMaterial color="#00f" />
        </mesh>
    );
}