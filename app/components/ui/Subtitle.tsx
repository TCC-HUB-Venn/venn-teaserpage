
interface SubtitleProps {
    text: string;
    color: string;
    isCenter?: boolean;
}

export const Subtitle = ({ text, color, isCenter = false }: SubtitleProps) => {
    const isTailwindClass = color.startsWith('text-')

    return (
        <h3
            className={` ${isCenter ? 'text-center' : 'text-left'} text-sm font-bold uppercase tracking-[1.65px] ${isTailwindClass ? color : ''}`}
            style={!isTailwindClass ? { color } : undefined}
        >
            {text}
        </h3>
    )
}