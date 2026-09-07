#  TITAN VAULT SYSTEM // VK-90 (The Safe Cracker)

A cyberpunk-themed, interactive mechanical vault combination lock mini-game built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

---

##  Live Gameplay & Overview

Players must crack a randomized 3-digit combination (`0` to `99`) to breach the high-security **Titan VK-90 Vault**.

---

##  Features

- ** Dual Controller Mechanisms**:
  - **Rotary Dial:** True continuous $360^\circ$ circular dial with mouse/touch drag physics powered by `Math.atan2` trigonometry and HTML5 Pointer Capture.
  - **Linear Slider:** Precision range slider with discrete step buttons (`[-10]`, `[-1]`, `[+1]`, `[+10]`).
- ** Dynamic LED Tumbler Status**: 3 sequential tumbler pins that transition from standby crimson to glowing laser emerald upon each cracked code.
- ** Audio Feedback**:
  - Tactile mechanical ratchet clicks as the dial rotates.
  - Distinct success chime upon unlocking each tumbler pin.
- ** Real-Time Telemetry & Proximity Clues**: Dynamic console messages guide the player with thermal/vibration feedback (*"Cold / Faint Click / Hot!"*).
- ** High-Tech Cyberpunk HUD UI**: Glow effects, glassmorphism card styling, responsive viewport scaling, and monospace telemetry.
- ** Victory & Reset Loop**: Access granted overlay with one-click vault reset and new randomized combinations.

---

##  Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Audio:** Web Audio API & Native HTML5 Audio

---

##  Project Architecture

```text
src/
├── app/
│   ├── layout.tsx                # Global layout
│   ├── page.tsx                  # Home redirect
│   └── safe/
│       ├── page.tsx              # Game state orchestrator
│       └── types.ts              # Game modes and TypeScript definitions
└── components/
    └── Safe/
        ├── SafeSetupScreen.tsx   # Mechanism mode selection screen
        ├── SafeGameScreen.tsx    # Main vault terminal & gameplay controller
        ├── TumblerPin.tsx        # Dynamic 3-LED status indicators
        ├── RotaryDial.tsx        # Interactive circular drag dial (Math.atan2)
        ├── LinearSlider.tsx      # Range slider with step modifier buttons
        └── Won.tsx               # Victory screen & replay trigger
```

---

##  Getting Started

### Prerequisites
Make sure you have **Node.js 18+** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/safe-unlocker.git
   cd safe-unlocker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000/safe
   ```

---

##  Game Rules

1. Select your preferred input mechanism (**Vertical Slider** or **Circular Rotary Dial**).
2. Rotate the controller to align the digital display with the target tumbler number.
3. Click **`TEST / UNLOCK`** to engage the tumbler pin:
   - **Correct:** The current pin lights up **Green** and advances to the next tumbler pin.
   - **Incorrect:** Read the telemetry clues to gauge how close you are to the secret number.
4. Unlock all **3 Pins** to breach the vault and claim victory!


