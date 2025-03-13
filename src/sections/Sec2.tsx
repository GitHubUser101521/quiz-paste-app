import GradientText from "../components/GradientText"

function Sec2() {
    const detail: GradientText = {
        text: 'Your Space, Your Rules',
        gradient: 'yelloworange'
    }

    const titleDetail = 'Whether you want more items or need larger previews, Paste adapts to your needs. It’s not just about flexibility, it’s about crafting a workspace that elevates productivity.'

    return (
        <div className="section bg-light-gray">
            <h1 className="title">Resizable Window</h1>
            <GradientText {...detail} />
            <p className="title-detail">{titleDetail}</p>

            <div className="px-70 flex flex-col items-center mt-30 gap-4">
                <div className="bg-white p-8 rounded-3xl slide-up">
                    <img src="/sec2-laptop.jpeg" />
                    <p className="text-center my-4">The compact size maximizes display without sacrificing content.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 slide-up">
                    <img src="/sec2-card1.png" />
                    <img src="/sec2-card2.png" />
                </div>
            </div>
        </div>
    )
}

export default Sec2
