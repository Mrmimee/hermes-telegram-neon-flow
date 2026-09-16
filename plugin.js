import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'hermes-telegram-neon-flow',
  label: 'Telegram Neon Flow',
  description: 'Telegram-inspired Liquid Glass with a fine, colorful floral doodle field and polished light/dark surfaces.',
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

// Fine, small, multi-color Telegram-inspired "碎花" marks. Kept as an inline SVG so the plugin stays single-file.
const doodleSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cg fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.15'%3E%3Cg stroke='%234EA4F5'%3E%3Cpath d='M18 24l13-7-4 10-9-3z'/%3E%3Cpath d='M154 28l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z'/%3E%3C/g%3E%3Cg stroke='%23E96AB2'%3E%3Cpath d='M71 20c4-7 14-7 18 0 4 7-3 13-9 18-6-5-13-11-9-18z'/%3E%3Cpath d='M190 94c5-6 14-2 14 5 0 7-9 12-14 16-5-4-14-9-14-16 0-7 9-11 14-5z'/%3E%3C/g%3E%3Cg stroke='%23918BFF'%3E%3Ccircle cx='39' cy='91' r='8'/%3E%3Cpath d='M34 91h10M39 86v10'/%3E%3Cpath d='M121 164l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z'/%3E%3C/g%3E%3Cg stroke='%2351DFF7'%3E%3Cpath d='M86 105c0-6 5-10 11-10s11 4 11 10-5 10-11 10-11-4-11-10z'/%3E%3Cpath d='M91 105h12M97 99v12'/%3E%3Cpath d='M31 157c5-6 12-6 17 0l-4 5-4-2-4 4-4-4-4 2z'/%3E%3C/g%3E%3Cg stroke='%23F3B562'%3E%3Cpath d='M175 48c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z'/%3E%3Cpath d='M180 48h8M184 44v8'/%3E%3Cpath d='M52 190l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1z'/%3E%3C/g%3E%3Cg stroke='%2374C69D'%3E%3Cpath d='M132 78c8-8 18-5 20 2-8 3-14 7-20 2z'/%3E%3Cpath d='M133 82c5 3 9 7 10 13'/%3E%3Cpath d='M15 126c7-7 15-5 17 2-7 2-12 6-17 1z'/%3E%3Cpath d='M16 130c4 2 7 6 8 10'/%3E%3C/g%3E%3Cg stroke='%23FF7CC4'%3E%3Ccircle cx='211' cy='143' r='3'/%3E%3Ccircle cx='66' cy='132' r='2.5'/%3E%3Cpath d='M109 30l1 3 3 1-3 1-1 3-1-3-3-1 3-1z'/%3E%3C/g%3E%3Cg stroke='%237FA9FF'%3E%3Cpath d='M145 119l14-7-5 12-9 2z'/%3E%3Cpath d='M197 183l1 4 4 1-4 1-1 4-1-4-4-1 4-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
const sparkleSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cg fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'%3E%3Cg stroke='%2351DFF7'%3E%3Cpath d='M22 46l2 6 6 2-6 2-2 6-2-6-6-2 6-2z'/%3E%3C/g%3E%3Cg stroke='%23FF7CC4'%3E%3Cpath d='M118 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z'/%3E%3C/g%3E%3Cg stroke='%23918BFF'%3E%3Ccircle cx='92' cy='120' r='3'/%3E%3Cpath d='M148 92l1 4 4 1-4 1-1 4-1-4-4-1 4-1z'/%3E%3C/g%3E%3Cg stroke='%23F3B562'%3E%3Ccircle cx='48' cy='142' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

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

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-repeat: repeat;
  will-change: background-position, transform;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::before {
  background-image: url("${doodleSvg}");
  background-size: 168px 168px;
  background-position: var(--doodle-x, 0px) var(--doodle-y, 0px);
  opacity: .15;
  transition: background-position 5.5s cubic-bezier(.22,.61,.36,1);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::after {
  background-image: url("${sparkleSvg}");
  background-size: 138px 138px;
  background-position: var(--sparkle-x, 0px) var(--sparkle-y, 0px);
  opacity: .075;
  transform: scale(1.02);
  transition: background-position 7s cubic-bezier(.22,.61,.36,1);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"] > * {
  position: relative;
  z-index: 1;
}

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
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="aui_thread-viewport"]::before { opacity: .17; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="aui_thread-viewport"]::after { opacity: .07; }

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
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] [data-slot="aui_thread-viewport"]::before { opacity: .12; filter: brightness(1.08) saturate(1.12); }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] [data-slot="aui_thread-viewport"]::after { opacity: .055; }

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

:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [data-state="active"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [data-state="active"] {
  background: linear-gradient(100deg, color-mix(in srgb, var(--telegram-blue) 18%, transparent), color-mix(in srgb, var(--violet) 11%, transparent)) !important;
  box-shadow: inset 2px 0 var(--telegram-blue), inset 0 1px rgba(255,255,255,.18), 0 5px 22px color-mix(in srgb, var(--telegram-blue) 10%, transparent);
}

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
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::before,
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::after { transition: none; }
  :root[data-hermes-theme="hermes-telegram-neon-flow"] button,
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] { transition: none; }
}
`

function randomOffset(range) {
  return `${Math.round((Math.random() * 2 - 1) * range)}px`
}

function installDoodleMotion(viewport) {
  if (typeof window === 'undefined' || !viewport) return () => {}
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reduced) return () => {}

  let timer = 0
  const tick = () => {
    viewport.style.setProperty('--doodle-x', randomOffset(34))
    viewport.style.setProperty('--doodle-y', randomOffset(26))
    viewport.style.setProperty('--sparkle-x', randomOffset(46))
    viewport.style.setProperty('--sparkle-y', randomOffset(38))
    timer = window.setTimeout(tick, 5200 + Math.round(Math.random() * 5200))
  }
  tick()
  return () => window.clearTimeout(timer)
}

function installEffects(ctx) {
  if (typeof document === 'undefined') return
  const existing = document.getElementById(EFFECT_STYLE_ID)
  if (existing) existing.remove()
  const style = document.createElement('style')
  style.id = EFFECT_STYLE_ID
  style.textContent = effectsCss
  document.head.appendChild(style)

  let stopMotion = () => {}
  let currentViewport = null
  const attach = () => {
    const viewport = document.querySelector('[data-slot="aui_thread-viewport"]')
    if (!viewport || viewport === currentViewport) return
    stopMotion()
    currentViewport = viewport
    stopMotion = installDoodleMotion(viewport)
  }
  attach()
  const observer = new MutationObserver(attach)
  observer.observe(document.body, { childList: true, subtree: true })

  ctx.onDispose(() => {
    stopMotion()
    observer.disconnect()
    style.remove()
  })
}

export default {
  id: 'hermes-telegram-neon-flow',
  name: 'Telegram Neon Flow',
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
    installEffects(ctx)
  }
}
