"use client"
import SafeSetupScreen from "@/components/Safe/SafeSetupScreen"
import { useState } from "react"
import { ControlMode } from "./types"
import SafeGameScreen from "@/components/Safe/SafeGameScreen"
import LinearSlider from "@/components/Safe/LinearSlider"
import AfterGame from "@/components/Safe/Won"

export default function Safe() {

    const [screen, setScreen] = useState<"setup" | "game" | "won">("setup")
    const [selectedMode, setSelectedMode] = useState<ControlMode>("linear")

    
    const handleUnlock = () => {
        const unlockAudio = new Audio("/sounds/unlock.wav")
        unlockAudio.play();
        
        setTimeout(() => {
            setScreen("won");
        },3000);
    }
    return (
        /* PAGE WRAPPER */
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1d] to-black text-slate-100 font-mono select-none">
            {screen === "setup" && <SafeSetupScreen
                onStartGame={(mode) => {
                    setSelectedMode(mode);
                    setScreen("game");
                    }
                }
            />
            }

            {screen === "game" && 
            <SafeGameScreen
                selectedMode={selectedMode}
                onUnlock={handleUnlock}
            />}

            {screen == "won" && <AfterGame
                onPlayAgain={() => {
                    setScreen("setup");
                }}    
            />}


        </div>
    )
}

