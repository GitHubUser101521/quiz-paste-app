import { useEffect, useRef } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const bgRef = useRef(null)
    const text1Ref =  useRef(null)
    const text2Ref =  useRef(null)
    const gpaRef = useRef(null)
    const gpaIconRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        const bg = bgRef.current
        const text1 = text1Ref.current
        const text2 = text2Ref.current
        const gpa = gpaRef.current
        const gpaIcon = gpaIconRef.current
        const scroll = scrollRef.current

        gsap.set(bg, { display: 'none', opacity: 0 })
        gsap.set(text1, { display: 'none', opacity: 0, y: 100 })
        gsap.set(text2, { display: 'none', opacity: 0, y: 100 })
        gsap.set(gpa, { display: 'none', opacity: 0, scale: 100 })
        gsap.set(gpaIcon, { display: 'none', opacity: 0, x: -1000, y: 900, scale: 6, overflow: 'hidden' })
        gsap.set(scroll, { display: 'none', opacity: 0 })

        tl
        .to(
            bg,
            {
                duration: .5
            }
        )
        // Text1
        .to(
            text1,
            {
                display: 'block',
                opacity: 1,
                duration: 0.5,
                y: 0,
                ease: "expo.out"
            }
        )
        .to(
            text1,
            {
                y: 0,
                duration: 0.5
            }
        )
        .to(
            text1,
            {
                display: 'none',
                opacity: 0,
                duration: 0.3,
                y: -100
            }
        )
        // Text2
        .to(
            text2,
            {
                display: 'block',
                opacity: 1,
                duration: 0.5,
                ease: "expo.out",
                y: 0
            }
        )
        .to(
            text2,
            {
                
                duration: 0.5
            }
        )
        .to(
            text2,
            {
                display: 'none',
                opacity: 0,
                duration: 0.3,
                y: -100
            }
        )
        // gpa intro
        .to(
            gpa,
            {
                display: 'block',
                opacity: 1,
                scale: 1.5,
            }
        )
        .to(
            gpa,
            {
                duration: .5,
            }
        )
        .to(
            gpa,
            {
                display: 'none',
                duration: 0.5
            }
        )
        // gpaIcon intro
        .to(
            gpaIcon,
            {
                display: 'block',
                opacity: 1
            }
        )
        .to(
            gpaIcon,
            {
                scale: 1,
                x: 0,
                y: 0,
                duration: 1.5,
            }
        )
        .to(
            gpaIcon,
            {
                scale: .3,
                y: -90
            }
        )
        .to(
            gpaIcon,
            {
                display: 'none',
            }
        )
        // bg intro
        .to(
            bg,
            {
                display: 'block',
                opacity: 1,
                backgroundSize: 'cover',
                onComplete: () => {
                    gsap.fromTo(
                        scroll,
                        { display: 'block', opacity: 1 },
                        { y: -10, yoyo: true, repeat: -1 }
                    )
                }
            }
        )

        gsap.from('.animation-container', {
            scrollTrigger: {
                trigger: '.animation-container',
                start: 'top top', 
                end: 'bottom top', 
                scrub: true, 
            },
        });

        return () => gsap.killTweensOf(tl)
    }, [])

    return (
        <div className='bg-white h-screen w-full flex flex-col justify-center items-center text-center animation-container absolute z-100 overflow-hidden'>
            <img src="/hero-bg.png" ref={bgRef} className="w-screen h-screen"/>
            <h1 ref={text1Ref} className="text-7xl font-bold">Your Workflow Amplified</h1>
            <h1 ref={text2Ref} className="text-7xl font-bold">Once Again</h1>
            <img src="/gpa.png" ref={gpaRef}/>
            <img src="/gpa-icon.png" ref={gpaIconRef} />
            <button 
                className="bg-white rounded-full aspect-square w-16 absolute bottom-12"
                ref={scrollRef}
            >
                <img src="/down-arrow.svg" alt="down" className="w-6 mx-auto"/>
            </button>
        </div>
    )
}

export default Hero
