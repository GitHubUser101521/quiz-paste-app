import { useEffect, useRef } from "react"
import gsap from 'gsap'
import GradientText from "../components/GradientText"

function Sec2b() {
    const imgRef = useRef(null)

    useEffect(() => {

        gsap.to(imgRef.current,
            {
                scale: .2,
                ease: "power2.out",
                duration: 1,
                scrollTrigger: {
                    trigger: '.sec2b-trigger',
                    start: 'top bottom',
                    end: 'bottom 20%',
                    scrub: true,
                }
            }
        )
    }, [])

    return (
        <div className='relative sec2b-trigger'>
            <img src="/sec2b-bg.jpeg" className="w-full" />

            <div className="absolute top-0 flex flex-col justify-center items-center h-full">
                <div className="absolute top-40 slide-down flex flex-col items-center">
                    <h1 className="title text-white">Compact Mode</h1>
                    <GradientText 
                        gradient="orangeblue"
                        text="Maximize Visibility,"
                    />
                    <GradientText 
                        gradient="orangeblue"
                        text="Minimize Clutter"
                    />
                    <p className="title-detail text-white">When space is at a premium, Paste goes the extra mile adapting its layout to fit even more content within a compact space</p>
                </div>
                <img src="/sec2b-woman.jpeg" className="sec2b-woman" ref={imgRef}/>
                <p className="title-detail text-white w-3/4">Just shrink your window and watch Paste compact smoothly, giving you a bird's-eye view of your content.</p>
            </div>
        </div>
    )
}

export default Sec2b
