import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import assetsUrl from "../assets/CactusAssets.glb?url"
import { Group } from "three";
import { useRef } from "react";
import { Clone, Grid } from "@react-three/drei";

const Models = () => {
    const sceneryRef = useRef<Group>(null);

    // const bMesh = useRef<Mesh>(null);
    // const bMesh2 = useRef<Mesh>(null);
    const gltf = useLoader(GLTFLoader, assetsUrl);
    const cactus = gltf.scene.getObjectByName("Cactus");
    const rock1 = gltf.scene.getObjectByName("Rock1");
    const rock2 = gltf.scene.getObjectByName("Rock2");
    const rock3 = gltf.scene.getObjectByName("Rock3");
    const grass = gltf.scene.getObjectByName("Grass");
    const gridRef = useRef<any>(null);

    const SPEED = 2;
    const CELL_SIZE = 2;

    const objects2 = [cactus, rock1, rock2, rock3, grass];
    const sceneObjects:any[] = [];
    objects2.forEach((obj) => {
        if (obj) {
            // rotation={[0,Math.random()*2*Math.PI,0]}
            let loopCount = 5;
            let scale:[number, number, number] = [obj.scale.x, obj.scale.y, obj.scale.z];

            if (obj.name === "Cactus") {
                loopCount = 2;
                scale = [obj.scale.x * 0.4, obj.scale.y * 0.4, obj.scale.z * 0.4];
            }

            for (let x = 0; x < loopCount; x++) {
                // console.log(x);
                sceneObjects.push(
                    <Clone 
                        object={obj} 
                        key={obj.name+"obj"+x} 
                        position={[Math.random() * 20 - 10, 0, Math.random() * 40 - 40]} 
                        scale={scale}
                    />
                );
            }
        }
    });

    // console.log(sceneObjects);

    // Place initial objects randomly on the grid.
    if (sceneryRef.current) {
        for (const obj of sceneryRef.current.children) {
            obj.position.x = Math.random() * 20 - 10;
            obj.position.z = Math.random() * 20 - 10;
        }
    }

    useFrame((_, delta) => {
        const scenery = sceneryRef.current;
        
        if (!scenery) return;
        
        const sceneryZ = scenery.position.z;
        // console.log(sceneryZ);


        const obj3pos = scenery.children[3].position.z + sceneryZ;
        // console.log(obj3pos);
        if (obj3pos > 20) {
            scenery.children[3].position.z = -10;
        }

        for (const obj of scenery.children) {
            obj.position.z += SPEED * delta;
            if (obj.position.z > 20) {
                obj.position.z = Math.random() * 40 - 40;
                obj.position.x = Math.random() * 20 - 10;
            }
        }

        if (gridRef.current) {
            gridRef.current.position.z += SPEED * delta % CELL_SIZE;
        }
    })

    return <>
        {/* TODO: implement suggested ref and Drei Clone-based reuse changes. */}
        <group ref={sceneryRef}>
            {sceneObjects}
            {/* {cactus && <primitive object={cactus} scale={0.4} ref={bMesh} />}
            {rock1 && <primitive object={rock1} scale={0.4} position={[1, 0, 1]} ref={bMesh2} />}
            {rock2 && <primitive object={rock2} scale={0.4} position={[2, 0, 3]} />}
            {rock3 && <primitive object={rock3} scale={0.4} position={[-3, 0, -2]} />}
            {grass && <primitive object={grass} scale={0.1} position={[5, 0, -1]} />} */}
            {/* {objects[0] && <Clone object={objects[0]} position={[3,0,4]}/>} */}
            {/* {objects[0] && <Clone object={objects[0]} position={[5,0,-5]}/>} */}
        </group>

        {/* {[1,1,1,1].map((object, index) => {
                {objects[0] && <Clone object={objects[0]} position={[Math.random() * 10, Math.random() * 10, 0]} />};
        })} */}


        {/* <axesHelper args={[5]} position={[0, 0, 10]}></axesHelper> */}
        <mesh visible position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[20,20]} />
            <meshStandardMaterial color="brown" />
        </mesh>


        <Grid 
            cellSize = {CELL_SIZE}
            followCamera={true}
            infiniteGrid={true} 
            fadeDistance={50}
            fadeStrength={5}
            sectionThickness={0} 
            sectionColor={"rgb(100, 31, 7)"} 
            cellThickness={1} 
            cellColor={"rgb(100, 61, 7)"} 
            ref={gridRef}
        />
        {/* <OrbitControls /> */}
    </>
}

export default function DesertObjects() {
    return <Models />;
}