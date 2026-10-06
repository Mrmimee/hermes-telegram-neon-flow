import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'hermes-atelier-laurel',
  label: 'Hermes Atelier',
  description: 'Warm editorial atelier: vermilion, parchment, ink and laurel linework.',
  colors: {
    background: '#F4EBDD', foreground: '#2B241D', card: '#FFF9EF', cardForeground: '#2B241D',
    muted: '#EDE0CD', mutedForeground: '#756657', popover: '#FFFDF7', popoverForeground: '#2B241D',
    primary: '#E85A1C', primaryForeground: '#FFF9EF', secondary: '#E7D6BD', secondaryForeground: '#3A3027',
    accent: '#B67A2C', accentForeground: '#2D2115', border: '#D7C3A7', input: '#D5C0A3',
    ring: '#E85A1C', midground: '#E85A1C', midgroundForeground: '#FFF9EF', composerRing: '#C98B35',
    destructive: '#B83A2B', destructiveForeground: '#FFF9EF',
    sidebarBackground: '#EFE1CD', sidebarBorder: '#D3BFA2',
    userBubble: '#F6D9C4', userBubbleBorder: '#E8B99B'
  },
  darkColors: {
    background: '#201711', foreground: '#F6E8D0', card: '#2B2018', cardForeground: '#F6E8D0',
    muted: '#33251B', mutedForeground: '#BBAA91', popover: '#2A1E16', popoverForeground: '#F6E8D0',
    primary: '#F06A27', primaryForeground: '#26140B', secondary: '#403024', secondaryForeground: '#F1DFC4',
    accent: '#D39A43', accentForeground: '#24170C', border: '#55402E', input: '#5B4532',
    ring: '#F06A27', midground: '#F06A27', midgroundForeground: '#26140B', composerRing: '#D39A43',
    destructive: '#E45A4D', destructiveForeground: '#260D0A',
    sidebarBackground: '#19120D', sidebarBorder: '#463326',
    userBubble: '#4A2A1B', userBubbleBorder: '#74422A'
  },
  typography: {
    fontSans: 'Georgia, "Times New Roman", "Songti SC", "STSong", "Noto Serif CJK SC", serif',
    fontMono: '"JetBrains Mono", "SF Mono", Menlo, Monaco, monospace'
  },
  terminal: {
    foreground: '#2B241D', black: '#2B241D', red: '#B83A2B', green: '#68734A', yellow: '#A86F22',
    blue: '#6E6658', magenta: '#A95759', cyan: '#527D78', white: '#E8D9C2',
    brightBlack: '#756657', brightRed: '#D94B38', brightGreen: '#84915D', brightYellow: '#C58A36',
    brightBlue: '#8D8270', brightMagenta: '#C97978', brightCyan: '#6C9D96', brightWhite: '#FFF9EF'
  },
  darkTerminal: {
    foreground: '#F6E8D0', black: '#2B2018', red: '#E45A4D', green: '#9EAE72', yellow: '#D8A85C',
    blue: '#B7AA91', magenta: '#D78A88', cyan: '#88B7A9', white: '#E6D4B8',
    brightBlack: '#8C7963', brightRed: '#F08A7D', brightGreen: '#B8C88A', brightYellow: '#EBC47F',
    brightBlue: '#CEC1A9', brightMagenta: '#E8A5A1', brightCyan: '#A9D5C6', brightWhite: '#FFF9EF'
  }
}

const STYLE_ID = 'hermes-atelier-laurel-effects'
const laurelPattern = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220'%3E%3Cg fill='none' stroke='%233B3025' stroke-width='1.05' stroke-linecap='round' stroke-linejoin='round' opacity='.20'%3E%3Cpath d='M12 194 C75 145 111 91 151 18'/%3E%3Cpath d='M27 184 C91 141 126 91 161 24'/%3E%3Cpath d='M49 164 C39 151 27 145 16 145 M60 151 C47 139 38 130 29 117 M73 135 C60 123 53 112 47 99 M86 117 C73 107 67 95 62 82 M100 98 C87 89 82 77 79 65 M115 77 C103 68 99 57 97 46 M132 54 C120 46 117 37 117 28'/%3E%3Cpath d='M50 165 C60 153 73 148 83 149 M65 146 C77 133 91 129 101 131 M80 126 C94 113 107 110 118 113 M96 104 C109 91 123 89 134 91 M111 82 C125 69 138 67 149 69 M128 58 C140 47 153 45 163 47'/%3E%3Cpath d='M228 203 C221 151 235 101 284 44'/%3E%3Cpath d='M235 201 C232 148 245 102 291 51'/%3E%3Cpath d='M234 181 C219 173 209 162 204 151 M235 163 C219 155 212 145 208 134 M239 145 C224 138 217 128 214 117 M244 126 C231 119 225 109 223 98 M251 107 C239 101 234 91 233 81 M259 88 C247 81 243 72 244 63'/%3E%3Cpath d='M244 184 C256 174 270 172 281 176 M242 163 C255 151 269 150 280 153 M243 143 C257 132 271 132 282 135 M247 123 C261 112 274 113 284 116 M252 103 C265 93 278 94 288 97 M259 84 C272 74 283 76 292 79'/%3E%3C/g%3E%3C/svg%3E"
const grain = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E"

const css = `
:root[data-hermes-theme="hermes-atelier-laurel"] { --atelier-ink:#3B3025; --atelier-orange:#E85A1C; --atelier-gold:#B67A2C; --atelier-paper:#F4EBDD; --atelier-night:#201711; --atelier-shadow:0 18px 55px rgba(67,42,22,.12); }
:root[data-hermes-theme="hermes-atelier-laurel"] #root { position:relative; min-height:100%; overflow:hidden; font-family:var(--dt-font-sans); text-rendering:optimizeLegibility; }
:root[data-hermes-theme="hermes-atelier-laurel"] #root::before { content:""; position:fixed; inset:0; z-index:0; pointer-events:none; background-image:url("${grain}"); mix-blend-mode:multiply; opacity:.055; }
:root[data-hermes-theme="hermes-atelier-laurel"] #root::after { content:""; position:fixed; inset:0; z-index:0; pointer-events:none; background-image:url("${laurelPattern}"); background-size:320px 220px; background-repeat:repeat; opacity:.72; transform:rotate(-2deg) scale(1.04); animation:atelier-paper-drift 34s ease-in-out infinite alternate; }
:root[data-hermes-theme="hermes-atelier-laurel"] #root > * { position:relative; z-index:1; }
:root[data-hermes-theme="hermes-atelier-laurel"][data-hermes-mode="light"] #root { background:radial-gradient(45rem 30rem at 8% 0%,rgba(232,90,28,.13),transparent 72%),radial-gradient(38rem 30rem at 92% 12%,rgba(182,122,44,.12),transparent 72%),linear-gradient(135deg,#FFF8EC 0%,#F4EBDD 52%,#EFE0CA 100%); }
:root[data-hermes-theme="hermes-atelier-laurel"][data-hermes-mode="dark"] #root { background:radial-gradient(44rem 32rem at 8% 0%,rgba(240,106,39,.12),transparent 72%),radial-gradient(38rem 28rem at 90% 15%,rgba(211,154,67,.09),transparent 72%),linear-gradient(135deg,#251A12 0%,#201711 55%,#17100C 100%); }
@keyframes atelier-paper-drift { from { background-position:0 0; } to { background-position:24px -16px; } }
:root[data-hermes-theme="hermes-atelier-laurel"] aside,:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="sidebar"],:root[data-hermes-theme="hermes-atelier-laurel"] header,:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="header"],:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="toolbar"],:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="composer-root"],:root[data-hermes-theme="hermes-atelier-laurel"] [role="dialog"],:root[data-hermes-theme="hermes-atelier-laurel"] [role="menu"] { backdrop-filter:blur(18px) saturate(1.06); -webkit-backdrop-filter:blur(18px) saturate(1.06); }
:root[data-hermes-theme="hermes-atelier-laurel"][data-hermes-mode="light"] aside,:root[data-hermes-theme="hermes-atelier-laurel"][data-hermes-mode="light"] [data-slot="sidebar"] { background:rgba(244,235,221,.84)!important; border-right:1px solid rgba(93,69,45,.18)!important; box-shadow:inset -1px 0 rgba(255,255,255,.82),12px 0 42px rgba(78,48,25,.08); }
:root[data-hermes-theme="hermes-atelier-laurel"][data-hermes-mode="dark"] aside,:root[data-hermes-theme="hermes-atelier-laurel"][data-hermes-mode="dark"] [data-slot="sidebar"] { background:rgba(32,23,17,.88)!important; border-right:1px solid rgba(214,171,115,.14)!important; }
:root[data-hermes-theme="hermes-atelier-laurel"] header,:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="header"],:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="toolbar"] { border-bottom:1px solid color-mix(in srgb,var(--dt-border) 78%,transparent)!important; box-shadow:0 8px 30px rgba(55,35,20,.06),inset 0 1px rgba(255,255,255,.5); }
:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="composer-root"] { border:1px solid color-mix(in srgb,var(--atelier-gold) 34%,var(--dt-border)); box-shadow:0 -16px 48px rgba(55,35,20,.10),inset 0 1px rgba(255,255,255,.45); }
:root[data-hermes-theme="hermes-atelier-laurel"] aside [aria-current="page"],:root[data-hermes-theme="hermes-atelier-laurel"] aside [data-state="active"],:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="sidebar"] [aria-current="page"],:root[data-hermes-theme="hermes-atelier-laurel"] [data-slot="sidebar"] [data-state="active"] { background:rgba(232,90,28,.12)!important; box-shadow:inset 3px 0 var(--atelier-orange),inset 0 1px rgba(255,255,255,.18); }
:root[data-hermes-theme="hermes-atelier-laurel"] input,:root[data-hermes-theme="hermes-atelier-laurel"] textarea,:root[data-hermes-theme="hermes-atelier-laurel"] [contenteditable="true"] { border-color:color-mix(in srgb,var(--atelier-gold) 28%,var(--dt-border)); box-shadow:inset 0 1px rgba(255,255,255,.18); }
:root[data-hermes-theme="hermes-atelier-laurel"] input:focus,:root[data-hermes-theme="hermes-atelier-laurel"] textarea:focus,:root[data-hermes-theme="hermes-atelier-laurel"] [contenteditable="true"]:focus { border-color:color-mix(in srgb,var(--atelier-orange) 65%,var(--dt-border)); box-shadow:0 0 0 1px color-mix(in srgb,var(--atelier-orange) 24%,transparent),0 0 18px color-mix(in srgb,var(--atelier-orange) 10%,transparent); }
:root[data-hermes-theme="hermes-atelier-laurel"] [role="dialog"],:root[data-hermes-theme="hermes-atelier-laurel"] [role="menu"] { border:1px solid color-mix(in srgb,var(--atelier-gold) 28%,var(--dt-border))!important; box-shadow:var(--atelier-shadow),inset 0 1px rgba(255,255,255,.18); }
:root[data-hermes-theme="hermes-atelier-laurel"] button,:root[data-hermes-theme="hermes-atelier-laurel"] [role="button"] { transition:background-color 150ms ease,border-color 180ms ease,box-shadow 180ms ease,transform 120ms ease; }
:root[data-hermes-theme="hermes-atelier-laurel"] button:hover,:root[data-hermes-theme="hermes-atelier-laurel"] [role="button"]:hover { filter:saturate(1.04); }
:root[data-hermes-theme="hermes-atelier-laurel"] button:active,:root[data-hermes-theme="hermes-atelier-laurel"] [role="button"]:active { transform:scale(.988); }
:root[data-hermes-theme="hermes-atelier-laurel"] * { scrollbar-width:thin; scrollbar-color:rgba(120,87,54,.36) transparent; }
:root[data-hermes-theme="hermes-atelier-laurel"] *::-webkit-scrollbar { width:8px; height:8px; }
:root[data-hermes-theme="hermes-atelier-laurel"] *::-webkit-scrollbar-thumb { background:rgba(120,87,54,.32); border:2px solid transparent; background-clip:padding-box; border-radius:999px; }
@media (prefers-reduced-motion:reduce) { :root[data-hermes-theme="hermes-atelier-laurel"] #root::after { animation:none; } :root[data-hermes-theme="hermes-atelier-laurel"] button,:root[data-hermes-theme="hermes-atelier-laurel"] [role="button"] { transition:none; } }
`

function installEffects(ctx) {
  if (typeof document === 'undefined') return
  document.getElementById(STYLE_ID)?.remove()
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = css
  document.head.appendChild(style)
  ctx.onDispose(() => style.remove())
}

export default {
  id: 'hermes-atelier-laurel',
  name: 'Hermes Atelier',
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
    installEffects(ctx)
  }
}
