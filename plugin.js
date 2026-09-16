import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'hermes-telegram-neon-flow',
  label: 'Telegram Neon Flow',
  description: 'Telegram-inspired glass UI with frosted surfaces, aurora lighting, soft glow and fluid interaction effects.',
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
    background: '#080D16', foreground: '#EEF4FF', card: '#111A28', cardForeground: '#EEF4FF',
    muted: '#111B29', mutedForeground: '#94A2B7', popover: '#101927', popoverForeground: '#EEF4FF',
    primary: '#817AFF', primaryForeground: '#080B12', secondary: '#172235', secondaryForeground: '#E4ECF8',
    accent: '#F17ABB', accentForeground: '#210C17', border: '#26354B', input: '#2A3A51', ring: '#46D2F1',
    midground: '#817AFF', midgroundForeground: '#080B12', composerRing: '#46D2F1', destructive: '#FF6877',
    destructiveForeground: '#18070B', sidebarBackground: '#0B1421', sidebarBorder: '#1E2C40',
    userBubble: '#172A45', userBubbleBorder: '#29466D'
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
    foreground: '#EEF4FF', black: '#0D1420', red: '#FF6877', green: '#6FD3A7', yellow: '#E7C775', blue: '#817AFF', magenta: '#F17ABB', cyan: '#46D2F1', white: '#D7E0EE',
    brightBlack: '#68778D', brightRed: '#FF929D', brightGreen: '#98E8C5', brightYellow: '#F3DC9A', brightBlue: '#AAA5FF', brightMagenta: '#FFACD4', brightCyan: '#8EEBFA', brightWhite: '#FFFFFF'
  }
}

const EFFECT_STYLE_ID = 'hermes-telegram-neon-flow-effects'

const effectsCss = `
:root[data-hermes-theme="hermes-telegram-neon-flow"] {
  /* Glass tuning: these are existing Hermes theme knobs, not core patches. */
  --theme-mix-chrome: 72%;
  --theme-mix-sidebar: 72%;
  --theme-mix-card: 28%;
  --theme-mix-elevated: 40%;
  --theme-mix-bubble: 34%;
  --theme-row-hover-accent-mix: 8%;
  --theme-row-active-accent-mix: 14%;
  --theme-control-hover-accent-mix: 10%;
  --theme-control-active-accent-mix: 14%;
  --warm-glow: color-mix(in srgb, var(--ui-warm) 24%, color-mix(in srgb, var(--ui-accent) 10%, transparent));
  --telegram-glass-blur: 22px;
  --telegram-glass-saturate: 1.18;
  --telegram-glass-border: color-mix(in srgb, #fff 22%, var(--dt-border));
  --telegram-glass-shadow: 0 18px 55px color-mix(in srgb, #000 14%, transparent);
  --telegram-glow: color-mix(in srgb, var(--ui-accent) 30%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root {
  background:
    radial-gradient(42rem 34rem at 7% 7%, color-mix(in srgb, #43d9f2 14%, transparent), transparent 68%),
    radial-gradient(38rem 30rem at 92% 18%, color-mix(in srgb, #8b7cff 13%, transparent), transparent 70%),
    radial-gradient(36rem 30rem at 68% 96%, color-mix(in srgb, #f17abb 10%, transparent), transparent 72%),
    var(--dt-background);
  background-attachment: fixed;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] body {
  background: var(--dt-background);
}

/* Main chrome: translucent layers let the aurora underneath contribute to the surface. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-status-stack"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > * {
  backdrop-filter: blur(var(--telegram-glass-blur)) saturate(var(--telegram-glass-saturate));
  -webkit-backdrop-filter: blur(var(--telegram-glass-blur)) saturate(var(--telegram-glass-saturate));
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] {
  background: color-mix(in srgb, var(--dt-sidebar) 70%, transparent) !important;
  border-color: color-mix(in srgb, var(--dt-sidebar-border) 72%, transparent) !important;
  box-shadow: inset -1px 0 color-mix(in srgb, #fff 7%, transparent), 12px 0 42px color-mix(in srgb, #000 7%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] {
  background: color-mix(in srgb, var(--composer-fill) 78%, transparent) !important;
  border-color: color-mix(in srgb, var(--dt-composer-ring) 34%, transparent);
  box-shadow: 0 -18px 42px color-mix(in srgb, #000 8%, transparent), inset 0 1px color-mix(in srgb, #fff 11%, transparent);
}

/* Elevated surfaces: Telegram-like frosted cards with a fine top highlight. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > * {
  background: color-mix(in srgb, var(--dt-popover) 76%, transparent) !important;
  border-color: color-mix(in srgb, var(--dt-border) 72%, transparent) !important;
  box-shadow: var(--telegram-glass-shadow), inset 0 1px color-mix(in srgb, #fff 12%, transparent);
}

/* Composer and floating controls get a soft cyan focus halo rather than a hard ring. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"]:focus-within {
  box-shadow: 0 -18px 42px color-mix(in srgb, #000 8%, transparent), 0 0 0 1px color-mix(in srgb, var(--dt-composer-ring) 28%, transparent), 0 0 28px color-mix(in srgb, var(--dt-composer-ring) 9%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] {
  transition: background-color 160ms ease, border-color 160ms ease, box-shadow 180ms ease, transform 120ms ease, filter 180ms ease;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:hover {
  filter: saturate(1.04);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button:active,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:active {
  transform: translateY(0.5px) scale(0.985);
}

/* Primary actions: restrained Telegram-blue/cyan glow. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] button.bg-primary:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] button[type="submit"]:hover {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--dt-ring) 28%, transparent), 0 6px 22px color-mix(in srgb, var(--dt-ring) 20%, transparent);
}

/* Aurora edge light for focused fields. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] input:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"]:focus {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--dt-ring) 55%, transparent), 0 0 20px color-mix(in srgb, var(--dt-ring) 10%, transparent);
}

/* A subtle moving light field; no DOM additions and no core source changes. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before {
  content: "";
  position: fixed;
  inset: -24%;
  z-index: 0;
  pointer-events: none;
  opacity: .34;
  background:
    radial-gradient(28rem 20rem at 15% 28%, color-mix(in srgb, #43d9f2 14%, transparent), transparent 72%),
    radial-gradient(26rem 24rem at 78% 22%, color-mix(in srgb, #817aff 13%, transparent), transparent 74%),
    radial-gradient(30rem 24rem at 70% 78%, color-mix(in srgb, #f17abb 11%, transparent), transparent 76%);
  filter: blur(18px);
  transform: translate3d(0,0,0);
  animation: hermes-telegram-aurora 18s ease-in-out infinite alternate;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root > * {
  position: relative;
  z-index: 1;
}

@keyframes hermes-telegram-aurora {
  0% { transform: translate3d(-1.5%, -1%, 0) scale(1); }
  50% { transform: translate3d(1%, 1.5%, 0) scale(1.025); }
  100% { transform: translate3d(2%, -0.5%, 0) scale(1.04); }
}

/* Fine light catch on floating pills and cards. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-full.border,
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-2xl.border,
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-xl.border {
  box-shadow: inset 0 1px color-mix(in srgb, #fff 9%, transparent), 0 6px 24px color-mix(in srgb, #000 5%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  :root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before {
    animation: none;
  }
  :root[data-hermes-theme="hermes-telegram-neon-flow"] button,
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] {
    transition: none;
  }
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
