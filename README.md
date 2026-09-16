# Hermes Telegram Neon Flow

Telegram-inspired Liquid Glass visual theme for Hermes Desktop, implemented entirely as a native desktop theme plugin. It does **not** modify Hermes Desktop source code.

## Install — single file

The repository now has **one install entry only**:

```text
plugin.js
```

Copy that file to:

```text
$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js
```

The directory should contain exactly:

```text
hermes-telegram-neon-flow/
└── plugin.js
```

Then open Hermes Desktop. The plugin should hot-load within a few seconds. If it does not appear, use **⌘K → Reload desktop plugins**.

After loading, select **Telegram Neon Flow** from the desktop theme picker. Light/Dark/System mode remains controlled by Hermes Desktop's normal appearance setting.

## What is included

- Native Hermes Desktop theme plugin (`plugin.js`)
- Correct `THEMES_AREA` registration
- Independent Light and Dark palettes via `colors` / `darkColors`
- Telegram-style frosted glass surfaces
- Backdrop blur + saturation on sidebars, composer and elevated overlays
- Aurora ambient light field with slow motion
- Cyan / violet / pink accent lighting
- Fine glass highlights, translucent borders and layered shadows
- Subtle hover / press response
- Animated doodles with independent floating, breathing and occasional sparkle motion
- Reduced-motion support
- Matching terminal palettes

## Important architecture

This project is intentionally **plugin-only**. It does not patch, fork, or modify the Hermes Desktop source tree. The visual effect layer is injected by the plugin at runtime and is scoped to this theme's `data-hermes-theme` attribute.

Hermes Desktop's plugin SDK supports themes through `THEMES_AREA`; disk plugins are loaded from `$HERMES_HOME/desktop-plugins/<id>/plugin.js`. urlHermes Desktop Plugin SDKhttps://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/desktop-plugin-sdk.md

## Updating

Replace the existing `plugin.js` with the latest `plugin.js` from this branch, then use **⌘K → Reload desktop plugins**.

There is no second motion file, build step, patch script, or GitHub Actions step required for installation.

## Design direction

The visual target is Telegram-inspired rather than a literal Telegram clone:

- frosted/translucent chrome
- soft cyan/violet/pink ambient lighting
- restrained glow rather than neon-heavy borders
- layered shadows and one-pixel highlights
- animated aurora background behind the UI
- small independent doodle motion for depth
- lightweight interaction feedback

The plugin only uses the public desktop plugin surface and browser-rendered styling. It does not import Hermes internals or alter `apps/desktop` source files.
