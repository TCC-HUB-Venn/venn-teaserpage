
import type { ReactNode } from "react"

interface CardFeatureProps {
    isLarge: boolean;
    children: ReactNode;
    title: string;
    description: string;
}

export const CardFeature = ({ isLarge, children, title, description }: CardFeatureProps) => {
    return (
        <div className={`${isLarge ? 'col-span-3' : 'col-span-2'} bg-background-white-3 border border-white/10 rounded-card`}>
            <div className='p-4'>{children}</div>

            <div className="mt-4 space-y-2 border-t border-white/10 px-4 py-4">
                <h4 className='text-xl font-semibold'>{title}</h4>
                <p className='text-white/60'>{description}</p>
            </div>
        </div>
    )
}