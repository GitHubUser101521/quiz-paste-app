import { Hero, Footer, Content } from './sections/Pages';
import { Header } from './components/Components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { animateScrollTrigger } from './services/gsapFunctions';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const sectionContainerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const up = document.querySelectorAll('.slide-up')
        const left = document.querySelectorAll('.slide-left')
        const right = document.querySelectorAll('.slide-right')
        const down = document.querySelectorAll('.slide-down')
        const title = document.querySelectorAll('.title')

        up.forEach(u => {
            animateScrollTrigger(u, 'up')
        })
        left.forEach(l => {
            animateScrollTrigger(l, 'left')
        })
        right.forEach(r => {
            animateScrollTrigger(r, 'right')
        })
        down.forEach(d => {
            animateScrollTrigger(d, 'down')
        })
        
        title.forEach(t => {
            animateScrollTrigger(t, 'down')
        })

        return () => gsap.killTweensOf([right, left, up, title])
    }, [])

    return (
        <>
            <Header />
            <div ref={heroRef}><Hero /></div>
            <div ref={sectionContainerRef} className='section-container'>
                <div className='w-screen h-screen'></div>
                <Content />
                <Footer />
            </div>
        </>
    );
}

export default App;