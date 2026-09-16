import basePlugin from './plugin.js'

const MOTION_STYLE_ID = 'hermes-telegram-doodle-motion-v3'
const COLORS = ['#4EA4F5', '#E96AB2', '#918BFF', '#51DFF7', '#F3B562', '#74C69D', '#FF7CC4', '#7FA9FF']
const TYPES = ['flower', 'leaf', 'heart', 'star', 'dot', 'sparkle']

const css = `
.telegram-doodle-motion-layer { position:absolute!important; inset:0!important; z-index:0!important; pointer-events:none!important; overflow:hidden!important; }
.telegram-doodle-motion-layer .telegram-doodle-particle { position:absolute; left:var(--left); top:var(--top); width:var(--size); height:var(--size); opacity:1; transform:translate3d(var(--tx,0px),var(--ty,0px),0) rotate(var(--rot,0deg)); transition:transform var(--duration,7000ms) cubic-bezier(.22,.61,.36,1); will-change:transform; }
.telegram-doodle-motion-layer .telegram-doodle-glyph { display:block; width:100%; height:100%; background-image:var(--image); background-repeat:no-repeat; background-position:center; background-size:contain; opacity:var(--opacity,.34); transform:scale(var(--breath,1)); transition:transform var(--breath-duration,4200ms) ease-in-out,opacity var(--breath-duration,4200ms) ease-in-out,filter 700ms ease; will-change:transform,opacity; }
.telegram-doodle-motion-layer .telegram-doodle-glyph.is-sparkling { filter:brightness(1.24) saturate(1.12); transform:scale(1.08); opacity:.68; }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] .telegram-doodle-motion-layer .telegram-doodle-glyph { filter:saturate(1.06) brightness(1.03); }
:root[data-hermes-theme="hermes-telegram-neon-flow"][data-hermes-mode="dark"] .telegram-doodle-motion-layer .telegram-doodle-glyph.is-sparkling { filter:saturate(1.16) brightness(1.22); }
@media (prefers-reduced-motion:reduce) {
  .telegram-doodle-motion-layer .telegram-doodle-particle,
  .telegram-doodle-motion-layer .telegram-doodle-glyph { transition:none!important; }
}
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
  const reducedQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
  if (reducedQuery?.matches) return

  const oldStyle = document.getElementById(MOTION_STYLE_ID)
  oldStyle?.remove()
  const style = document.createElement('style')
  style.id = MOTION_STYLE_ID
  style.textContent = css
  document.head.appendChild(style)

  let layer = null
  let observer = null
  const timers = new Set()
  const current = () => document.querySelector('[data-slot="aui_thread-viewport"]')

  const later = (fn, delay) => {
    const id = window.setTimeout(() => { timers.delete(id); fn() }, delay)
    timers.add(id)
    return id
  }

  const clear = () => {
    for (const id of timers) window.clearTimeout(id)
    timers.clear()
    layer?.remove()
    layer = null
  }

  const breathe = (glyph) => {
    if (!glyph.isConnected) return
    const duration = 2800 + Math.round(Math.random() * 3000)
    const scale = (0.965 + Math.random() * 0.075).toFixed(3)
    const opacity = (0.20 + Math.random() * 0.40).toFixed(2)
    glyph.style.setProperty('--breath-duration', `${duration}ms`)
    glyph.style.setProperty('--breath', scale)
    glyph.style.opacity = opacity
    later(() => breathe(glyph), duration + 300 + Math.round(Math.random() * 1600))
  }

  const sparkle = (glyph, chance = .22) => {
    if (!glyph.isConnected) return
    const delay = 9000 + Math.round(Math.random() * 19000)
    later(() => {
      if (Math.random() < chance) {
        glyph.classList.add('is-sparkling')
        later(() => glyph.classList.remove('is-sparkling'), 520 + Math.round(Math.random() * 360))
      }
      sparkle(glyph, chance)
    }, delay)
  }

  const move = (particle, first = false) => {
    if (!particle.isConnected) return
    const duration = 5200 + Math.round(Math.random() * 6200)
    const x = Math.round((Math.random() * 2 - 1) * (18 + Math.random() * 42))
    const y = Math.round((Math.random() * 2 - 1) * (14 + Math.random() * 34))
    const rot = (Math.random() * 2 - 1) * (1.1 + Math.random() * 3.0)
    particle.style.setProperty('--duration', `${duration}ms`)
    const apply = () => {
      particle.style.setProperty('--tx', `${x}px`)
      particle.style.setProperty('--ty', `${y}px`)
      particle.style.setProperty('--rot', `${rot.toFixed(2)}deg`)
    }
    if (first) window.requestAnimationFrame(apply)
    else apply()
    later(() => move(particle), 260 + duration + Math.round(Math.random() * 1300))
  }

  const attach = () => {
    clear()
    const viewport = current()
    if (!viewport || reducedQuery?.matches) return

    layer = document.createElement('div')
    layer.className = 'telegram-doodle-motion-layer'
    const particles = []

    for (let i = 0; i < 30; i += 1) {
      const particle = document.createElement('span')
      particle.className = 'telegram-doodle-particle'
      const glyph = document.createElement('span')
      glyph.className = 'telegram-doodle-glyph'
      const type = TYPES[Math.floor(Math.random() * TYPES.length)]
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]

      particle.style.setProperty('--left', `${(Math.random() * 96 + 2).toFixed(2)}%`)
      particle.style.setProperty('--top', `${(Math.random() * 94 + 3).toFixed(2)}%`)
      particle.style.setProperty('--size', `${(6 + Math.random() * 7).toFixed(1)}px`)
      glyph.style.setProperty('--image', svgFor(type, color))
      glyph.style.setProperty('--opacity', (0.24 + Math.random() * 0.28).toFixed(2))
      particle.appendChild(glyph)
      layer.appendChild(particle)
      particles.push({ particle, glyph })
    }

    viewport.prepend(layer)
    for (const { particle, glyph } of particles) {
      later(() => move(particle, true), 500 + Math.random() * 3000)
      later(() => breathe(glyph), 700 + Math.random() * 2200)
      if (Math.random() < .25) later(() => sparkle(glyph), 3000 + Math.random() * 8000)
    }
  }

  attach()
  observer = new MutationObserver(() => {
    const viewport = current()
    if (viewport && (!layer || !viewport.contains(layer))) attach()
  })
  observer.observe(document.body, { childList: true, subtree: true })

  ctx.onDispose(() => {
    clear()
    observer?.disconnect()
    style.remove()
  })
}

export default {
  ...basePlugin,
  register(ctx) {
    basePlugin.register(ctx)
    installMotion(ctx)
  }
}
