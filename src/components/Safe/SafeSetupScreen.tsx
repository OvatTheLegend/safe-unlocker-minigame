import { ControlMode } from "@/app/safe/types";
import { useState } from "react";

type SetupScreenProps = {
    onStartGame: (mode: ControlMode) => void;
}

export default function SetupScreen( {
    onStartGame,
} : SetupScreenProps) {

    const [selectedMode, setSelectedMode] = useState<ControlMode>("linear")

    return (
        /* WRAPPER */
        <div className="flex flex-col items-center justify-center gap-6 p-8 bg-slate-900/90 border border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] text-center max-w-md w-full backdrop-blur-md">
            <span className="text-sm uppercase tracking-widest text-cyan-400 font-mono font-medium drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                Please, select your slider preference.
            </span>

            {/* BUTTON WRAPPER */}
            <div className="flex flex-row items-center justify-center gap-4 w-full">
                <button className={`flex-1 py-3 px-5 rounded-xl border font-mono text-sm uppercase tracking-wider font-semibold shadow-lg transition-all duration-200 cursor-pointer active:scale-95
                    ${selectedMode === "linear"
                        ? "border-cyan-400 bg-cyan-500/25 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400"
                        : "border-cyan-500/30 bg-slate-800/60 text-slate-400 opacity-60 hover:opacity-100 hover:bg-slate-800 hover:border-cyan-500/50"
                    }`}
                    onClick={() => {
                        if (selectedMode === "linear") return;
                        else {
                            setSelectedMode("linear")
                        }
                    }}
                >
                 
                    Vertical
                </button>

                <button className={`flex-1 py-3 px-5 rounded-xl border font-mono text-sm uppercase tracking-wider font-semibold shadow-lg transition-all duration-200 cursor-pointer active:scale-95
                    ${selectedMode === "rotary"
                        ? "border-cyan-400 bg-cyan-500/25 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400"
                        : "border-cyan-500/30 bg-slate-800/60 text-slate-400 opacity-60 hover:opacity-100 hover:bg-slate-800 hover:border-cyan-500/50"
                    }`}
                    onClick={() => {
                        if (selectedMode === "rotary") return;
                        else { setSelectedMode("rotary")
                        }
                    }}
                >
                    Circular        
                </button>
            </div>

            {/* READY / START ACTION */}
            <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 active:scale-[0.98] text-slate-950 font-mono text-sm uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all duration-200 cursor-pointer"
                onClick={() => onStartGame(selectedMode)}
            >
                [ INITIALIZE VAULT ]
            </button>
        </div>
    )
}