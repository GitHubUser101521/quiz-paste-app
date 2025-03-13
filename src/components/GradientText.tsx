
type GradientText = {
    gradient: 'yelloworange' | 'orangeblue' | 'redblue',
    text: string
}

function GradientText({ gradient, text }: GradientText) {
    const gradientClass = () => {
        if (gradient === 'yelloworange') {
            return 'bg-gradient-yw'
        } else if (gradient === 'orangeblue') {
            return 'bg-gradient-ob'
        } else {
            return 'bg-gradient-br'
        }
    }

    return (
        <div>
        <h1 className={`title pb-2 ${gradientClass()}`}>
            {text}
        </h1>
        </div>
    )
}

export default GradientText
