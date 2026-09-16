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

## Install — OpenCode

OpenCode has native JSON themes, so the OpenCode edition does **not** require a plugin or CSS injection. urlOpenCode Themes documentationhttps://opencode.ai/docs/themes/

The packaged theme is:

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

OpenCode loads built-in, user, project and working-directory themes in a defined precedence order, allowing the same theme name to be overridden locally. urlOpenCode theme loading and configurationhttps://opencode.ai/docs/themes/

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
└── OpenCode
    └── .opencode/themes/telegram-neon-flow.json
        ├── Light / Dark
        ├── terminal palette
        ├── Markdown
        ├── syntax highlighting
        └── diff states
```

The two editions intentionally share the same visual language instead of forcing identical implementation details. Hermes can use browser effects such as blur and animation; OpenCode uses its native terminal-safe theme tokens.

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

## OpenCode features

- Native OpenCode `theme.json` schema
- Light and Dark variants
- Terminal-oriented contrast
- Markdown and syntax highlighting mapped to Neon Flow accents
- Added / removed / context / hunk diff states
- Selected, active, muted, warning, success, error and info states
- No plugin runtime required

## Architecture boundary

This project remains plugin-only on the Hermes side. It does not patch or fork Hermes Desktop source code. The OpenCode side is a native theme file and does not modify OpenCode source code.

Hermes Desktop's plugin SDK supports themes through `THEMES_AREA`; disk plugins are loaded from `$HERMES_HOME/desktop-plugins/<id>/plugin.js`. urlHermes Desktop Plugin SDKhttps://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/desktop-plugin-sdk.md
