import GradientText from "../components/GradientText"

function Sec1() {
    const detail: GradientText = {
        text: 'All-New Paste',
        gradient: 'yelloworange'
    }
    const titleDetail = 'Discover unprecedented efficiency with our most advanced, intuitive, and user-centric update yet.'

    return (
        <div className="section">
            <h1 className="title">New Look. New Feel.</h1>
            <GradientText {...detail} />
            <p className="title-detail">{titleDetail}</p>

            <div className="flex justify-between items-end mt-30">
                <div className='relative flex items-end justify-center w-fit'>
                    <img src="/sec1-device3.png" className='absolute w-2/7 left-45 slide-right z-20' />
                    <img src="/sec1-device1.png" className='relative w-3/7 z-10 slide-down' />
                    <img src="/sec1-device2.png" className='absolute w-1/3 right-40 z-20 slide-left' />
                </div>
            </div>
        </div>
    )
}

export default Sec1
