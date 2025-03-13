import GradientText from "../components/GradientText"
import { SimpleCard, KeyboardSwiper } from '../components/Components'

function Sec4() {
    const detail: GradientText = {
        text: 'Effortless Navigation',
        gradient: 'redblue'
    }
    const titleDetail = 'With an expanded range of shortcuts, navigating Paste is more efficient, empowering you to perform actions with ease.'

    return (
        <div className="section bg-light-gray">
            <h1 className="title">More Shortcuts</h1>
            <GradientText {...detail} />
            <p className="title-detail">{titleDetail}</p>

            <div className="mt-30 flex flex-col px-70 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <SimpleCard 
                        bgColor="bg-blue"
                        icon="/keyboard.svg"
                        title="Key to Efficiency"
                        content="Take full control with keyboard shortcuts, propelling efficiency and facilitating a seamless experience."
                        color="white"
                    />

                    <div className="bg-white rounded-3xl pb-8 overflow-hidden slide-up">
                        <img src="/sec4-laptop.jpeg" className="rounded-3xl -mt-8 " />

                        <p className="font-medium text-center text-lg">Activate Paste</p>
                        
                        <div className="flex justify-center gap-2 mt-4">
                            <img src="/sec4-up-arrow.png" alt="Up-Arrow" className="w-1/7"/>
                            <img src="/sec4-cmd-btn.png" alt="Command" className="w-1/7"/>
                            <img src="/sec4-v-btn.png" alt="V" className="w-1/7"/>
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-4">
                    <div className="relative">
                        <KeyboardSwiper />
                        <p className="font-medium text-center w-full text-white absolute bottom-16 z-50">Cmd + R to Rename</p>
                    </div>

                    <div className="relative slide-up">
                        <img src="/sec4-bg.jpeg" className="rounded-3xl" />

                        <div className="absolute top-0 grid grid-cols-2 text-white">
                            <img src="/sec4-panel.png" className="w-full"/>
                            <div className="mt-16">
                                <h1 className="text-4xl font-bold">Make It Yours</h1>
                                <p className="text-lg">
                                    Fine-tune the shortcuts to create a tailored 
                                    <br />
                                    workflow that aligns with your preferences.
                                </p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec4
