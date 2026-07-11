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
            <h2 className={`md:text-4xl text-3xl font-extrabold text-left ${isCenter ? 'md:text-center' : ''} ${color}`}>
                {parts[0]}
                <span className='line-through px-2'>{highlight}</span>
                {parts[1]}
            </h2>
        )
    }

    return (
        <h2 className={`md:text-4xl text-3xl font-extrabold text-left ${isCenter ? 'md:text-center' : ''} ${color}`}>
            {text}
        </h2>
    )
}
