import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'hermes-telegram-neon-flow',
  label: 'Telegram Neon Flow',
  description: 'Telegram-inspired Liquid Glass with Telegram-style doodle wallpaper, depth and polished light/dark surfaces.',
  colors: {
    background: '#F3F7FC', foreground: '#20242D', card: '#FFFFFF', cardForeground: '#20242D',
    muted: '#EAF0F7', mutedForeground: '#687486', popover: '#FDFEFF', popoverForeground: '#20242D',
    primary: '#6D67F5', primaryForeground: '#FFFFFF', secondary: '#E9EEF6', secondaryForeground: '#313847',
    accent: '#E96AB2', accentForeground: '#35182B', border: '#D9E1EC', input: '#D5DEE9', ring: '#43C7E8',
    midground: '#6D67F5', midgroundForeground: '#FFFFFF', composerRing: '#43C7E8', destructive: '#E25563',
    destructiveForeground: '#FFFFFF', sidebarBackground: '#EAF1F8', sidebarBorder: '#D3DDE9',
    userBubble: '#E7F0FF', userBubbleBorder: '#CFE0FA'
  },
  darkColors: {
    background: '#050811', foreground: '#F4F8FF', card: '#101A2B', cardForeground: '#F4F8FF',
    muted: '#0D1727', mutedForeground: '#9DAFC8', popover: '#0B1525', popoverForeground: '#F4F8FF',
    primary: '#918BFF', primaryForeground: '#080A12', secondary: '#172942', secondaryForeground: '#EDF5FF',
    accent: '#FF7CC4', accentForeground: '#220A18', border: '#2B4568', input: '#304A6D', ring: '#51DFF7',
    midground: '#918BFF', midgroundForeground: '#080A12', composerRing: '#51DFF7', destructive: '#FF6877',
    destructiveForeground: '#18070B', sidebarBackground: '#071120', sidebarBorder: '#214064',
    userBubble: '#153252', userBubbleBorder: '#326A9A'
  },
  typography: {
    fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", "SF Mono", Menlo, Monaco, monospace'
  },
  terminal: {
    foreground: '#20242D', black: '#20242D', red: '#D9475A', green: '#278B69', yellow: '#B8781E', blue: '#655FE0', magenta: '#C85898', cyan: '#208DA2', white: '#E4EAF2',
    brightBlack: '#687486', brightRed: '#E25563', brightGreen: '#39A87F', brightYellow: '#D69A38', brightBlue: '#817AFF', brightMagenta: '#E77DB8', brightCyan: '#43C7E8', brightWhite: '#FFFFFF'
  },
  darkTerminal: {
    foreground: '#F4F8FF', black: '#080F1C', red: '#FF6877', green: '#6FD3A7', yellow: '#E7C775', blue: '#918BFF', magenta: '#FF7CC4', cyan: '#51DFF7', white: '#DCE7F6',
    brightBlack: '#7186A2', brightRed: '#FF929D', brightGreen: '#98E8C5', brightYellow: '#F3DC9A', brightBlue: '#B8B4FF', brightMagenta: '#FFB8DC', brightCyan: '#96F2FF', brightWhite: '#FFFFFF'
  }
}

const EFFECT_STYLE_ID = 'hermes-telegram-neon-flow-effects'

const doodleSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='430' height='430' viewBox='0 0 430 430'%3E%3Cg fill='none' stroke='%235b8daa' stroke-width='1.35' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M48 54l38-17-13 31-25-14zm0 0l25 14'/%3E%3Cpath d='M181 55c0-16 14-29 31-29s31 13 31 29-14 29-31 29-31-13-31-29zm16 2c4-4 9-6 15-6m17 0c6 0 11 2 15 6M205 72c5 4 12 4 17 0'/%3E%3Cpath d='M326 39l6 13 14 2-10 10 3 14-13-7-13 7 3-14-10-10 14-2z'/%3E%3Cpath d='M57 190c0-10 9-18 20-18h43c11 0 20 8 20 18s-9 18-20 18H95l-12 12v-12H77c-11 0-20-8-20-18z'/%3E%3Cpath d='M286 178c12-15 36-8 36 10 0 17-22 30-36 42-14-12-36-25-36-42 0-18 24-25 36-10z'/%3E%3Cpath d='M167 286l8 17 18 2-13 12 4 18-17-9-17 9 4-18-13-12 18-2z'/%3E%3Cpath d='M356 282c-13 0-24 10-24 23 0 14 11 24 24 24s24-10 24-24c0-13-11-23-24-23zm-11 23h1m20 0h1m-14 10c3 3 7 3 10 0'/%3E%3Cpath d='M62 365c13-13 34-13 47 0l-8 8-7-5-8 8-8-8-8 5z'/%3E%3Cpath d='M249 370l36-25-8 22 16 5-44 19 8-21z'/%3E%3C/g%3E%3C/svg%3E"

const effectsCss = `
:root[data-hermes-theme="hermes-telegram-neon-flow"] {
  --glass-blur: 30px;
  --glass-sat: 1.28;
  --cyan: #51DFF7;
  --violet: #918BFF;
  --pink: #FF7CC4;
  --telegram-blue: #4EA4F5;
  --night-shadow: 0 24px 80px color-mix(in srgb, #000 34%, transparent);
}

/* Hermes Desktop uses aui_thread-viewport as the actual scrollable transcript surface. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"] {
  position: relative;
  isolation: isolate;
  overflow: auto;
  background-color: var(--dt-background) !important;
  background-image:
    radial-gradient(48rem 30rem at 50% 22%, color-mix(in srgb, var(--telegram-blue) 8%, transparent), transparent 72%),
    radial-gradient(36rem 30rem at 82% 82%, color-mix(in srgb, var(--pink) 5%, transparent), transparent 74%);
  background-repeat: no-repeat;
  background-size: cover;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url("${doodleSvg}");
  background-repeat: repeat;
  background-size: 300px 300px;
  opacity: .18;
  transform: translateZ(0);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"] > * {
  position: relative;
  z-index: 1;
}

/* Light mode: smaller, denser and softer doodles for a clean paper-like canvas. */
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] #root {
  background:
    radial-gradient(60rem 42rem at 12% 0%, rgba(85,200,232,.12), transparent 70%),
    radial-gradient(54rem 42rem at 90% 18%, rgba(139,130,255,.10), transparent 72%),
    linear-gradient(180deg, #F8FBFF 0%, #EEF4FA 100%);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="aui_thread-viewport"] {
  background-color: #EEF4FA !important;
  background-image:
    radial-gradient(48rem 30rem at 50% 22%, rgba(78,164,245,.055), transparent 72%),
    radial-gradient(36rem 30rem at 82% 82%, rgba(233,106,178,.03), transparent 74%);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="aui_thread-viewport"]::before {
  opacity: .20;
}

/* Dark mode: compact cool-blue doodles with restrained contrast. */
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] #root {
  background:
    radial-gradient(58rem 42rem at 8% 4%, rgba(81,223,247,.18), transparent 70%),
    radial-gradient(52rem 46rem at 94% 10%, rgba(145,139,255,.21), transparent 69%),
    radial-gradient(52rem 42rem at 78% 98%, rgba(255,124,196,.16), transparent 70%),
    var(--dt-background);
  background-attachment: fixed;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] [data-slot="aui_thread-viewport"] {
  background-color: #050811 !important;
  background-image:
    radial-gradient(46rem 28rem at 50% 28%, rgba(81,223,247,.06), transparent 72%),
    radial-gradient(38rem 28rem at 76% 76%, rgba(255,124,196,.04), transparent 72%);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] [data-slot="aui_thread-viewport"]::before {
  opacity: .14;
  filter: brightness(1.12) saturate(1.08);
}

/* Ambient aurora stays behind the application chrome. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before {
  content: "";
  position: fixed;
  inset: -30%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(30rem 22rem at 18% 30%, color-mix(in srgb, var(--cyan) 20%, transparent), transparent 72%),
    radial-gradient(30rem 28rem at 72% 18%, color-mix(in srgb, var(--violet) 22%, transparent), transparent 74%),
    radial-gradient(34rem 26rem at 72% 78%, color-mix(in srgb, var(--pink) 16%, transparent), transparent 75%);
  filter: blur(38px) saturate(1.22);
  opacity: .56;
  animation: telegram-night-flow 24s ease-in-out infinite alternate;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root > * { position: relative; z-index: 1; }
@keyframes telegram-night-flow {
  0% { transform: translate3d(-3%, -2%, 0) scale(1); }
  50% { transform: translate3d(2%, 2%, 0) scale(1.045); }
  100% { transform: translate3d(4%, -1%, 0) scale(1.08); }
}

/* Glass material. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] header,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="header"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="toolbar"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > * {
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
}

:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] aside,
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="sidebar"] {
  background: linear-gradient(180deg, rgba(255,255,255,.88), rgba(246,250,254,.72)) !important;
  border-right: 1px solid rgba(120,155,185,.22) !important;
  box-shadow: inset -1px 0 rgba(255,255,255,.95), 12px 0 42px rgba(66,98,130,.08);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] header,
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="header"],
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="toolbar"] {
  background: rgba(248,252,255,.72) !important;
  border-bottom: 1px solid rgba(120,155,185,.18) !important;
  box-shadow: 0 10px 30px rgba(57,92,122,.06), inset 0 1px #fff;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="composer-root"] {
  background: rgba(255,255,255,.78) !important;
  border: 1px solid rgba(90,140,180,.24);
  box-shadow: 0 -18px 45px rgba(48,85,118,.08), 0 8px 30px rgba(48,85,118,.08), inset 0 1px #fff;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] {
  box-shadow: inset -1px 0 rgba(255,255,255,.16), inset 0 1px rgba(255,255,255,.12), 16px 0 55px rgba(0,0,0,.13);
}

/* Telegram-like selected chat row. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [data-state="active"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [data-state="active"] {
  background: linear-gradient(100deg, color-mix(in srgb, var(--telegram-blue) 18%, transparent), color-mix(in srgb, var(--violet) 11%, transparent)) !important;
  box-shadow: inset 2px 0 var(--telegram-blue), inset 0 1px rgba(255,255,255,.18), 0 5px 22px color-mix(in srgb, var(--telegram-blue) 10%, transparent);
}

/* Inputs and composer controls. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] input,
:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"] {
  background: color-mix(in srgb, var(--dt-input) 66%, transparent) !important;
  border-color: color-mix(in srgb, #fff 10%, var(--dt-border));
  box-shadow: inset 0 1px rgba(255,255,255,.12);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] input:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"]:focus {
  border-color: color-mix(in srgb, var(--cyan) 52%, var(--dt-border));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--cyan) 28%, transparent), 0 0 24px color-mix(in srgb, var(--cyan) 10%, transparent), inset 0 1px rgba(255,255,255,.14);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] {
  border: 1px solid color-mix(in srgb, var(--cyan) 20%, var(--dt-border));
  box-shadow: 0 -22px 60px rgba(0,0,0,.13), inset 0 1px rgba(255,255,255,.18);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"]:focus-within {
  border-color: color-mix(in srgb, var(--cyan) 46%, var(--dt-border));
  box-shadow: 0 -22px 60px rgba(0,0,0,.15), 0 0 34px color-mix(in srgb, var(--cyan) 10%, transparent), inset 0 1px rgba(255,255,255,.2);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > * {
  background: color-mix(in srgb, var(--dt-popover) 72%, transparent) !important;
  border: 1px solid color-mix(in srgb, #fff 15%, var(--dt-border)) !important;
  box-shadow: var(--night-shadow), inset 0 1px rgba(255,255,255,.16);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] {
  transition: background-color 160ms ease, border-color 160ms ease, box-shadow 200ms ease, transform 120ms ease, filter 180ms ease;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:hover { filter: saturate(1.08) brightness(1.025); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:active,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:active { transform: scale(.985); }

:root[data-hermes-theme="hermes-telegram-neon-flow"] * {
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--telegram-blue) 34%, transparent) transparent;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar { width: 8px; height: 8px; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-track { background: transparent; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--telegram-blue) 28%, transparent); border: 2px solid transparent; background-clip: padding-box; border-radius: 999px; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb:hover { background: color-mix(in srgb, var(--violet) 55%, transparent); background-clip: padding-box; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] ::selection { background: color-mix(in srgb, var(--telegram-blue) 30%, transparent); color: var(--ui-text-primary); }

@media (prefers-reduced-motion: reduce) {
  :root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before { animation: none; }
  :root[data-hermes-theme="hermes-telegram-neon-flow"] button,
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] { transition: none; }
}
`

function installEffects(ctx) {
  if (typeof document === 'undefined') return
  const existing = document.getElementById(EFFECT_STYLE_ID)
  if (existing) existing.remove()
  const style = document.createElement('style')
  style.id = EFFECT_STYLE_ID
  style.textContent = effectsCss
  document.head.appendChild(style)
  ctx.onDispose(() => style.remove())
}

export default {
  id: 'hermes-telegram-neon-flow',
  name: 'Telegram Neon Flow',
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
    installEffects(ctx)
  }
}
