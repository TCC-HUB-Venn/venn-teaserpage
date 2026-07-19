export const HeroProductPreview = () => (
    <div className="absolute right-0 top-1/2 h-[72%] w-full -translate-y-1/2 overflow-hidden rounded-[1.35rem] border border-white/[0.13] bg-[#090a0c] shadow-[0_26px_70px_rgba(0,0,0,0.55)] sm:rounded-[1.7rem] md:mt-20">
 {/* Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.05),transparent_35%)]" />

    {/* Blur misterioso */}
    <div className="absolute inset-0 z-20 backdrop-blur-[2px] bg-gradient-to-b from-black/5 via-transparent to-black/20 pointer-events-none" />

    {/* Vinheta suave */}
    <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)] pointer-events-none" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_3%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%)]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_3%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%)]" />
    <div className="relative flex h-[12%] min-h-10 items-center gap-2 border-b border-white/10 px-4 sm:px-5">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-500" />
      <span className="ml-3 h-2.5 w-28 rounded-full bg-white/10 sm:w-36" />
    </div>
    <div className="relative grid h-[88%] grid-cols-[25%_1fr]">
      <aside className="border-r border-white/[0.035] px-3 pt-5 sm:px-5">
        <div className="mb-5 h-3 w-4/5 rounded bg-white/10" />
        {["w-full", "w-4/5", "w-11/12", "w-2/3", "w-5/6"].map((width, index) => <div key={index} className={`mb-4 flex h-5 items-center gap-2 rounded-md ${index === 1 ? "bg-primary/20 px-2" : ""}`}><span className="h-3.5 w-3.5 rounded bg-white/10" /><span className={`h-2.5 ${width} rounded-full ${index === 1 ? "bg-white/20" : "bg-white/10"}`} /></div>)}
      </aside>
      <div className="min-w-0 p-5 sm:p-7">
        <div className="mb-6 flex items-center justify-between gap-4"><div className="space-y-2"><div className="h-3 w-36 rounded bg-white/15 sm:w-48" /><div className="h-2.5 w-24 rounded bg-white/10 sm:w-32" /></div><div className="h-8 w-20 rounded-lg border border-primary/40 bg-primary/20" /></div>
        <div className="grid min-w-[430px] grid-cols-3 gap-3 sm:gap-4">
          {[0, 1, 2, 3, 4, 5].map((card) => <div key={card} className="min-h-24 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 sm:min-h-32 sm:p-4"><div className="mb-3 flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${card === 0 ? "bg-amber-400" : card === 1 ? "bg-primary-400" : "bg-emerald-400"}`} /><span className="h-2.5 w-3/5 rounded bg-white/15" /></div><div className="mb-2 h-2.5 w-4/5 rounded bg-white/10" /><div className="mb-4 h-2.5 w-1/2 rounded bg-white/[0.08]" /><div className="flex gap-2"><span className="h-4 w-9 rounded bg-white/[0.07]" /><span className="h-4 w-9 rounded bg-white/[0.07]" /></div></div>)}
        </div>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-primary-400" />Lançamento em breve</div>
      </div>
    </div>
  </div>
);
