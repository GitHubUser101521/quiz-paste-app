import GradientText from "../components/GradientText"
import { SimpleCard } from '../components/Components'

function Sec6() {
    const detail: GradientText = {
        text: 'Evolving Impressions',
        gradient: 'yelloworange'
    }
    const titleDetail = 'We’ve breathed new life into our visual identity, refreshing the icons with modern aesthetics that personify elegance and sophistication.'

    return (
        <div className="section bg-light-gray">
            <h1 className="title">New Icon</h1>
            <GradientText {...detail} />
            <p className="title-detail">{titleDetail}</p>

            <div className="grid grid-cols-2 grid-rows-2 px-70 mt-20 gap-6">
                <SimpleCard 
                    bgColor="bg-white"
                    icon="/click-icon.svg"
                    title="Every Detail Matters"
                    content="The new icon animations deliver intuitive feedback, enhancing user interaction."
                />

                <div className="relative flex justify-center items-center overflow-hidden slide-up">
                    <img src="/sec6-orange-bg.jpeg" className="rounded-4xl" />

                    <div className="absolute flex -m-28">
                        <img src="/sec6-note-app.png" className="w-28"/>
                        <img src="/sec6-smile-app.png" className="w-28"/>
                        <img src="/paste-app-icon.png" className="w-28 scale-130"/>
                        <img src="/sec6-gallery.png" className="w-28"/>
                        <img src="/sec6-email-app.png" className="w-28"/>
                    </div>
                </div>

                <div className="slide-up">
                    <img src="/sec6-mobile.jpeg" className="rounded-4xl" />
                </div>
                
                <SimpleCard 
                    bgColor="bg-blue"
                    icon="/sound-icon.svg"
                    title="Audible Confidence"
                    content="The distinctive sound feedback streamlines your workflow and provides the peace of mind that everything is under control."
                    color="white"
                />
            </div>
        </div>
    )
}

export default Sec6
