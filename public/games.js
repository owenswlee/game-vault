// Edit this file to add games or change download links.
// download.url: the installer path on this site (/download/<file>, served by src/worker.js).
// Leave url empty ("") and the button shows "Coming soon".
// play.url: for browser games, the page that runs the game (shows a "Play in browser" button instead).
window.GAMES = [
  {
    id: "ultimate-shooter",
    title: "Ultimate Shooter",
    tagline: "Fast tactical duels. Sharp gunplay. One more round.",
    genre: "Arena FPS",
    status: "Early access",
    version: "0.8",
    updated: "2026-11-23",
    platform: "Windows 10/11 · 64-bit",
    cover: "img/us-menu.jpg",
    hero: "img/us-action.jpg",
    accent: "#ff5a5f",
    description:
      "A competitive arena shooter built for quick matches. Pick an agent, build your loadout, and fight across five maps in Duel, Skirmish, Squad, Gun Game and Hardpoint.",
    features: [
      ["60+ weapons", "Rifles, railguns, bows, flamethrowers and miniguns, each with their own mechanics."],
      ["5 game modes", "Duel 1v1, Skirmish 2v2, Squad 3v3, Gun Game, Hardpoint, plus an aim trainer."],
      ["5 maps", "Crossroads, Dockyard, Overpass, Rooftops and the new Foundry, with jump pads, mantling and a grappling hook."],
      ["Agents & progression", "8 agents with perks, a 30-tier battlepass, daily challenges and weapon mastery."],
      ["Shop & skins", "44 weapon wraps, optics, lasers, muzzles and magazines to unlock."],
      ["Full settings", "Rebindable keys, crosshair editor, graphics and audio options."]
    ],
    screenshots: [
      "img/us-action.jpg",
      "img/us-foundry.jpg",
      "img/us-fight.jpg",
      "img/us-menu.jpg",
      "img/us-loadout.jpg",
      "img/us-agents.jpg",
      "img/us-result.jpg"
    ],
    requirements: [
      ["OS", "Windows 10 or 11, 64-bit"],
      ["CPU", "Quad-core, 2.5 GHz or faster"],
      ["Memory", "8 GB RAM"],
      ["Graphics", "DirectX 12 GPU, 2 GB VRAM"],
      ["Storage", "400 MB free space"]
    ],
    download: {
      url: "/download/UltimateShooterSetup.exe",
      file: "UltimateShooterSetup.exe",
      size: "87 MB"
    }
  },
  {
    id: "snoopy",
    title: "Snoopy",
    tagline: "Fly the doghouse, catch the treats, throw the party.",
    genre: "Arcade",
    status: "Play now",
    version: "1.0",
    updated: "2026-11-26",
    platform: "Any browser · phone or computer",
    cover: "img/snoopy-cover.jpg",
    hero: "img/snoopy-hero.jpg",
    accent: "#e23b2e",
    description:
      "A three-level birthday game that runs right in your browser. Fly Snoopy's doghouse through the sky, catch falling treats in his supper dish, and hunt the yard for party supplies. Beat all three and you get a party, a prize wheel and a prize ticket.",
    features: [
      ["Up in the Sky", "Steer the flying doghouse to collect 12 hearts and dodge the grumpy storm clouds."],
      ["Supper Time", "Catch 15 falling treats in Snoopy's supper dish. Skip the rain clouds."],
      ["Party Hunt", "Find five party things around the yard and bring them to the doghouse."],
      ["Birthday party", "Confetti, cake, balloons and a Happy Birthday song when you win."],
      ["Prize wheel", "Spin for your prize at the end. Good luck."],
      ["Phone or computer", "Drag with a finger, or use the mouse or arrow keys. Nothing to install."]
    ],
    screenshots: [
      "img/snoopy-l1.jpg",
      "img/snoopy-l2.jpg",
      "img/snoopy-l3.jpg",
      "img/snoopy-party.jpg",
      "img/snoopy-wheel.jpg"
    ],
    requirements: [],
    play: { url: "/snoopy/" },
    download: { url: "", file: "", size: "" }
  },
  {
    id: "duel-arena",
    title: "Duel Arena",
    tagline: "Step on a pad. First to five wins.",
    genre: "Arena FPS",
    status: "Coming soon",
    version: "",
    updated: "",
    platform: "Windows 10/11 · 64-bit",
    cover: "",
    hero: "",
    accent: "#2ad4c4",
    description:
      "A lobby-based duel shooter: walk onto a 1v1, 2v2 or 5v5 pad, load up from 28 weapons and play first-to-five rounds against bots. Earn coins and keys and complete contracts.",
    features: [
      ["28 weapons", "A full loadout grid across primaries, secondaries and melee."],
      ["Lobby pads", "Walk onto a pad to queue 1v1, 2v2 or 5v5."],
      ["Contracts", "Coins, keys and contracts saved between sessions."]
    ],
    screenshots: [],
    requirements: [],
    download: { url: "", file: "", size: "" }
  }
];
