import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const CoralReef = () => {


    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className='relative'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                width='100%'
                height='300px'
                options={{

                    fullScreen: {
                        enable: false,
                        zIndex: 0
                    },
                    background: {
                        color: {
                            value: "#0981D1",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        number: {
                            value: 40,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "image",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                            image: {
                                src: "https://static.vecteezy.com/system/resources/thumbnails/011/286/620/small/seaweeds-underwater-ocean-plants-sea-coral-elements-watercolor-illustration-png.png",
                                width: 200,
                                height: 200
                            }
                        },
                        opacity: {
                            value: 0.89716301422833176,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 88.67442924896818,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 35,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 2.725800503471389
                        },
                        move: {
                            enable: true,
                            speed: 2.810236182596568,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    detectRetina: true,
                }}
            />
            <div className='absolute top-12 left-0 right-0'>
                <div className='flex flex-col gap-4 justify-center m-auto md:max-w-xl max-w-[90%]'>
                    <h1 className='text-center tracking-wider text-white font-bold text-5xl italic uppercase'>The importance of the coral reef</h1>
                    <p className='text-center text-white text-2xl'>Coral reefs cover only 1% of all the oceans but hosts 25% of the marine life. It is one of the most important and threatened ecosystem in the world. Why?</p>
                </div>
            </div>
        </div>
    );
}

export default CoralReef