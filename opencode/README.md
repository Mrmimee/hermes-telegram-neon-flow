# Telegram Neon Flow for OpenCode

A native OpenCode theme port of the Hermes Telegram Neon Flow visual system.

## What is included

- Telegram blue + cyan + violet + pink palette
- Light and dark variants
- Terminal-safe contrast and truecolor palette
- Markdown and syntax highlighting mapped to the Neon Flow colors
- Diff colors for added, removed, context and hunk states
- Active, selected, muted, warning, success, error and info states
- No CSS injection, browser effects or OpenCode plugins required

The OpenCode version intentionally translates the visual language rather than copying Hermes browser-only effects such as backdrop blur, SVG backgrounds and keyframe animation.

## Install globally

Copy `../.opencode/themes/telegram-neon-flow.json` to:

```text
~/.config/opencode/themes/telegram-neon-flow.json
```

On systems using `XDG_CONFIG_HOME`, use:

```text
$XDG_CONFIG_HOME/opencode/themes/telegram-neon-flow.json
```

Then start OpenCode and run:

```text
/theme
```

Select **telegram-neon-flow**.

## Install for one project

Copy the theme file into the project's:

```text
.opencode/themes/telegram-neon-flow.json
```

OpenCode loads project themes after user themes, so a project-local file can intentionally override a global theme with the same name.

## Set it as the configured theme

OpenCode can also select a theme through its TUI configuration:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "telegram-neon-flow"
}
```

## Design system

| Role | Light | Dark |
| --- | --- | --- |
| Telegram Blue | `#4EA4F5` | `#4EA4F5` |
| Cyan | `#208DA2` | `#51DFF7` |
| Violet | `#6D67F5` | `#918BFF` |
| Pink | `#C85898` | `#FF7CC4` |
| Green | `#278B69` | `#6FD3A7` |
| Yellow | `#B8781E` | `#E7C775` |
| Light background | `#F3F7FC` | — |
| Dark background | — | `#050811` |

The canonical Hermes browser theme remains in `plugin.js`; this file is the native TUI counterpart.
