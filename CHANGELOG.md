# Changelog

All notable changes to this project are documented here.

## [2.4.0] — 2026-09-16

### Added

- Native OpenCode Desktop theme at `opencode-desktop/telegram-neon-flow.json` using OpenCode's `desktop-theme.json` schema.
- Light and dark Desktop palettes aligned with the Hermes Telegram Neon Flow design system.
- Desktop-specific semantic, sidebar, input, ring, bubble, border and syntax overrides.

### OpenCode

- Kept the existing TUI theme at `.opencode/themes/telegram-neon-flow.json`.
- Added a separate Desktop-native theme definition because OpenCode Desktop and the TUI resolve themes through different native implementations.

### Architecture

- Hermes Desktop continues to use the Liquid Glass browser theme.
- OpenCode Desktop now has a native desktop theme definition.
- OpenCode TUI keeps its terminal-safe theme definition.
- Browser-only blur, animated aurora and doodle motion remain Hermes-specific; the native OpenCode Desktop schema currently describes color/token styling rather than arbitrary CSS effects.

## [2.3.0] — 2026-09-16

### Added

- Native OpenCode theme at `.opencode/themes/telegram-neon-flow.json`.
- Light and dark OpenCode palettes aligned with the Hermes Telegram Neon Flow design system.
- OpenCode Markdown, syntax-highlighting, diff, status, selection and border tokens.
- Cross-platform installation and architecture documentation in `README.md`.

### Hermes Desktop

- Retained the existing Telegram Neon Flow Liquid Glass theme implementation.
- Preserved animated aurora, frosted surfaces and independently animated floral doodles.

### Packaging

- The repository now ships one visual theme family with separate native implementations for Hermes Desktop and OpenCode.
- Browser-only effects remain Hermes-specific; OpenCode uses terminal-safe native theme tokens.

## [2.2.0]

- Previous Hermes Desktop release before OpenCode packaging.
