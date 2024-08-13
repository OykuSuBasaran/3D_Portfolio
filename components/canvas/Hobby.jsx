import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';


const Hobby = ({ isMobile }) => {
    const hobbiE = useGLTF('./cartridge/scene.gltf')
    return(
        <mesh>
            <hemisphereLight intensity={1}/>
            <pointLight intensity={5} position={[-2, -4, 5]} color="#ffffff"/>
            <pointLight intensity={50} position={[-4, -10, 9]} color="#ffffff"/>
            <spotLight  
            position={[-4, -10, 9]}
            angle={0.2}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
            />
            <primitive
                object={hobbiE.scene} 
                scale={isMobile ? 28 : 54}
                position={isMobile ? [-4, -3.5, 0] : [-2, -7, 10]}
                rotation={[-0.01, 1, 0]}/>
        </mesh>
    )
}

const Hobby1 = ({ isMobile }) => {
  const parachute = useGLTF('./paraglide/scene.gltf')
  return(
  <mesh>
        <hemisphereLight intensity={3}/>
            <pointLight intensity={3} />
            <spotLight 
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
            />
        <primitive
            object={parachute.scene}
            scale={isMobile ? 0.2 : 0.4}
            position={isMobile ? [4, -2, 0] : [10, -4, 0]}
            rotation={[-0.01, 0, 0]}
            />
  </mesh>
  )
}

const HobbyCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
    /* The only thing tis useEffect do is changing isMobile variable*/
  useEffect(() => {
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    //Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    //Add the callback funciton as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return(
    <Canvas frameloop='demand'
    shadows
    camera={{position: [35, 3, 35], fov:25}}
    gl={{preserveDrawingBuffer:true}}>
        <Suspense>
            <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}/>
            <Hobby isMobile={isMobile}/>
            <Hobby1 isMobile={isMobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default HobbyCanvas
