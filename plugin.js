import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'hermes-telegram-neon-flow',
  label: 'Telegram Neon Flow',
  description: 'Telegram-inspired Liquid Glass UI with a richer night atmosphere, depth, glow and frosted surfaces.',
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

const effectsCss = `
:root[data-hermes-theme="hermes-telegram-neon-flow"] {
  --glass-blur: 30px;
  --glass-sat: 1.28;
  --glass-white: color-mix(in srgb, #fff 13%, transparent);
  --glass-edge: color-mix(in srgb, #fff 17%, var(--dt-border));
  --cyan: #51DFF7;
  --violet: #918BFF;
  --pink: #FF7CC4;
  --night-shadow: 0 24px 80px color-mix(in srgb, #000 34%, transparent);
}

/* Deep night canvas: the color comes from behind the glass, not from flat panels. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root {
  background:
    radial-gradient(58rem 42rem at 8% 4%, color-mix(in srgb, var(--cyan) 18%, transparent), transparent 70%),
    radial-gradient(52rem 46rem at 94% 10%, color-mix(in srgb, var(--violet) 21%, transparent), transparent 69%),
    radial-gradient(52rem 42rem at 78% 98%, color-mix(in srgb, var(--pink) 17%, transparent), transparent 70%),
    radial-gradient(34rem 30rem at 42% 54%, color-mix(in srgb, var(--cyan) 7%, transparent), transparent 72%),
    var(--dt-background);
  background-attachment: fixed;
  isolation: isolate;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] body { background: var(--dt-background); }

/* Slow moving light field. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before {
  content: "";
  position: fixed;
  inset: -35%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(28rem 22rem at 18% 30%, color-mix(in srgb, var(--cyan) 26%, transparent), transparent 72%),
    radial-gradient(30rem 28rem at 72% 18%, color-mix(in srgb, var(--violet) 28%, transparent), transparent 74%),
    radial-gradient(34rem 26rem at 72% 78%, color-mix(in srgb, var(--pink) 22%, transparent), transparent 75%);
  filter: blur(34px) saturate(1.32);
  opacity: .62;
  animation: telegram-night-flow 24s ease-in-out infinite alternate;
}

/* Fine grain + tiny light points give the dark surface visual depth. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: .24;
  background-image:
    radial-gradient(circle at 20% 25%, color-mix(in srgb, var(--cyan) 45%, transparent) .8px, transparent 1.5px),
    radial-gradient(circle at 72% 68%, color-mix(in srgb, var(--violet) 35%, transparent) .7px, transparent 1.4px),
    radial-gradient(circle at 46% 86%, color-mix(in srgb, var(--pink) 32%, transparent) .7px, transparent 1.4px);
  background-size: 41px 41px, 67px 67px, 89px 89px;
  mask-image: radial-gradient(ellipse at center, #000 25%, transparent 92%);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] #root > * { position: relative; z-index: 1; }

@keyframes telegram-night-flow {
  0% { transform: translate3d(-3%, -2%, 0) scale(1); }
  50% { transform: translate3d(2%, 2%, 0) scale(1.045); }
  100% { transform: translate3d(4%, -1%, 0) scale(1.08); }
}

/* Main glass panes. */
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

:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] {
  background:
    linear-gradient(180deg, color-mix(in srgb, #fff 7%, transparent), transparent 18%),
    color-mix(in srgb, var(--dt-sidebar) 54%, transparent) !important;
  border-right: 1px solid color-mix(in srgb, var(--cyan) 14%, var(--dt-sidebar-border)) !important;
  box-shadow:
    inset -1px 0 var(--glass-white),
    inset 0 1px var(--glass-white),
    18px 0 70px color-mix(in srgb, #000 20%, transparent),
    8px 0 42px color-mix(in srgb, var(--cyan) 7%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] header,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="header"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="toolbar"] {
  background:
    linear-gradient(180deg, color-mix(in srgb, #fff 8%, transparent), transparent 65%),
    color-mix(in srgb, var(--dt-background) 54%, transparent) !important;
  border-bottom: 1px solid color-mix(in srgb, #fff 12%, var(--dt-border)) !important;
  box-shadow: 0 14px 42px color-mix(in srgb, #000 14%, transparent), inset 0 1px var(--glass-white);
}

/* Floating composer: the strongest Liquid Glass element. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] {
  background:
    radial-gradient(26rem 9rem at 18% 0%, color-mix(in srgb, var(--cyan) 10%, transparent), transparent 70%),
    radial-gradient(24rem 10rem at 82% 100%, color-mix(in srgb, var(--violet) 9%, transparent), transparent 70%),
    color-mix(in srgb, var(--composer-fill) 58%, transparent) !important;
  border: 1px solid color-mix(in srgb, var(--cyan) 22%, var(--dt-border));
  box-shadow: 0 -24px 65px color-mix(in srgb, #000 20%, transparent), inset 0 1px #fff2, 0 0 45px color-mix(in srgb, var(--cyan) 7%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"]:focus-within {
  border-color: color-mix(in srgb, var(--cyan) 48%, var(--dt-border));
  box-shadow: 0 -24px 65px color-mix(in srgb, #000 22%, transparent), 0 0 0 1px color-mix(in srgb, var(--cyan) 24%, transparent), 0 0 48px color-mix(in srgb, var(--cyan) 15%, transparent), inset 0 1px #fff3;
}

/* Specular sweep across floating glass. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > *,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] {
  position: relative;
  overflow: hidden;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"]::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"]::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > *::before,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"]::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: linear-gradient(120deg, #fff2, transparent 24%, transparent 62%, color-mix(in srgb, var(--pink) 8%, transparent));
  opacity: .9;
  mask-image: linear-gradient(145deg, #000 0%, transparent 43%, transparent 70%, #000 100%);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper] > * {
  background: color-mix(in srgb, var(--dt-popover) 58%, transparent) !important;
  border: 1px solid color-mix(in srgb, #fff 16%, var(--dt-border)) !important;
  box-shadow: var(--night-shadow), 0 0 36px color-mix(in srgb, var(--violet) 7%, transparent), inset 0 1px #fff3;
}

/* Conversation atmosphere. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread-list"] {
  background:
    radial-gradient(46rem 28rem at 50% 28%, color-mix(in srgb, var(--cyan) 7%, transparent), transparent 72%),
    radial-gradient(38rem 28rem at 76% 76%, color-mix(in srgb, var(--pink) 6%, transparent), transparent 72%),
    linear-gradient(180deg, color-mix(in srgb, var(--dt-background) 82%, transparent), transparent 34%);
}

/* Message hover becomes a soft light field rather than a flat highlight. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread"] [data-slot="message"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread-list"] [data-slot="message"] {
  border-radius: 18px;
  transition: background 180ms ease, box-shadow 220ms ease, transform 180ms ease;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread"] [data-slot="message"]:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="thread-list"] [data-slot="message"]:hover {
  background: linear-gradient(90deg, color-mix(in srgb, var(--cyan) 5%, transparent), color-mix(in srgb, var(--violet) 3%, transparent), transparent) !important;
  box-shadow: inset 0 1px #fff1, 0 8px 30px color-mix(in srgb, #000 9%, transparent);
}

/* Bubble depth: user messages get the signature Telegram blue-violet glass tint. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] [class*="message-bubble"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [class*="chat-bubble"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-message-bubble] {
  border: 1px solid color-mix(in srgb, var(--cyan) 9%, transparent);
  box-shadow: inset 0 1px #fff2, 0 7px 25px color-mix(in srgb, #000 13%, transparent), 0 0 22px color-mix(in srgb, var(--violet) 4%, transparent);
}

/* Sidebar selection: luminous Telegram-style pill. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [data-state="active"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [aria-current="page"],
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [data-state="active"] {
  background:
    linear-gradient(100deg, color-mix(in srgb, var(--cyan) 18%, transparent), color-mix(in srgb, var(--violet) 17%, transparent) 52%, color-mix(in srgb, var(--pink) 13%, transparent)) !important;
  box-shadow:
    inset 2px 0 var(--cyan),
    inset 0 1px #fff2,
    0 7px 26px color-mix(in srgb, var(--violet) 12%, transparent),
    0 0 28px color-mix(in srgb, var(--cyan) 7%, transparent);
}

/* Search / controls / pills get the same glass material. */
:root[data-hermes-theme="hermes-telegram-neon-flow"] input,
:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"] {
  background: color-mix(in srgb, var(--dt-input) 66%, transparent) !important;
  border-color: color-mix(in srgb, #fff 10%, var(--dt-border));
  box-shadow: inset 0 1px #fff1;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] input:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea:focus,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"]:focus {
  border-color: color-mix(in srgb, var(--cyan) 52%, var(--dt-border));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--cyan) 35%, transparent), 0 0 28px color-mix(in srgb, var(--cyan) 12%, transparent), inset 0 1px #fff2;
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] {
  transition: background-color 160ms ease, border-color 160ms ease, box-shadow 200ms ease, transform 120ms ease, filter 180ms ease;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:hover { filter: saturate(1.12) brightness(1.04); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:active,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:active { transform: scale(.985); }

:root[data-hermes-theme="hermes-telegram-neon-flow"] button.bg-primary:hover,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] button[type="submit"]:hover {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--cyan) 38%, transparent), 0 7px 24px color-mix(in srgb, var(--cyan) 27%, transparent), 0 0 32px color-mix(in srgb, var(--violet) 15%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] button.rounded-full,
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"].rounded-full {
  box-shadow: inset 0 1px #fff2, 0 5px 20px color-mix(in srgb, #000 11%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-full.border,
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-2xl.border,
:root[data-hermes-theme="hermes-telegram-neon-flow"] .rounded-xl.border {
  border-color: color-mix(in srgb, #fff 11%, var(--dt-border));
  box-shadow: inset 0 1px #fff2, 0 8px 28px color-mix(in srgb, #000 10%, transparent);
}

:root[data-hermes-theme="hermes-telegram-neon-flow"] * {
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--cyan) 34%, transparent) transparent;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar { width: 8px; height: 8px; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-track { background: transparent; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--cyan) 28%, transparent); border: 2px solid transparent; background-clip: padding-box; border-radius: 999px; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb:hover { background: color-mix(in srgb, var(--violet) 55%, transparent); background-clip: padding-box; }

:root[data-hermes-theme="hermes-telegram-neon-flow"] ::selection { background: color-mix(in srgb, var(--cyan) 32%, transparent); color: var(--ui-text-primary); }

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
