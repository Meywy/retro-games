import { RetroGame } from '../types/Game';

export const retroGames: RetroGame[] = [
  {
    id: 1,
    name: "Pac-Man",
    year: 1980,
    platform: "Arcade",
    description: "Kultovní arkádová hra, kde hráč ovládá žlutou postavičku jedící tečky v bludišti.",
    whyPopular: "Stala se fenoménem díky jednoduché ale návykové hratelnosti a ikonickému designu. První hra s jasně definovanou postavou.",
    gameplay: "Hráč naviguje Pac-Manem přes bludiště, sbírá tečky a vyhýbá se duchům. Po snědení velké tečky může duchům utékat.",
    image: "/images/pacman.svg",
    category: "arcade"
  },
  {
    id: 2,
    name: "Super Mario Bros.",
    year: 1985,
    platform: "Nintendo Entertainment System",
    description: "Legendární plošinovka o italském instalatérovi zachraňujícím princeznu.",
    whyPopular: "Definovala žánr plošinovek a zachránila herní průmysl po krizi v roce 1983. Dokonalé ovládání a level design.",
    gameplay: "Mario skáče přes překážky, ničí nepřátele skokem a sbírá mince. Cílem je dostat se na konec levelu a zachránit princeznu Peach.",
    image: "/images/mario.svg",
    category: "platform"
  },
  {
    id: 3,
    name: "Tetris",
    year: 1984,
    platform: "Multiplatform",
    description: "Puzzle hra o skládání padajících bloků do kompletních řad.",
    whyPopular: "Matematicky perfektní design, nekonečná hratelnost a dostupnost na všech platformách. Nejprodávanější hra všech dob.",
    gameplay: "Hráč rotuje a posouvá padající tetromina (tvary ze 4 bloků) tak, aby vyplnil celé řady, které pak zmizí.",
    image: "/images/tetris.svg",
    category: "puzzle"
  },
  {
    id: 4,
    name: "Space Invaders",
    year: 1978,
    platform: "Arcade",
    description: "První úspěšná střílečka, kde hráč brání Zemi před invazí mimozemšťanů.",
    whyPopular: "Položila základy žánru shoot-em-up a ukázala komerční potenciál videoher. Vyvolala první herní mánie.",
    gameplay: "Hráč ovládá kanón na spodku obrazovky a střílí na formace sestupujících mimozemšťanů. Tempo se postupně zrychluje.",
    image: "/images/spaceinvaders.svg",
    category: "action"
  },
  {
    id: 5,
    name: "Donkey Kong",
    year: 1981,
    platform: "Arcade",
    description: "První hra s Mariem (tehdy Jumpman) zachraňujícím Pauline před obří opicí.",
    whyPopular: "Představila Mario a Donkey Kong série, inovovala plošinovky s vertikálním pohybem a storytelling.",
    gameplay: "Mario musí vylézt po stavbě plné překážek a válečků, které na něj hází Donkey Kong, aby zachránil Pauline.",
    image: "/images/donkeykong.svg",
    category: "platform"
  },
  {
    id: 6,
    name: "Street Fighter II",
    year: 1991,
    platform: "Arcade",
    description: "Definitivní bojová hra, která vytvarovala celý žánr fighting games.",
    whyPopular: "Dokonale vyvážené postavy, intuitivní ale hluboký herní systém a ikonické speciální útoky. Esports pionýr.",
    gameplay: "Dva hráči bojují v 1v1 zápasech kombinacemi útoků, bloků a speciálních pohybů s jedinečnými bojovníky.",
    image: "/images/streetfighter.svg",
    category: "action"
  },
  {
    id: 7,
    name: "Pong",
    year: 1972,
    platform: "Arcade",
    description: "První komerčně úspěšná videohra - simulace ping pongu.",
    whyPopular: "Zažehla videogame revoluci jako první masově populární hra. Jednoduchá ale zábavná.",
    gameplay: "Dva hráči ovládají pálky na stranách obrazovky a odpalují míček tam a zpět. Gól se počítá, když soupeř míček nezachytí.",
    image: "/images/pong.svg",
    category: "arcade"
  },
  {
    id: 8,
    name: "The Legend of Zelda",
    year: 1986,
    platform: "Nintendo Entertainment System",
    description: "Akční RPG hra o hrdinovi Linkovi zachraňujícím princeznu Zeldu.",
    whyPopular: "Vytvořila šablonu pro akční RPG s otevřeným světem, nelineární progresí a epickým storytellingem.",
    gameplay: "Link prozkoumává obrovský svět, řeší hádanky v dungeonech, bojuje s monstry a sbírá vybavení k poražení Ganona.",
    image: "/images/zelda.svg",
    category: "rpg"
  },
  {
    id: 9,
    name: "Galaga",
    year: 1981,
    platform: "Arcade",
    description: "Pokračování Space Invaders s lepší grafikou a inovativními mechanismy.",
    whyPopular: "Zdokonalila formuli Space Invaders s barevnou grafikou, power-upy a dvojitým laserem. Časeless gameplay.",
    gameplay: "Hráč střílí na formace mimozemšťanů s možností zdvojit palbu. Některé nepřátele mohou ukrást vaši loď.",
    image: "/images/galaga.svg",
    category: "action"
  },
  {
    id: 10,
    name: "Frogger",
    year: 1981,
    platform: "Arcade",
    description: "Akční hra o žábě překonávající nebezpečné silnice a řeky.",
    whyPopular: "Unikátní koncept, perfektní timing mechanismus a rostoucí obtížnost vytvořily návykovou hratelnost.",
    gameplay: "Hráč naviguje žábu přes rušné silnice a řeky plné překážek. Timing je klíčový pro úspěšné překonání.",
    image: "/images/frogger.svg",
    category: "arcade"
  }
];