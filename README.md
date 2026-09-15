# Hermes Telegram Neon Flow

Telegram-inspired neon glass theme for Hermes Desktop.

## What is included

- Native Hermes Desktop theme plugin (`plugin.js`)
- Correct `THEMES_AREA` registration
- Independent Light and Dark palettes via `colors` / `darkColors`
- OLED-style dark background
- Cyan → purple → pink accent palette
- Telegram-inspired glass/chat surfaces
- Matching terminal palettes

## Install

Hermes Desktop plugins are single ESM files. Copy `plugin.js` into:

```text
$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js
```

Then open Hermes Desktop. The plugin should hot-load within a few seconds. If it does not appear, use **⌘K → Reload desktop plugins**.

After loading, select **Telegram Neon Flow** from the desktop theme picker. Light/Dark/System mode is controlled by Hermes Desktop's normal appearance setting.

The native desktop plugin system is separate from the Hermes web dashboard theme system.
