# 🎮 Retro Hry Web

Interaktivní webová stránka s ukázkou kultovních retro her. Vytvořeno pomocí React, TypeScript a Tailwind CSS.

## ✨ Funkce

- **📱 Responzivní design** - Funguje na všech zařízeních
- **🎨 Retro tématika** - Pixel art, neonové barvy, 8-bit font
- **🔍 Filtrování her** - Podle kategorií (akční, puzzle, plošinovky, atd.)
- **📋 Detailní informace** - O každé hře s popisem, historií a důvodem popularity
- **⚡ Interaktivní prvky** - Hover efekty, animace, modální okna
- **🌟 10 kultovních her** - Pac-Man, Super Mario Bros, Tetris a další

## 🚀 Instalace a spuštění

```bash
# Instalace závislostí
cd retro-hry-web
npm install

# Spuštění vývojového serveru
npm run dev
# Server poběží na http://localhost:5173

# Build pro produkci
npm run build

# Preview produkční verze
npm run preview
```

## 🎯 Použité technologie

- **React 18** - Modern frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Fast build tool
- **Press Start 2P Font** - Authentic retro look

## 📦 Struktura projektu

```
retro-hry-web/
├── src/
│   ├── components/          # React komponenty
│   │   ├── GameCard.tsx     # Karta jednotlivé hry
│   │   ├── GameModal.tsx    # Detail hry v modálním okně
│   │   ├── Header.tsx       # Hlavička s filtry
│   │   └── Footer.tsx       # Patička
│   ├── data/
│   │   └── games.ts         # Data všech her
│   ├── types/
│   │   └── Game.ts          # TypeScript typy
│   ├── App.tsx              # Hlavní komponenta
│   ├── main.tsx             # Entry point
│   └── index.css            # Hlavní styly
├── public/                  # Statické soubory
└── dist/                    # Build výstup
```

## 🎮 Obsažené hry

1. **Pac-Man** (1980) - Arkádová klasika
2. **Super Mario Bros.** (1985) - Definice plošinovek
3. **Tetris** (1984) - Nejprodávanější puzzle hra
4. **Space Invaders** (1978) - První shoot-em-up hit
5. **Donkey Kong** (1981) - Debut Maria a DK
6. **Street Fighter II** (1991) - Bojovka všech dob
7. **Pong** (1972) - První komerční videogra
8. **The Legend of Zelda** (1986) - Akční RPG průkopník
9. **Galaga** (1981) - Vylepšené Space Invaders
10. **Frogger** (1981) - Unikátní arkádový koncept

## 🎨 Design prvky

- **Neonové barvy** - Růžová, modrá, zelená, fialová
- **Retro mřížka** - Background pattern připomínající 80's
- **Glowing efekty** - CSS animace pro světelné efekty
- **Pixel font** - Press Start 2P pro autentický look
- **Gradient pozadí** - Dark theme s barevnými přechody

## 📝 Licence

Tento projekt je vytvořen pro edukační a ukázkové účely.

---

**Vytvořeno s 💖 a nostalgií za zlatým věkem videoher!**