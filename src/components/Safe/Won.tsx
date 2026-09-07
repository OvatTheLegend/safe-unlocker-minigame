type AfterGameProps = {
    onPlayAgain: () => void;
}
export default function AfterGame( {
    onPlayAgain,
} : AfterGameProps) {
    return (
        /* AFTER GAMESCREEN WRAPPER */
        <div className="flex flex-col items-center justify-center gap-6 p-8 bg-slate-900/95 border-2 border-emerald-500/50 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.25)] text-center max-w-md w-full backdrop-blur-lg">
            <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 active:scale-95 text-slate-950 font-mono text-base uppercase tracking-widest font-black shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] transition-all duration-200 cursor-pointer"
                onClick={onPlayAgain}
            >
                PLAY AGAIN
            </button>
        </div>
    )
}