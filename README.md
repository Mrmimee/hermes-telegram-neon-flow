# Hermes Telegram Neon Flow

Telegram-inspired Liquid Glass visual theme for Hermes Desktop.

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

## Theme architecture

```text
Telegram Neon Flow
└── Hermes Desktop
    └── plugin.js
        ├── Liquid Glass
        ├── animated aurora
        ├── SVG doodle field
        └── browser interaction effects
```

This project is dedicated to Hermes Desktop. It uses Hermes's native desktop plugin system rather than modifying or forking the Hermes Desktop source code.

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

Hermes Desktop's plugin SDK supports themes through `THEMES_AREA`; disk plugins are loaded from `$HERMES_HOME/desktop-plugins/<id>/plugin.js`. urlHermes Desktop Plugin SDKhttps://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/desktop-plugin-sdk.md
