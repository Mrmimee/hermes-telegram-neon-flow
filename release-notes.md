# Hermes Telegram Neon Flow v2.3.0

Telegram-inspired Liquid Glass theme plugin for Hermes Desktop.

## Highlights

- Native, plugin-only integration; does not patch Hermes Desktop source code.
- Independent Light and Dark palettes, with appearance mode controlled by Hermes Desktop.
- Frosted-glass surfaces, translucent borders, layered shadows, and cyan / violet / pink accents.
- Aurora ambient lighting and subtle animated doodles.
- Reduced-motion support and scoped visual effects.
- Matching terminal palettes.
- Runtime cleanup on plugin disposal to prevent stale styles and animated overlays after reload.

## Installation

The supported installation entry point is `plugin.js`. Copy it to:

```text
$HERMES_HOME/desktop-plugins/hermes-telegram-neon-flow/plugin.js
```

Then select **Telegram Neon Flow** from the Hermes Desktop theme picker. If it does not appear, reload desktop plugins from the command palette.

## Architecture

This project is a native desktop theme plugin. It registers through the public Desktop Plugin SDK theme contribution, scopes visual effects to the theme, and does not patch or fork the Hermes Desktop source tree.

## Versioning

The package metadata currently declares version **2.3.0**. Update this document alongside future releases so the release notes remain aligned with `package.json`.
