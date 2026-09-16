# Hermes Telegram Neon Flow

Telegram-inspired visual theme for Hermes Desktop, implemented entirely as a native desktop theme plugin. It does **not** modify Hermes Desktop source code.

## What is included

- Native Hermes Desktop theme plugin (`plugin.js`)
- Correct `THEMES_AREA` registration
- Independent Light and Dark palettes via `colors` / `darkColors`
- Telegram-style frosted glass surfaces
- Backdrop blur + saturation on sidebars, composer and elevated overlays
- Aurora ambient light field with slow motion
- Cyan / violet / pink accent glow
- Soft focus halos for composer and text fields
- Subtle hover / press response and primary-action glow
- Fine glass highlights, translucent borders and layered shadows
- Reduced-motion support
- Matching terminal palettes

## Important architecture

This project is intentionally **plugin-only**. It does not patch, fork, or modify the Hermes Desktop source tree. The visual effect layer is injected by the plugin at runtime and is scoped to this theme's `data-hermes-theme` attribute.

Hermes Desktop's current plugin SDK supports themes through `THEMES_AREA`; disk plugins are single ESM files loaded from `$HERMES_HOME/desktop-plugins/<id>/plugin.js`. urlHermes Desktop Plugin SDKhttps://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/desktop-plugin-sdk.md

## Install

Copy `plugin.js` into:

```text
$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js
```

Then open Hermes Desktop. The plugin should hot-load within a few seconds. If it does not appear, use **⌘K → Reload desktop plugins**.

After loading, select **Telegram Neon Flow** from the desktop theme picker. Light/Dark/System mode remains controlled by Hermes Desktop's normal appearance setting.

## Design direction

The visual target is Telegram-inspired rather than a literal Telegram clone:

- frosted/translucent chrome
- soft cyan/violet/pink ambient lighting
- restrained glow rather than neon-heavy borders
- layered shadows and one-pixel highlights
- animated aurora background that stays behind the UI
- interaction feedback that remains lightweight

The plugin only uses the public desktop plugin surface and browser-rendered styling. It does not import Hermes internals or alter `apps/desktop` source files.
