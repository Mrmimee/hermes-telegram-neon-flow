import basePlugin from './plugin.js'

const MOTION_STYLE_ID = 'hermes-telegram-doodle-motion-v2'
const COLORS = ['#4EA4F5', '#E96AB2', '#918BFF', '#51DFF7', '#F3B562', '#74C69D', '#FF7CC4', '#7FA9FF']
const TYPES = ['flower', 'leaf', 'heart', 'star', 'dot', 'sparkle']

const css = `
.telegram-doodle-motion-layer { position:absolute!important; inset:0!important; z-index:0!important; pointer-events:none!important; overflow:hidden!important; }
.telegram-doodle-motion-layer .telegram-doodle-particle { position:absolute; left:var(--left); top:var(--top); width:var(--size); height:var(--size); opacity:var(--opacity); background-image:var(--image); background-repeat:no-repeat; background-position:center; background-size:contain; transform:translate3d(var(--tx,0px),var(--ty,0px),0) rotate(var(--rot,0deg)) scale(var(--scale,1)); transition:transform var(--duration) cubic-bezier(.22,.61,.36,1),opacity var(--duration) ease; will-change:transform,opacity; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] .telegram-doodle-motion-layer .telegram-doodle-particle { filter:saturate(1.08) brightness(1.05); }
@media (prefers-reduced-motion:reduce) { .telegram-doodle-motion-layer .telegram-doodle-particle { transition:none!important; } }
`

function svgFor(type, color) {
  const stroke = encodeURIComponent(color)
  const paths = {
    flower: '<circle cx="12" cy="8" r="3"/><circle cx="18" cy="8" r="3"/><circle cx="15" cy="13" r="3"/><circle cx="15" cy="3" r="3"/><circle cx="15" cy="8" r="2"/>',
    leaf: '<path d="M4 15c5-10 12-12 17-10-2 8-8 13-17 10z"/><path d="M5 14 19 6"/>',
    heart: '<path d="M12 21S3 15 3 9c0-4 5-6 8-2 3-4 8-2 8 2 0 6-7 12-7 12z"/>',
    star: '<path d="m12 2 2.2 6.3L21 10l-5.1 3.8L17.5 20 12 16.5 6.5 20l1.6-6.2L3 10l6.8-1.7z"/>',
    dot: '<circle cx="12" cy="12" r="2"/><circle cx="18" cy="6" r="1"/><circle cx="6" cy="18" r="1"/>',
    sparkle: '<path d="m12 2 2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/>'
  }
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.35' stroke-linecap='round' stroke-linejoin='round'%3E${paths[type]}%3C/g%3E%3C/svg%3E")`
}

function installMotion(ctx) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return
  const style = document.createElement('style')
  style.id = MOTION_STYLE_ID
  style.textContent = css
  document.head.appendChild(style)
  let layer = null
  const timers = []
  const current = () => document.querySelector('[data-slot="aui_thread-viewport"]')

  const clear = () => {
    while (timers.length) window.clearTimeout(timers.pop())
    layer?.remove()
    layer = null
  }

  const move = (el, first = false) => {
    const duration = 4800 + Math.round(Math.random() * 6900)
    const x = Math.round((Math.random() * 2 - 1) * (18 + Math.random() * 42))
    const y = Math.round((Math.random() * 2 - 1) * (14 + Math.random() * 34))
    const rot = (Math.random() * 2 - 1) * (1.2 + Math.random() * 3.2)
    const scale = 0.97 + Math.random() * 0.06
    const opacity = 0.2 + Math.random() * 0.42
    el.style.setProperty('--duration', `${duration}ms`)
    const apply = () => {
      el.style.setProperty('--tx', `${x}px`)
      el.style.setProperty('--ty', `${y}px`)
      el.style.setProperty('--rot', `${rot.toFixed(2)}deg`)
      el.style.setProperty('--scale', scale.toFixed(3))
      el.style.setProperty('--opacity', opacity.toFixed(2))
    }
    if (first) window.requestAnimationFrame(apply)
    else apply()
    timers.push(window.setTimeout(() => move(el), duration + 300 + Math.round(Math.random() * 1500)))
  }

  const attach = () => {
    clear()
    const viewport = current()
    if (!viewport || window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return
    layer = document.createElement('div')
    layer.className = 'telegram-doodle-motion-layer'
    for (let i = 0; i < 32; i += 1) {
      const el = document.createElement('span')
      el.className = 'telegram-doodle-particle'
      const type = TYPES[Math.floor(Math.random() * TYPES.length)]
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      el.style.setProperty('--left', `${(Math.random() * 96 + 2).toFixed(2)}%`)
      el.style.setProperty('--top', `${(Math.random() * 94 + 3).toFixed(2)}%`)
      el.style.setProperty('--size', `${(6 + Math.random() * 8).toFixed(1)}px`)
      el.style.setProperty('--image', svgFor(type, color))
      el.style.setProperty('--opacity', (0.26 + Math.random() * 0.32).toFixed(2))
      layer.appendChild(el)
      timers.push(window.setTimeout(() => move(el, true), Math.random() * 3200 + i * 45))
    }
    viewport.prepend(layer)
  }

  attach()
  const observer = new MutationObserver(() => {
    const viewport = current()
    if (viewport && (!layer || !viewport.contains(layer))) attach()
  })
  observer.observe(document.body, { childList: true, subtree: true })
  ctx.onDispose(() => { clear(); observer.disconnect(); style.remove() })
}

export default {
  ...basePlugin,
  register(ctx) {
    basePlugin.register(ctx)
    installMotion(ctx)
  }
}
