import { useEffect, useRef, useCallback } from "react";
import './banner.css'
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Banner = () => {
    const ref = useRef();
    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        //await console.log(container);
    }, []);

return (
    <>
    <div className="flex flex-col place-content-center items-center w-full h-80 z-0" id="bannerContainer">
        <div className="flex place-content-center w-full">
        <div className="text-6xl z-1" data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            data-aos-offset="100">another portfolio</div>
            </div>
            <div className="flex flex-row items-center place-content-center w-full mt-16"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            data-aos-offset="200">
                <button className="mx-5">experience</button>
                <button className="mx-5">biography</button>
            </div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                    },
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#839788",
                    },
                    links: {
                        color: "#BFD7EA",
                        distance: 100,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    //   image: {
                    //      src: 
                    //   }
                },
                detectRetina: true,
            }}
/> 
    </div>
   </>
);
}

export default Banner;
