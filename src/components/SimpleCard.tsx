
type SimpleCard = {
    bgColor: 'bg-blue' | 'bg-white',
    icon: string,
    title: string,
    content: string,
    color?: 'black' | 'white'
}

function SimpleCard({ bgColor, icon, title, content, color }: SimpleCard) {
    return (
        <div className={`rounded-4xl flex flex-col justify-between p-12 slide-up ${bgColor} text-${color}`}>
            <img src={icon} className="w-12"/>

            <div>
                <h1 className="font-bold text-4xl w-4/5">{title}</h1>
                <p className="text-xl mt-2">{content}</p>
            </div>
        </div>
    )
}

export default SimpleCard
