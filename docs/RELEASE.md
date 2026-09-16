# Release Guide

## Telegram Neon Flow 2.3.0

Telegram Neon Flow 2.3.0 packages the same visual design language for Hermes Desktop and OpenCode.

### Hermes Desktop

Install `plugin.js` under `$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js`, then select **Telegram Neon Flow** in the Hermes theme picker.

The Hermes edition provides Liquid Glass surfaces, aurora lighting, and independently animated floral doodles.

### OpenCode

Keep `.opencode/themes/telegram-neon-flow.json` in a project, or copy it to `~/.config/opencode/themes/telegram-neon-flow.json` for a user-wide theme.

Select it with `/theme`, or configure `tui.json` with:

```json
{
  "theme": "telegram-neon-flow"
}
```

### Compatibility

The two editions share the palette and design language, but the OpenCode implementation uses native terminal theme tokens rather than attempting to reproduce browser-only effects such as `backdrop-filter`, CSS keyframes, and SVG background animation.

### Release checklist

- [x] Hermes theme plugin included
- [x] OpenCode native JSON theme included
- [x] Light and Dark palettes aligned
- [x] Markdown, syntax, diff, and status tokens defined
- [x] README installation instructions updated
- [x] CHANGELOG updated for 2.3.0
- [x] Package version set to 2.3.0
