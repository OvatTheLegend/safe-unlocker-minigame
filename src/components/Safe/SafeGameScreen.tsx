import { useState } from "react";
import TumblerPin from "./TumblerPin";
import LinearSlider from "./LinearSlider";
import { ControlMode } from "@/app/safe/types";
import RotarySlider from "./RotaryDial";

type GameScreenProps = {
    selectedMode: ControlMode;
    onUnlock: () => void;
}
export default function GameScreen({
    selectedMode,
    onUnlock,
}: GameScreenProps){

    const [currentNumber, setCurrentNumber] = useState(50);
    const [unlockedPins, setUnlockedPins] = useState<number>(0);
    const [combination, setCombination] = useState<number[]>(() => [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
    ])

    const [message, setMessage] = useState("ROTATE DIAL TO ALIGN TUMBLER PIN 1");
    
    const onUnlockAttempt = () => {
        if (currentNumber === combination[unlockedPins]) {
            const dingSound = new Audio("/sounds/ding.mp3");
            dingSound.play();   
            const nextUnlocked = unlockedPins + 1;
            setUnlockedPins(nextUnlocked);

            if (nextUnlocked === 3) {
                setMessage("ACCESS GRANTED // ALL TUMBLERS ENGAGED");
                onUnlock();
            } else {
                setMessage(`PIN ${unlockedPins + 1} ENGAGED! ALIGN PIN ${nextUnlocked + 1}`);
            }
        } else {
            const diff = Math.abs(combination[unlockedPins] - currentNumber);
            const errorSound = new Audio("/sounds/error_buzz.wav");
            errorSound.play();
            if (diff > 15) {
                setMessage("TUMBLER SILENT // NOT EVEN CLOSE");
            } else if (diff > 5) {
                setMessage("FAINT CLICK DETECTED // GETTING CLOSER");
            } else {
                setMessage("HOT! TUMBLER VIBRATING INTENSELY // VERY CLOSE");
            }
        }
    };
    return (
        /* SCREEN WRAPPER */
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 max-w-lg w-full bg-slate-900/90 border border-cyan-500/30 rounded-2xl shadow-[0_0_35px_rgba(6,182,212,0.15)] text-center backdrop-blur-md relative overflow-hidden">
            
            {/* WRAPPER FOR TITLE BOX */}
            <div className="w-full py-2 px-4 bg-slate-950/60 border border-cyan-500/20 rounded-xl shadow-inner flex flex-col items-center justify-center gap-0.5">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                    TITAN VAULT SYSTEM // VK-90
                </span>
                <span className="font-mono text-[10px] sm:text-xs tracking-wider text-slate-400 uppercase">
                    High-Security Tumbler Lock
                </span>
            </div>
            
            <TumblerPin
                unlockedPins={unlockedPins}
            />

            {/* SLIDER CURRENT VALUE WRAPPER */}
            <div className="my-0.5 px-6 py-2.5 bg-slate-950/80 border-2 border-cyan-500/40 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center justify-center min-w-[120px]">
                <span className="font-mono text-4xl sm:text-5xl font-black tracking-widest text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] select-none">
                    {currentNumber.toString().padStart(2, "0")}
                </span>
            </div>

            {selectedMode === "linear" && <LinearSlider
                currentNumber={currentNumber}
                onNumberChange={setCurrentNumber}
            />}

            {selectedMode === "rotary" && <RotarySlider
                currentNumber={currentNumber}
                onNumberChange={setCurrentNumber}
            />}

            {/* BUTTON WRAPPER */}
            <div className="w-full pt-2 flex flex-col items-center justify-center">
                <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 hover:from-cyan-500 hover:via-cyan-400 hover:to-teal-400 active:scale-[0.98] text-slate-950 font-mono text-sm uppercase tracking-widest font-black shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-200 cursor-pointer"
                    onClick={onUnlockAttempt}
                >
                    TEST / UNLOCK
                </button>
            </div>
            
            {/* STATUS MESSAGE WRAPPER */}
            <div className="w-full py-2 px-3 bg-slate-950/50 border border-slate-800 rounded-lg flex items-center justify-center min-h-[36px]">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 select-none">
                    {message}
                </span>
            </div>
        </div>
    )
}


