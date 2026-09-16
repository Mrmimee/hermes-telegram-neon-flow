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

const STYLE_ID = 'hermes-telegram-neon-flow-effects'
const COLORS = ['#4EA4F5', '#E96AB2', '#918BFF', '#51DFF7', '#F3B562', '#74C69D', '#FF7CC4', '#7FA9FF']
const TYPES = ['flower', 'leaf', 'heart', 'star', 'dot', 'sparkle']

const doodleSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cg fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.15'%3E%3Cg stroke='%234EA4F5'%3E%3Cpath d='M18 24l13-7-4 10-9-3z'/%3E%3Cpath d='M154 28l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z'/%3E%3C/g%3E%3Cg stroke='%23E96AB2'%3E%3Cpath d='M71 20c4-7 14-7 18 0 4 7-3 13-9 18-6-5-13-11-9-18z'/%3E%3Cpath d='M190 94c5-6 14-2 14 5 0 7-9 12-14 16-5-4-14-9-14-16 0-7 9-11 14-5z'/%3E%3C/g%3E%3Cg stroke='%23918BFF'%3E%3Ccircle cx='39' cy='91' r='8'/%3E%3Cpath d='M34 91h10M39 86v10'/%3E%3Cpath d='M121 164l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z'/%3E%3C/g%3E%3Cg stroke='%2351DFF7'%3E%3Cpath d='M86 105c0-6 5-10 11-10s11 4 11 10-5 10-11 10-11-4-11-10z'/%3E%3Cpath d='M91 105h12M97 99v12'/%3E%3Cpath d='M31 157c5-6 12-6 17 0l-4 5-4-2-4 4-4-4-4 2z'/%3E%3C/g%3E%3Cg stroke='%23F3B562'%3E%3Cpath d='M175 48c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z'/%3E%3Cpath d='M180 48h8M184 44v8'/%3E%3Cpath d='M52 190l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1z'/%3E%3C/g%3E%3Cg stroke='%2374C69D'%3E%3Cpath d='M132 78c8-8 18-5 20 2-8 3-14 7-20 2z'/%3E%3Cpath d='M133 82c5 3 9 7 10 13'/%3E%3Cpath d='M15 126c7-7 15-5 17 2-7 2-12 6-17 1z'/%3E%3Cpath d='M16 130c4 2 7 6 8 10'/%3E%3C/g%3E%3Cg stroke='%23FF7CC4'%3E%3Ccircle cx='211' cy='143' r='3'/%3E%3Ccircle cx='66' cy='132' r='2.5'/%3E%3Cpath d='M109 30l1 3 3 1-3 1-1 3-1-3-3-1 3-1z'/%3E%3C/g%3E%3Cg stroke='%237FA9FF'%3E%3Cpath d='M145 119l14-7-5 12-9 2z'/%3E%3Cpath d='M197 183l1 4 4 1-4 1-1 4-1-4-4-1 4-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

const css = `
:root[data-hermes-theme="hermes-telegram-neon-flow"] {
  --glass-blur: 30px; --glass-sat: 1.28; --cyan:#51DFF7; --violet:#918BFF; --pink:#FF7CC4; --telegram-blue:#4EA4F5;
  --night-shadow:0 24px 80px color-mix(in srgb,#000 34%,transparent);
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root { position:relative; min-height:100%; overflow:hidden; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before {
  content:""; position:fixed; inset:-30%; z-index:0; pointer-events:none;
  background:radial-gradient(30rem 22rem at 18% 30%,color-mix(in srgb,var(--cyan) 20%,transparent),transparent 72%),radial-gradient(30rem 28rem at 72% 18%,color-mix(in srgb,var(--violet) 22%,transparent),transparent 74%),radial-gradient(34rem 26rem at 72% 78%,color-mix(in srgb,var(--pink) 16%,transparent),transparent 75%);
  filter:blur(38px) saturate(1.22); opacity:.56; animation:telegram-night-flow 24s ease-in-out infinite alternate;
}
:root[data-hermes-theme="hermes-telegram-neon-flow"] #root > * { position:relative; z-index:1; }
@keyframes telegram-night-flow { 0%{transform:translate3d(-3%,-2%,0) scale(1)} 50%{transform:translate3d(2%,2%,0) scale(1.045)} 100%{transform:translate3d(4%,-1%,0) scale(1.08)} }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] #root { background:radial-gradient(60rem 42rem at 12% 0%,rgba(85,200,232,.12),transparent 70%),radial-gradient(54rem 42rem at 90% 18%,rgba(139,130,255,.10),transparent 72%),linear-gradient(180deg,#F8FBFF,#EEF4FA); }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] #root { background:radial-gradient(58rem 42rem at 8% 4%,rgba(81,223,247,.18),transparent 70%),radial-gradient(52rem 46rem at 94% 10%,rgba(145,139,255,.21),transparent 69%),radial-gradient(52rem 42rem at 78% 98%,rgba(255,124,196,.16),transparent 70%),var(--dt-background); background-attachment:fixed; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"] { position:relative; isolation:isolate; overflow:auto; background-color:var(--dt-background)!important; background-image:radial-gradient(48rem 30rem at 50% 22%,color-mix(in srgb,var(--telegram-blue) 8%,transparent),transparent 72%),radial-gradient(36rem 30rem at 82% 82%,color-mix(in srgb,var(--pink) 5%,transparent),transparent 74%); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::before { display:none; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"] > * { position:relative; z-index:1; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="aui_thread-viewport"] { background-color:#EEF4FA!important; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] [data-slot="aui_thread-viewport"] { background-color:#050811!important; }
@keyframes telegram-doodle-field { 0%{background-position:0 0;transform:rotate(0deg) scale(1.008);opacity:.13} 50%{background-position:12px -9px;transform:rotate(.18deg) scale(1.012);opacity:.17} 100%{background-position:-8px 11px;transform:rotate(-.16deg) scale(1.009);opacity:.14} }
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"],:root[data-hermes-theme="hermes-telegram-neon-flow"] header,:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="header"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="toolbar"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper]>* { backdrop-filter:blur(var(--glass-blur)) saturate(var(--glass-sat)); -webkit-backdrop-filter:blur(var(--glass-blur)) saturate(var(--glass-sat)); }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] aside,:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="sidebar"] { background:linear-gradient(180deg,rgba(255,255,255,.88),rgba(246,250,254,.72))!important; border-right:1px solid rgba(120,155,185,.22)!important; box-shadow:inset -1px 0 rgba(255,255,255,.95),12px 0 42px rgba(66,98,130,.08); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside,:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] { box-shadow:inset -1px 0 rgba(255,255,255,.16),inset 0 1px rgba(255,255,255,.12),16px 0 55px rgba(0,0,0,.13); }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] header,:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="header"],:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="toolbar"] { background:rgba(248,252,255,.72)!important; border-bottom:1px solid rgba(120,155,185,.18)!important; box-shadow:0 10px 30px rgba(57,92,122,.06),inset 0 1px #fff; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] [data-slot="composer-root"] { background:rgba(255,255,255,.78)!important; border:1px solid rgba(90,140,180,.24); box-shadow:0 -18px 45px rgba(48,85,118,.08),0 8px 30px rgba(48,85,118,.08),inset 0 1px #fff; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="composer-root"] { border:1px solid color-mix(in srgb,var(--cyan) 20%,var(--dt-border)); box-shadow:0 -22px 60px rgba(0,0,0,.13),inset 0 1px rgba(255,255,255,.18); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [aria-current="page"],:root[data-hermes-theme="hermes-telegram-neon-flow"] aside [data-state="active"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [aria-current="page"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="sidebar"] [data-state="active"] { background:linear-gradient(100deg,color-mix(in srgb,var(--telegram-blue) 18%,transparent),color-mix(in srgb,var(--violet) 11%,transparent))!important; box-shadow:inset 2px 0 var(--telegram-blue),inset 0 1px rgba(255,255,255,.18),0 5px 22px color-mix(in srgb,var(--telegram-blue) 10%,transparent); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] input,:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea,:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"] { background:color-mix(in srgb,var(--dt-input) 66%,transparent)!important; border-color:color-mix(in srgb,#fff 10%,var(--dt-border)); box-shadow:inset 0 1px rgba(255,255,255,.12); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] input:focus,:root[data-hermes-theme="hermes-telegram-neon-flow"] textarea:focus,:root[data-hermes-theme="hermes-telegram-neon-flow"] [contenteditable="true"]:focus { border-color:color-mix(in srgb,var(--cyan) 52%,var(--dt-border)); box-shadow:0 0 0 1px color-mix(in srgb,var(--cyan) 28%,transparent),0 0 24px color-mix(in srgb,var(--cyan) 10%,transparent),inset 0 1px rgba(255,255,255,.14); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="dialog"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="menu"],:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-radix-popper-content-wrapper]>* { background:color-mix(in srgb,var(--dt-popover) 72%,transparent)!important; border:1px solid color-mix(in srgb,#fff 15%,var(--dt-border))!important; box-shadow:var(--night-shadow),inset 0 1px rgba(255,255,255,.16); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] button,:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] { transition:background-color 160ms ease,border-color 160ms ease,box-shadow 200ms ease,transform 120ms ease,filter 180ms ease; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:hover,:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:hover { filter:saturate(1.08) brightness(1.025); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] button:active,:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"]:active { transform:scale(.985); }
:root[data-hermes-theme="hermes-telegram-neon-flow"] * { scrollbar-width:thin; scrollbar-color:color-mix(in srgb,var(--telegram-blue) 34%,transparent) transparent; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar { width:8px;height:8px; }
:root[data-hermes-theme="hermes-telegram-neon-flow"] *::-webkit-scrollbar-thumb { background:color-mix(in srgb,var(--telegram-blue) 28%,transparent); border:2px solid transparent; background-clip:padding-box; border-radius:999px; }
.telegram-doodle-motion-layer { position:absolute!important; top:0!important; left:0!important; width:100%!important; height:var(--doodle-height,100%)!important; min-height:100%!important; z-index:0!important; pointer-events:none!important; overflow:hidden!important; }
.telegram-doodle-background-layer { position:absolute!important; inset:0!important; z-index:0!important; pointer-events:none!important; background-image:url("${doodleSvg}"); background-repeat:repeat; background-size:168px 168px; opacity:.15; animation:telegram-doodle-field 18s ease-in-out infinite alternate; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="light"] .telegram-doodle-background-layer { opacity:.17; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] .telegram-doodle-background-layer { opacity:.12; filter:brightness(1.08) saturate(1.12); }
.telegram-doodle-motion-layer .telegram-doodle-particle { position:absolute; left:var(--left); top:var(--top); width:var(--size); height:var(--size); transform:translate3d(var(--tx,0px),var(--ty,0px),0) rotate(var(--rot,0deg)); transition:transform var(--duration,7000ms) cubic-bezier(.22,.61,.36,1); will-change:transform; }
.telegram-doodle-motion-layer .telegram-doodle-glyph { display:block; width:100%; height:100%; background-image:var(--image); background-repeat:no-repeat; background-position:center; background-size:contain; opacity:var(--opacity,.34); transform:scale(var(--breath,1)); transition:transform var(--breath-duration,4200ms) ease-in-out,opacity var(--breath-duration,4200ms) ease-in-out,filter 700ms ease; will-change:transform,opacity; }
.telegram-doodle-motion-layer .telegram-doodle-glyph.is-sparkling { filter:brightness(1.24) saturate(1.12); transform:scale(1.08); opacity:.68; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] .telegram-doodle-glyph { filter:saturate(1.06) brightness(1.03); }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] .telegram-doodle-glyph.is-sparkling { filter:saturate(1.16) brightness(1.22); }
@media (prefers-reduced-motion:reduce) { .telegram-doodle-motion-layer .telegram-doodle-particle,.telegram-doodle-motion-layer .telegram-doodle-glyph { transition:none!important; } .telegram-doodle-background-layer { animation:none!important; } :root[data-hermes-theme="hermes-telegram-neon-flow"] #root::before,:root[data-hermes-theme="hermes-telegram-neon-flow"] [data-slot="aui_thread-viewport"]::before { animation:none; } :root[data-hermes-theme="hermes-telegram-neon-flow"] button,:root[data-hermes-theme="hermes-telegram-neon-flow"] [role="button"] { transition:none; } }
`

function svgFor(type, color) {
  const stroke = encodeURIComponent(color)
  const paths = {
    flower:'<circle cx="12" cy="8" r="3"/><circle cx="18" cy="8" r="3"/><circle cx="15" cy="13" r="3"/><circle cx="15" cy="3" r="3"/><circle cx="15" cy="8" r="2"/>',
    leaf:'<path d="M4 15c5-10 12-12 17-10-2 8-8 13-17 10z"/><path d="M5 14 19 6"/>',
    heart:'<path d="M12 21S3 15 3 9c0-4 5-6 8-2 3-4 8-2 8 2 0 6-7 12-7 12z"/>',
    star:'<path d="m12 2 2.2 6.3L21 10l-5.1 3.8L17.5 20 12 16.5 6.5 20l1.6-6.2L3 10l6.8-1.7z"/>',
    dot:'<circle cx="12" cy="12" r="2"/><circle cx="18" cy="6" r="1"/><circle cx="6" cy="18" r="1"/>',
    sparkle:'<path d="m12 2 2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/>'
  }
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.35' stroke-linecap='round' stroke-linejoin='round'%3E${paths[type]}%3C/g%3E%3C/svg%3E")`
}

function installDoodleMotion(viewport) {
  if (typeof window === 'undefined' || !viewport || window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return () => {}
  viewport.querySelector(':scope > .telegram-doodle-motion-layer')?.remove()
  const layer = document.createElement('div'); layer.className = 'telegram-doodle-motion-layer'
  const background = document.createElement('div'); background.className = 'telegram-doodle-background-layer'; layer.appendChild(background)
  const timers = new Set(); const later = (fn, ms) => { const id = window.setTimeout(() => { timers.delete(id); fn() }, ms); timers.add(id); return id }
  const particles = []
  for (let i=0;i<30;i++) {
    const particle=document.createElement('span'); particle.className='telegram-doodle-particle'
    const glyph=document.createElement('span'); glyph.className='telegram-doodle-glyph'
    const type=TYPES[Math.floor(Math.random()*TYPES.length)], color=COLORS[Math.floor(Math.random()*COLORS.length)]
    particle.style.setProperty('--left',`${(Math.random()*96+2).toFixed(2)}%`); particle.style.setProperty('--top',`${(Math.random()*94+3).toFixed(2)}%`); particle.style.setProperty('--size',`${(6+Math.random()*7).toFixed(1)}px`)
    glyph.style.setProperty('--image',svgFor(type,color)); glyph.style.setProperty('--opacity',(0.24+Math.random()*0.28).toFixed(2)); particle.appendChild(glyph); layer.appendChild(particle); particles.push({particle,glyph})
  }
  viewport.prepend(layer)
  const syncHeight = () => { if (!layer.isConnected) return; layer.style.setProperty('--doodle-height',`${Math.max(viewport.scrollHeight,viewport.clientHeight)}px`) }
  syncHeight()
  const sizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncHeight) : null
  sizeObserver?.observe(viewport)
  const contentObserver = new MutationObserver(syncHeight); contentObserver.observe(viewport,{childList:true,subtree:true,characterData:true})
  const move = particle => { if(!particle.isConnected)return; const duration=5200+Math.round(Math.random()*6200); particle.style.setProperty('--duration',`${duration}ms`); particle.style.setProperty('--tx',`${Math.round((Math.random()*2-1)*(18+Math.random()*42))}px`); particle.style.setProperty('--ty',`${Math.round((Math.random()*2-1)*(14+Math.random()*34))}px`); particle.style.setProperty('--rot',`${((Math.random()*2-1)*(1.1+Math.random()*3)).toFixed(2)}deg`); later(()=>move(particle),duration+500+Math.random()*1200) }
  const breathe = glyph => { if(!glyph.isConnected)return; const duration=2800+Math.round(Math.random()*3000); glyph.style.setProperty('--breath-duration',`${duration}ms`); glyph.style.setProperty('--breath',(0.965+Math.random()*0.075).toFixed(3)); glyph.style.opacity=(0.20+Math.random()*0.40).toFixed(2); later(()=>breathe(glyph),duration+400+Math.random()*1200) }
  const sparkle = glyph => { if(!glyph.isConnected)return; later(()=>{ if(Math.random()<.28){ glyph.classList.add('is-sparkling'); later(()=>glyph.classList.remove('is-sparkling'),520+Math.random()*360) } sparkle(glyph) },9000+Math.random()*19000) }
  particles.forEach(({particle,glyph},i)=>{ later(()=>{window.requestAnimationFrame(()=>move(particle))},400+Math.random()*3000+i*35); later(()=>breathe(glyph),700+Math.random()*2600); if(i%4===0) later(()=>sparkle(glyph),5000+Math.random()*9000) })
  return () => { for(const id of timers)window.clearTimeout(id); timers.clear(); sizeObserver?.disconnect(); contentObserver.disconnect(); layer.remove() }
}

function installEffects(ctx) {
  if(typeof document==='undefined')return
  document.getElementById(STYLE_ID)?.remove()
  const style=document.createElement('style'); style.id=STYLE_ID; style.textContent=css; document.head.appendChild(style)
  let stopMotion=()=>{}; let currentViewport=null
  const attach=()=>{
    const viewport=document.querySelector('[data-slot="aui_thread-viewport"]')
    if(!viewport){ if(currentViewport){stopMotion();stopMotion=()=>{};currentViewport=null} return }
    if(viewport===currentViewport)return
    stopMotion(); currentViewport=viewport; stopMotion=installDoodleMotion(viewport)
  }
  attach()
  const observer=new MutationObserver(attach); observer.observe(document.body,{childList:true,subtree:true})
  ctx.onDispose(()=>{stopMotion();observer.disconnect();style.remove()})
}

export default {
  id:'hermes-telegram-neon-flow',
  name:'Telegram Neon Flow',
  register(ctx){ ctx.register({id:'theme',area:THEMES_AREA,data:theme}); installEffects(ctx) }
}
