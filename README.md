This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# 🔐 Safe Cracker / Lockpick (Interactive Mini-App)

## Getting Started
> An interactive, puzzle-based safe cracking simulator built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

First, run the development server:
![License](https://img.shields.io/badge/license-MIT-amber.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## 🎮 Game Overview & Features

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
- **🎯 Interactive Mechanical Dial & Slider Controls**: Features both rotary dial (`RotaryDial.tsx`) and precision linear slider (`LinearSlider.tsx`) inputs.
- **⚙️ Tumbler & Pin Feedback System**: Real-time tumbler pin alignment mechanics (`TumblerPin.tsx`) with haptic/visual resistance indicators.
- **🧠 Custom Game State Flow**: Setup configuration, active cracking state, and victory screen (`Won.tsx`).
- **🎨 Sleek Dark / Industrial Aesthetic**: Brushed metal gradients, mechanical indicators, and retro vault styling.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
---

## Learn More
## 🛠️ Architecture & Components

To learn more about Next.js, take a look at the following resources:
- **`SafeSetupScreen.tsx`**: Difficulty selection, pin count configuration, and game initiation.
- **`SafeGameScreen.tsx`**: Central game orchestrator coordinating tumbler feedback and dial inputs.
- **`RotaryDial.tsx` & `LinearSlider.tsx`**: Modular input mechanisms capturing angle rotations and numeric ranges.
- **`TumblerPin.tsx`**: Animated mechanical tumbler pin displaying lock alignment.
- **`Won.tsx`**: Victory celebration overlay with time and score stats.
- **`types.ts`**: TypeScript definitions for safe configurations, tumbler states, and pin statuses.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
---

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
## 💻 Getting Started Locally

## Deploy on Vercel
1. **Clone the repository**:
   ```bash
   git clone https://github.com/OvatTheLegend/safe-unlocker.git
   cd safe-unlocker
   ```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
2. **Install dependencies**:
   ```bash
   npm install
   ```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000/safe](http://localhost:3000/safe) in your browser.

---

## 👤 Author

- **Richard** — [@OvatTheLegend](https://github.com/OvatTheLegend)
- Student @ **FEI STU** (Slovak University of Technology in Bratislava)
