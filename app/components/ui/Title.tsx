interface TitleProps {
    text: string;
    color?: string;
    isCenter?: boolean;
    highlight?: string;
}

export const Title = ({ text, color = 'text-white', isCenter = false, highlight }: TitleProps) => {
    if (highlight) {
        const parts = text.split(highlight)

        return (
            <h2 className={`text-4xl font-extrabold ${isCenter ? 'text-center' : 'text-left'} ${color}`}>
                {parts[0]}
                <span className='line-through px-2'>{highlight}</span>
                {parts[1]}
            </h2>
        )
    }

    return (
        <h2 className={`text-4xl font-extrabold ${isCenter ? 'text-center' : 'text-left'} ${color}`}>
            {text}
        </h2>
    )
}
