export const IAMockup = () => {

    const risk = [
        {name: 'Beatriz M.', value: '72'},
        {name: 'Carlos F.', value: '38'},
        {name: 'Ana Lima', value: '18'},
        {name: 'Pedro R.', value: '55'},
    ]

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col space-y-1'>
                    <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                        Painel de Risco Preditivo - IA
                    </span>
                    <span className='text-xs text-white/40'>Atualizado há 2 min · Semestre 2025.2</span>
                </div>

                <div className='font-medium flex gap-2 items-center justify-center rounded-full bg-red-600/20 border border-red-600/30 px-3 py-1.5 w-fit text-red-200 text-sm'>
                    <span className='w-2 h-2 bg-red-600 rounded-full' />
                    1 alerta crítico
                </div>
            </div>
        </div>
    )
}