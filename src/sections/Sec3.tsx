import { JSX, useEffect } from "react"
import GradientText from "../components/GradientText"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Panel = {
    index: number
}

function AccuracyCard() {
    return (
        <div className="bg-light-gray grid grid-cols-2 relative p-12 pr-0 rounded-3xl overflow-hidden slide-up">
            <div className="flex flex-col justify-end">
                <h1 className="text-4xl font-bold">
                    Accuracy 
                    <br />
                    and Precision
                </h1>
                <p className="text-lg w-3/4 mt-2">No unnecessary indents to create more space for your content.</p>
            </div>
            <img src="/sec3-panels.jpeg" className="-my-16"/>
        </div>
    )
}

function OrangeCard() {
    return (
        <div>
            <div className="text-white relative slide-up">
                <img src="/sec3-orange-bg.jpeg" className="rounded-3xl"/>
                
                <div className="absolute top-0 z-10 p-12 w-full">
                    <h1 className="text-4xl font-bold">Efficiency <br /> at the Core</h1>
                    <p className="text-lg w-7/8 mt-2">
                        We’ve prioritized clarity, revamping all UI elements for seamless and intuitive interactions.
                    </p>

                    <img src="/sec3-elements.png" />
                </div>
            </div>
        </div>
    )
}

function InfoCard() {
    return (
        <div className="flex flex-col gap-4 slide-up">
            <div className="bg-light-gray rounded-3xl h-full flex justify-center items-center">
                <img src="/sec3-panel-split.png" className="w-3/4"/>
            </div>

            <div className="bg-medium-gray p-12 rounded-3xl">
                <p className="text-white text-lg mb-8">The new color palette is optimized for both light and dark themes.</p>
                <img src="/sec3-color-palette.jpeg" />
            </div>
        </div>
    )
}

function Panel({ index }: Panel) {
    let paddedIndex = ''

    if ( index < 10 ) {
        paddedIndex = '0' + index
    } else {
        paddedIndex = index + ''
    }

    return (
        <>
            <img src={`/sec3-panel-${paddedIndex}.png`} className="panel" />
        </>
    )
}

function Sec3() {
    const detail: GradientText = {
        text: 'Elegance Infused with Efficiency',
        gradient: 'redblue'
    }
    const titleDetail = 'Every pixel has been refined and polished with care, resulting in a harmonious balance between aesthetics and usability.'

    const renderPanel = () => {
        let html: JSX.Element[] = []
        for (let i = 0; i <= 12; i++) {
            html.push(<Panel index={i} key={i}/>)
        }

        return html
    }

    useEffect(() => {
        const panels = document.querySelectorAll('.panel')

        panels.forEach(panel => {
            panel.addEventListener('mouseenter', () => {
                gsap.to(panel,
                    {
                        y: -100,
                        duration: 0.3
                    }
                )
            })

            panel.addEventListener('mouseleave', () => {
                gsap.to(panel,
                    {
                        y: 0,
                        duration: 0.2
                    }
                )
            })
        })

        panels.forEach((panel, index) => {
            gsap.set(panel, { x: 300 * (index + 1)})

            gsap.to(panel,
                {
                    x: 0,
                    duration: 0.1 * index,
                    stagger: 0.2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: '.sec3-trigger',
                        start: 'top top',
                        end: '30% 50%',
                        scrub: true,
                    }
                }
            )
        })

        return () => gsap.killTweensOf(panels)
    }, [])

    return (
        <div className="section sec3-trigger">
            <h1 className="title">Fresh New Look</h1>
            <GradientText {...detail} />
            <p className="title-detail">{titleDetail}</p>

            <div className="flex my-40 justify-center">
            {
                renderPanel()
            }
            </div>

            <div className="mt-10 px-70 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <OrangeCard />
                    <InfoCard />
                </div>

                <AccuracyCard />
            </div>
        </div>
    )
}

export default Sec3
