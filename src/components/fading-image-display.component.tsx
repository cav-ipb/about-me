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
    const [count, setCount] = useState(0);
    const [previousTransition, setPreviousTransition] = useState(0);




    const imageFadeMaterial =  new ShaderMaterial(
        {
            uniforms: {
                transition: {value: transition},
                texture1: {value: textures[count % 2 ? count % textures.length :  (count + 1) % textures.length]},
                texture2: {value: textures[count % 2 ? (count + 1) % textures.length : count % textures.length]}
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
        const elapsedTime = clock.getElapsedTime();
        const transitionValue = (Math.sin(elapsedTime) + 1) / 2;
        
        if (Math.min(transition, transitionValue, previousTransition) === transition || Math.max(transition, transitionValue, previousTransition) === transition){
            setCount((previousCount) => previousCount + 1);
        }

        setTransition(transitionValue);
        setPreviousTransition(transition);


    });


    return <>
            <mesh ref={ref} material={imageFadeMaterial}>
                <planeGeometry args={[4, 4]}/>
            </mesh>
    
    </>
}

export default FadingImageDisplayComponent;