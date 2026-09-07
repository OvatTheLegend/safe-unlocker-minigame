type LinearSliderProps = {
    currentNumber: number;
    onNumberChange: (newVal : number) => void;
}

export default function LinearSlider( {
    currentNumber,
    onNumberChange,
} : LinearSliderProps){

    const playClick = () => {
        const audio = new Audio("/sounds/click.wav");
        audio.volume = 0.25;
        audio.play().catch(() => {});
    };

    return (
        /* SLIDER WRAPPER */
        <div className="w-full flex flex-row items-center justify-center gap-2 sm:gap-3 p-4 bg-slate-950/60 border border-cyan-500/20 rounded-xl shadow-inner">
            
            <button className="px-2.5 py-2 rounded-lg border border-cyan-500/40 bg-slate-800/90 hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-90 text-cyan-300 font-mono text-xs sm:text-sm font-bold shadow-md hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all duration-150 cursor-pointer select-none"
                onClick={() => {
                    onNumberChange(Math.max(0, Number(currentNumber-10)))
                    playClick();
                }}
            >
                [-10]
            </button>

            <button className="px-2.5 py-2 rounded-lg border border-cyan-500/40 bg-slate-800/90 hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-90 text-cyan-300 font-mono text-xs sm:text-sm font-bold shadow-md hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all duration-150 cursor-pointer select-none"
                onClick={() => {
                    onNumberChange(Math.max(0, Number(currentNumber-1)))
                    playClick();
                }}
                >
                [-1]
            </button>

            <input
                type="range"
                min={0}
                max={99}
                step={1}
                value={currentNumber}
                onChange={(e) => {
                    const newVal = parseInt(e.target.value);
                    if (newVal !== currentNumber) {
                        playClick();
                        onNumberChange(newVal);
                    }
                }}
                className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none shadow-inner"
            />

            <button
                className="px-2.5 py-2 rounded-lg border border-cyan-500/40 bg-slate-800/90 hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-90 text-cyan-300 font-mono text-xs sm:text-sm font-bold shadow-md hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all duration-150 cursor-pointer select-none"
                onClick={() => {
                    onNumberChange(Math.min(99, currentNumber + 1));
                    playClick();
                }}
            >
                [+1]
            </button>

            <button
                className="px-2.5 py-2 rounded-lg border border-cyan-500/40 bg-slate-800/90 hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-90 text-cyan-300 font-mono text-xs sm:text-sm font-bold shadow-md hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all duration-150 cursor-pointer select-none"
                onClick={() => {
                    onNumberChange(Math.min(99, currentNumber + 10));
                    playClick();
                }}
            >
                [+10]
            </button>

            
        </div>
    )
}