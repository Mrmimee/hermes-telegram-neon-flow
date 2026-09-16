import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'hermes-telegram-neon-flow',
  label: 'Telegram Neon Flow',
  description: 'Telegram-inspired Liquid Glass UI with frosted surfaces, aurora lighting, soft glow and fluid interaction effects.',
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
    background: '#050912', foreground: '#F2F7FF', card: '#0E1829', cardForeground: '#F2F7FF',
    muted: '#0C1626', mutedForeground: '#9AAAC2', popover: '#0B1525', popoverForeground: '#F2F7FF',
    primary: '#8C86FF', primaryForeground: '#070A12', secondary: '#14243B', secondaryForeground: '#EAF2FF',
    accent: '#FF79C2', accentForeground: '#210A17', border: '#253A59', input: '#29405F', ring: '#4BDBF5',
    midground: '#8C86FF', midgroundForeground: '#070A12', composerRing: '#4BDBF5', destructive: '#FF6877',
    destructiveForeground: '#18070B', sidebarBackground: '#071120', sidebarBorder: '#1D3554',
    userBubble: '#132B49', userBubbleBorder: '#2D5A86'
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
    foreground: '#EEF4FF', black: '#0A1220', red: '#FF6877', green: '#6FD3A7', yellow: '#E7C775', blue: '#8C86FF', magenta: '#FF79C2', cyan: '#4BDBF5', white: '#D7E0EE',
    brightBlack: '#6D7F99', brightRed: '#FF929D', brightGreen: '#98E8C5', brightYellow: '#F3DC9A', brightBlue: '#B2AEFF', brightMagenta: '#FFB4DA', brightCyan: '#91F0FF', brightWhite: '#FFFFFF'
  }
}

const EFFECT_STYLE_ID = 'hermes-telegram-neon-flow-effects'

const effectsCss = `
:root[data-hermes-theme="hermes-telegram-neon-flow"] {
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
  --telegram-specular: linear-gradient(115deg, color-mix(in srgb, #fff 12%, transparent), transparent 30%, transparent 70%, color-mix(in srgb, var(--ui-accent) 7%, transparent));
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root {
  background:
    radial-gradient(44rem 36rem at 4% 4%, color-mix(in srgb, var(--dt-ring) 16%, transparent), transparent 68%),
    radial-gradient(42rem 34rem at 96% 16%, color-mix(in srgb, var(--ui-accent) 15%, transparent), transparent 70%),
    radial-gradient(40rem 34rem at 68% 100%, color-mix(in srgb, var(--ui-primary) 12%, transparent), transparent 72%),
    radial-gradient(28rem 22rem at 34% 62%, color-mix(in srgb, var(--dt-ring) 6%, transparent), transparent 72%),
    var(--dt-background);
  background-attachment: fixed;
  isolation: isolate;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] body { background: var(--dt-background); }

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before {
  content: "";
  position: fixed;
  inset: -24%;
  z-index: 0;
  pointer-events: none;
  opacity: .42;
  background:
    radial-gradient(30rem 22rem at 12% 25%, color-mix(in srgb, var(--dt-ring) 22%, transparent), transparent 72%),
    radial-gradient(28rem 26rem at 80% 18%, color-mix(in srgb, var(--dt-primary) 21%, transparent), transparent 74%),
    radial-gradient(34rem 26rem at 70% 78%, color-mix(in srgb, var(--ui-accent) 19%, transparent), transparent 76%);
  filter: blur(26px) saturate(1.2);
  transform: translate3d(0,0,0) scale(1);
  animation: hermes-telegram-aurora 22s ease-in-out infinite alternate;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: .15;
  background-image:
    radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--dt-ring) 35%, transparent) 1px, transparent 1.5px),
    radial-gradient(circle at 70% 70%, color-mix(in srgb, var(--ui-accent) 28%, transparent) .8px, transparent 1.3px);
  background-size: 37px 37px, 53px 53px;
  mask-image: linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root > * { position: relative; z-index: 1; }

@keyframes hermes-telegram-aurora {
  0% { transform: translate3d(-2%, -1%, 0) scale(1); }
  50% { transform: translate3d(1.5%, 1.8%, 0) scale(1.035); }
  100% { transform: translate3d(3%, -.8%, 0) scale(1.055); }
}

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
  background: color-mix(in srgb, var(--dt-sidebar) 64%, transparent) !important;
  border-color: color-mix(in srgb, var(--dt-sidebar-border) 78%, transparent) !important;
  box-shadow: inset -1px 0 color-mix(in srgb, #fff 9%, transparent), 12px 0 48px color-mix(in srgb, #000 13%, transparent), 8px 0 30px color-mix(in srgb, var(--dt-ring) 5%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] {
  background: color-mix(in srgb, var(--composer-fill) 72%, transparent) !important;
  border-color: color-mix(in srgb, var(--dt-composer-ring) 42%, transparent);
  box-shadow: 0 -18px 42px color-mix(in srgb, #000 11%, transparent), inset 0 1px color-mix(in srgb, #fff 13%, transparent), 0 0 28px color-mix(in srgb, var(--dt-composer-ring) 5%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"]:focus-within {
  box-shadow: 0 -18px 42px color-mix(in srgb, #000 11%, transparent), 0 0 0 1px color-mix(in srgb, var(--dt-composer-ring) 34%, transparent), 0 0 34px color-mix(in srgb, var(--dt-composer-ring) 15%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > * {
  position: relative;
  overflow: hidden;
  background: color-mix(in srgb, var(--dt-popover) 70%, transparent) !important;
  border-color: color-mix(in srgb, var(--dt-border) 82%, transparent) !important;
  box-shadow: 0 22px 70px color-mix(in srgb, #000 25%, transparent), 0 0 34px color-mix(in srgb, var(--ui-accent) 6%, transparent), inset 0 1px color-mix(in srgb, #fff 14%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"]::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"]::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"]::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: var(--telegram-specular);
  opacity: .7;
  mask-image: linear-gradient(125deg, #000 0%, transparent 36%, transparent 68%, #000 100%);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] header,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="header"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="toolbar"] {
  background: color-mix(in srgb, var(--dt-background) 62%, transparent) !important;
  backdrop-filter: blur(20px) saturate(1.18);
  -webkit-backdrop-filter: blur(20px) saturate(1.18);
  border-bottom-color: color-mix(in srgb, var(--dt-border) 68%, transparent) !important;
  box-shadow: 0 8px 30px color-mix(in srgb, #000 8%, transparent), inset 0 -1px color-mix(in srgb, #fff 8%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread-list"] {
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--dt-background) 88%, transparent), transparent 24%),
    radial-gradient(36rem 24rem at 50% 30%, color-mix(in srgb, var(--dt-ring) 6%, transparent), transparent 72%),
    radial-gradient(30rem 22rem at 72% 78%, color-mix(in srgb, var(--ui-accent) 5%, transparent), transparent 74%);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread"] [data-slot="message"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread-list"] [data-slot="message"] {
  border-radius: 16px;
  transition: background-color 160ms ease, box-shadow 180ms ease, transform 160ms ease;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread"] [data-slot="message"]:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread-list"] [data-slot="message"]:hover {
  background: color-mix(in srgb, var(--ui-accent) 4%, transparent);
  box-shadow: inset 0 1px color-mix(in srgb, #fff 4%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [class*="message-bubble"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [class*="chat-bubble"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-message-bubble] {
  box-shadow: inset 0 1px color-mix(in srgb, #fff 9%, transparent), 0 5px 22px color-mix(in srgb, #000 10%, transparent), 0 0 16px color-mix(in srgb, var(--dt-ring) 3%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [data-state="active"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [data-state="active"] {
  background: linear-gradient(100deg, color-mix(in srgb, var(--dt-ring) 16%, transparent), color-mix(in srgb, var(--ui-primary) 13%, transparent) 46%, color-mix(in srgb, var(--ui-accent) 10%, transparent)) !important;
  box-shadow: inset 2px 0 var(--ui-accent), inset 0 1px color-mix(in srgb, #fff 11%, transparent), 0 6px 22px color-mix(in srgb, var(--ui-primary) 10%, transparent), 0 0 24px color-mix(in srgb, var(--dt-ring) 5%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] {
  transition: background-color 160ms ease, border-color 160ms ease, box-shadow 180ms ease, transform 120ms ease, filter 180ms ease;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:hover { filter: saturate(1.08); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:active,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:active { transform: translateY(.5px) scale(.985); }

:root[data-hermes-theme="hermes-telegram-neon-flow"] button.bg-primary:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] button[type="submit"]:hover {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--dt-ring) 34%, transparent), 0 6px 22px color-mix(in srgb, var(--dt-ring) 24%, transparent), 0 0 28px color-mix(in srgb, var(--ui-primary) 14%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] input:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"]:focus {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--dt-ring) 60%, transparent), 0 0 24px color-mix(in srgb, var(--dt-ring) 13%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button.rounded-full,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"].rounded-full {
  box-shadow: inset 0 1px color-mix(in srgb, #fff 9%, transparent), 0 4px 18px color-mix(in srgb, #000 8%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-full.border,
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-2xl.border,
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-xl.border {
  box-shadow: inset 0 1px color-mix(in srgb, #fff 10%, transparent), 0 7px 26px color-mix(in srgb, #000 8%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] * {
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--ui-text-tertiary) 34%, transparent) transparent;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar { width: 8px; height: 8px; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-track { background: transparent; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--ui-text-tertiary) 27%, transparent);
  border: 2px solid transparent;
  background-clip: padding-box;
  border-radius: 999px;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--ui-accent) 50%, transparent);
  background-clip: padding-box;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] ::selection {
  background: color-mix(in srgb, var(--ui-accent) 32%, transparent);
  color: var(--ui-text-primary);
}

@media (prefers-reduced-motion: reduce) {
  :root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before { animation: none; }
  :root[data-hermes-theme="hermes-telegram-neon-flow"] button,
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"],
  :root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="message"] { transition: none; }
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
