"use client";
import React, { useRef, useState } from "react";

type RotarySliderProps = {
    currentNumber: number;
    onNumberChange: (newVal: number) => void;
};

export default function RotarySlider({
    currentNumber,
    onNumberChange,
}: RotarySliderProps) {
    const dialRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // 1. Math Function: Converts (X, Y) pointer position into number (0 - 99)
    const updateValueFromPointer = (clientX: number, clientY: number) => {
        if (!dialRef.current) return;

        // Find the center (X, Y) of the dial circle on screen
        const rect = dialRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Vector from center to pointer
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        // Calculate angle in degrees (-180 to +180)
        let deg = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

        // Shift so 0 degrees is at the TOP (12 o'clock)
        let angleFromTop = deg + 90;
        if (angleFromTop < 0) {
            angleFromTop += 360;
        }

        // Map 0° - 360° to safe value 0 - 99
        const newValue = Math.floor((angleFromTop / 360) * 100) % 100;

        if (newValue !== currentNumber){
            const clickAudio = new Audio("/sounds/click.wav")
            clickAudio.volume=0.25;
            clickAudio.play().catch(() => {})
        }

        onNumberChange(newValue);
    };

    // 2. Pointer Event Handlers
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId); // Keeps capturing even if cursor leaves the circle!
        updateValueFromPointer(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        updateValueFromPointer(e.clientX, e.clientY);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(false);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // ignore if already released
        }
    };

    // 3. Current Rotation Angle for the wheel
    const rotationDeg = (currentNumber / 100) * 360;

    return (
        /* ROTARY SLIDER WRAPPER */
        <div className="relative flex items-center justify-center p-1 my-0 select-none touch-none">
            {/* STATIC TOP INDICATOR ARROW / NOTCH */}
            <div className="absolute top-0 z-20 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

            {/* ROTATING DIAL CHASSIS */}
            <div
                ref={dialRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950 border-4 border-slate-700/80 shadow-[0_0_25px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
            >
                {/* ROTATING WHEEL WITH NOTCHES */}
                <div
                    className="w-full h-full rounded-full relative flex items-center justify-center"
                    style={{ transform: `rotate(${rotationDeg}deg)` }}
                >
                    {/* TOP NOTCH MARKER ON THE WHEEL */}
                    <div className="absolute top-1.5 w-1.5 h-3.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />

                    {/* 4 QUADRANT DOT NOTCHES (0, 25, 50, 75) */}
                    <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <div className="absolute left-2 w-1.5 h-1.5 rounded-full bg-slate-600" />
                </div>

                {/* CENTER HUB CAP */}
                <div className="absolute w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center pointer-events-none">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-cyan-500/70 font-semibold">
                        ROTARY
                    </span>
                    <span className="font-mono text-[7px] sm:text-[8px] text-slate-500 tracking-wider">
                        VK-90
                    </span>
                </div>
            </div>
        </div>
    );
}