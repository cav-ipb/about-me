import React, { useRef, useState } from "react";
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Material, Mesh, ShaderMaterial } from "three";
import { easing } from "maath";


interface FadingImageDisplayComponentProps {
    images: string[];
}

const FadingImageDisplayComponent: React.FC<FadingImageDisplayComponentProps> = ({images}) => {

    const ref = useRef<any>(null);
    const textures = useLoader(TextureLoader, images);
    const [transition, setTransition] = useState(0);


    const imageFadeMaterial =  new ShaderMaterial(
        {
            uniforms: {
                transition: {value: transition},
                texture1: {value: textures[0]},
                texture2: {value: textures[1]}
            },
            vertexShader:  `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
            fragmentShader: `
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform float transition;
  varying vec2 vUv;

  void main() {
    vec4 tex1 = texture2D(texture1, vUv);
    vec4 tex2 = texture2D(texture2, vUv);
    gl_FragColor = mix(tex1, tex2, transition);
  }
`
        },   
    );

    useFrame(({ clock }) => {
        // Animate the transition value
        const elapsedTime = clock.getElapsedTime();
        if (elapsedTime - clock.oldTime > 5000){
            console.log("here");
            setTransition(1);
        }
        else setTransition(0); // transition oscillates between 0 and 1
    });
    return <>
            <mesh ref={ref} material={imageFadeMaterial}>
                <planeGeometry args={[4, 4]}/>
            </mesh>
    
    </>
}

export default FadingImageDisplayComponent;