export type TumblerPinProps = {
    unlockedPins: number;
}
export default function TumblerPin( {
    unlockedPins,
} : TumblerPinProps) {
    return (
        /* TUMBLER PIN WRAPPER */
        <div className="flex flex-col items-center gap-2 py-3 px-6 bg-slate-950/70 border border-cyan-500/25 rounded-xl shadow-inner">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/80 font-semibold">
                ── TUMBLER PINS ──
            </span>

            {/* WRAPPER FOR ALL 3 PINS */}
            <div className="flex flex-row items-center justify-center gap-8">
                {Array.from({ length: 3 }).map((_, index) => (
                    /* WRAPPER FOR SINGLE LED + LABEL */
                    <div key={index} className="flex flex-col items-center gap-1.5">
                        {/* LED BASE CIRCLE */}
                        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-500 shadow-sm
                            ${unlockedPins > index
                                ? "bg-emerald-400 border-emerald-300 shadow-[0_0_15px_#10b981,0_0_5px_#34d399]"
                                : "bg-red-950/80 border-red-800/80 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                            }`}
                        >
                        </div>

                        {/* PIN LABEL */}
                        <span className="font-mono text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                            PIN {index + 1}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}