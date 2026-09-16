# Hermes Telegram Neon Flow

Telegram-inspired Liquid Glass visual theme family for Hermes Desktop and OpenCode.

## Install — Hermes Desktop

The Hermes implementation is a single native theme plugin:

```text
plugin.js
```

Copy that file to:

```text
$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js
```

Then open Hermes Desktop and select **Telegram Neon Flow** from the theme picker. If needed, use **⌘K → Reload desktop plugins**.

## OpenCode Desktop

OpenCode Desktop has a native desktop theme schema separate from the terminal/TUI theme system. The packaged Desktop theme is:

```text
opencode-desktop/telegram-neon-flow.json
```

It uses OpenCode's official `desktop-theme.json` schema and provides Light/Dark palettes plus semantic, sidebar, input, ring, user-bubble, border and syntax overrides. The schema is part of the OpenCode Desktop UI theme system. urlOpenCode Desktop source and theme schemahttps://github.com/anomalyco/opencode/blob/dev/packages/ui/src/theme/desktop-theme.schema.json

Important: the current OpenCode Desktop source bundles its built-in themes from `packages/ui/src/theme/themes/*.json`; the normal `.opencode/themes/` custom-theme directory documented for OpenCode is the TUI theme mechanism. The packaged Desktop JSON therefore serves as the native Desktop theme definition, but it is **not automatically discovered by an installed OpenCode Desktop build just by placing it in `.opencode/themes/`**. urlOpenCode Desktop theme loaderhttps://github.com/anomalyco/opencode/blob/dev/packages/ui/src/theme/context.tsx

This project therefore keeps the Desktop theme definition separate from the TUI theme instead of claiming that the TUI installation path changes the Desktop GUI.

## Install — OpenCode TUI

OpenCode has native JSON themes. The packaged TUI theme is:

```text
.opencode/themes/telegram-neon-flow.json
```

For a project-local installation, keep the file at that path. For a user-wide installation, copy it to:

```text
~/.config/opencode/themes/telegram-neon-flow.json
```

Then run:

```text
/theme
```

and select **telegram-neon-flow**.

You can also configure it directly in `tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "telegram-neon-flow"
}
```

OpenCode loads built-in, user, project and working-directory themes in a defined precedence order. urlOpenCode theme loading and configurationhttps://opencode.ai/docs/themes/

## Theme family architecture

```text
Telegram Neon Flow
├── Hermes Desktop
│   └── plugin.js
│       ├── Liquid Glass
│       ├── animated aurora
│       ├── SVG doodle field
│       └── browser interaction effects
│
├── OpenCode Desktop
│   └── opencode-desktop/telegram-neon-flow.json
│       ├── Light / Dark
│       ├── semantic desktop palette
│       ├── sidebar / input / bubble tokens
│       └── syntax + interaction colors
│
└── OpenCode TUI
    └── .opencode/themes/telegram-neon-flow.json
        ├── Light / Dark
        ├── terminal palette
        ├── Markdown
        ├── syntax highlighting
        └── diff states
```

The three editions share the same visual language instead of forcing identical implementation details. Hermes can use browser effects such as blur and animation; OpenCode Desktop exposes native desktop color/token themes; OpenCode TUI uses terminal-safe native theme tokens.

## Shared design system

- Telegram Blue `#4EA4F5`
- Neon Cyan `#51DFF7`
- Violet `#918BFF`
- Pink `#FF7CC4`
- Green `#6FD3A7`
- Yellow `#E7C775`
- Frosted blue-gray surfaces
- Deep navy night mode
- Inter + JetBrains Mono visual direction

## Hermes Desktop features

- Native Hermes Desktop theme registration
- Independent Light and Dark palettes
- Telegram-style frosted glass surfaces
- Backdrop blur + saturation on sidebars, composer and elevated overlays
- Aurora ambient light field with slow motion
- Cyan / violet / pink accent lighting
- Fine glass highlights, translucent borders and layered shadows
- Hover / press response
- Animated doodles with independent floating, breathing and sparkle motion
- Reduced-motion support
- Matching terminal palettes

## OpenCode Desktop features

- Native `desktop-theme.json` schema
- Light and Dark variants
- Telegram Neon Flow semantic palette
- Sidebar, input, card, border, ring and user-bubble colors
- Syntax highlighting overrides
- Native token-based implementation without modifying OpenCode source

## OpenCode TUI features

- Native OpenCode `theme.json` schema
- Light and Dark variants
- Terminal-oriented contrast
- Markdown and syntax highlighting mapped to Neon Flow accents
- Added / removed / context / hunk diff states
- Selected, active, muted, warning, success, error and info states
- No plugin runtime required

## Architecture boundary

This project remains plugin-only on the Hermes side. It does not patch or fork Hermes Desktop source code. The OpenCode TUI side is a native theme file. The OpenCode Desktop side is a native Desktop theme definition, but the current installed Desktop build only bundles its built-in theme files and does not automatically import arbitrary JSON from `.opencode/themes/`. Browser-only effects such as `backdrop-filter`, animated aurora lighting and SVG doodle motion are therefore not represented by the native Desktop JSON alone.

Hermes Desktop's plugin SDK supports themes through `THEMES_AREA`; disk plugins are loaded from `$HERMES_HOME/desktop-plugins/<id>/plugin.js`. urlHermes Desktop Plugin SDKhttps://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/desktop-plugin-sdk.md
