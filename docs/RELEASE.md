# Release Guide

## Telegram Neon Flow 2.4.0

Telegram Neon Flow 2.4.0 packages one visual design language for Hermes Desktop, OpenCode Desktop, and OpenCode TUI.

### Hermes Desktop

Install `plugin.js` under `$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js`, then select **Telegram Neon Flow** in the Hermes theme picker.

The Hermes edition provides Liquid Glass surfaces, aurora lighting, and independently animated floral doodles.

### OpenCode Desktop

The Desktop implementation is stored at:

```text
opencode-desktop/telegram-neon-flow.json
```

OpenCode's current Desktop source resolves its built-in themes through bundled `packages/ui/src/theme/themes/*.json` files. The Desktop theme context uses `import.meta.glob("./themes/*.json")`, so placing this JSON in `.opencode/themes/` does not make an installed Desktop binary discover it automatically. urlOpenCode Desktop theme loader sourcehttps://github.com/anomalyco/opencode/blob/dev/packages/ui/src/theme/context.tsx

For an end-user Desktop installation, the practical route is a Desktop theme loader/injector that loads this JSON into the running Electron UI. A community tool already documents a `--theme <file>` flow for OpenCode Desktop and uses CDP to inject the theme without modifying the OpenCode installation directory. urlCommunity OpenCode Desktop theme loaderhttps://github.com/mike652638/opencode-zh-desktop/blob/main/README.md

The repository intentionally keeps the theme JSON independent of that external loader so the visual definition remains portable.

### OpenCode TUI

Keep `.opencode/themes/telegram-neon-flow.json` in a project, or copy it to `~/.config/opencode/themes/telegram-neon-flow.json` for a user-wide theme.

Select it with `/theme`, or configure `tui.json` with:

```json
{
  "theme": "telegram-neon-flow"
}
```

### Compatibility

The three editions share the palette and visual language, but the implementation layers differ. Hermes supports browser effects such as `backdrop-filter`, CSS animation and SVG backgrounds. OpenCode Desktop's native schema currently expresses theme tokens; a runtime injector is required for additional glass/atmosphere effects. OpenCode TUI uses terminal-safe native theme tokens.

### Release checklist

- [x] Hermes theme plugin included
- [x] OpenCode TUI native JSON theme included
- [x] OpenCode Desktop native JSON theme definition included
- [x] Light and Dark palettes aligned
- [x] Desktop semantic, sidebar, input, ring and syntax overrides defined
- [x] README installation architecture documented
- [x] CHANGELOG updated for 2.4.0
- [x] Package version set to 2.4.0
- [ ] Desktop runtime injector packaged for each target OS
