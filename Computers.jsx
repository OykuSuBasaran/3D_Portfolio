import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./ibm_pcjr_4863_computer-freepoly.org/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1}/>
      <pointLight intensity={1} />
      <spotLight 
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene} 
        scale={isMobile ? 2.0 : 4.0}
        position={isMobile ? [5, -1.5, 1] : [11, -1.5, 0]}
        rotation={[-0.01, 0.5, 0]}/>

    </mesh>
  )
}

const ComputersCanvas = () => {
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
  return (
    <Canvas frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}/>
          <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas