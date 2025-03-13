import GradientText from "../components/GradientText"

function Sec5() {
    const detail: GradientText = {
        text: 'Performance Boost',
        gradient: 'orangeblue'
    }
    const titleDetail = 'The power of cutting-edge technologies delivers lightning-fast speed and unparalleled efficiency.'

    return (
        <div className="relative">
            <img src="/sec5-bg.jpeg" className="absolute top-0 z-1 bg-center" />
            <div className="relative z-10 w-full section">
                <h1 className="title text-white">Unmatched</h1>
                <GradientText {...detail} />
                <p className="title-detail text-white">{titleDetail}</p>

                <div className="flex gap-12 w-3/7 py-30">
                    <div>
                        <img src="/sec5-card1.png" className="slide-right"/>
                    </div>
                    <div>
                        <img src="/sec5-card2.png" className="slide-left"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec5
