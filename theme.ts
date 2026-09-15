import { THEMES_AREA } from '@hermes/plugin-sdk'
import type { DesktopTheme } from '@hermes/plugin-sdk'

export const hermesTelegramNeonFlow: DesktopTheme = {
  name: 'hermes-telegram-neon-flow',
  label: 'Telegram Neon Flow',
  description: 'Telegram-inspired glass UI with cyan, purple and pink aurora accents.',
  colors: {
    background: '#F8F7FB',
    foreground: '#25232D',
    card: '#FFFFFF',
    cardForeground: '#25232D',
    muted: '#F1EFF6',
    mutedForeground: '#716D7C',
    popover: '#FFFFFF',
    popoverForeground: '#25232D',
    primary: '#7B6FF2',
    primaryForeground: '#FFFFFF',
    secondary: '#F3F1F8',
    secondaryForeground: '#3A3645',
    accent: '#FF79B8',
    accentForeground: '#3A2030',
    border: '#E7E3EE',
    input: '#E7E3EE',
    ring: '#52D9E8',
    midground: '#8B7CFF',
    midgroundForeground: '#FFFFFF',
    composerRing: '#52D9E8',
    destructive: '#E5484D',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#F3F1F7',
    sidebarBorder: '#E7E3EE',
    userBubble: '#F7E9F3',
    userBubbleBorder: '#F0D4E4'
  },
  darkColors: {
    background: '#07070B',
    foreground: '#F3F1F7',
    card: '#101018',
    cardForeground: '#F3F1F7',
    muted: '#15131E',
    mutedForeground: '#A7A1B5',
    popover: '#11101A',
    popoverForeground: '#F3F1F7',
    primary: '#9A8CFF',
    primaryForeground: '#09080E',
    secondary: '#171522',
    secondaryForeground: '#E9E5F2',
    accent: '#FF79B8',
    accentForeground: '#1B0A13',
    border: '#29243A',
    input: '#29243A',
    ring: '#52D9E8',
    midground: '#9A8CFF',
    midgroundForeground: '#09080E',
    composerRing: '#52D9E8',
    destructive: '#FF6B72',
    destructiveForeground: '#160709',
    sidebarBackground: '#0B0A11',
    sidebarBorder: '#211D2E',
    userBubble: '#21142A',
    userBubbleBorder: '#392040'
  },
  typography: {
    fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", "SF Mono", Menlo, Monaco, monospace'
  },
  terminal: {
    foreground: '#25232D', black: '#24212D', red: '#D93F52', green: '#2D8A67', yellow: '#B7791F', blue: '#6F63D8', magenta: '#C45C9A', cyan: '#248E9A', white: '#E7E3EE',
    brightBlack: '#716D7C', brightRed: '#E5484D', brightGreen: '#3BAF82', brightYellow: '#D49A3A', brightBlue: '#8B7CFF', brightMagenta: '#E47BB4', brightCyan: '#52D9E8', brightWhite: '#FFFFFF'
  },
  darkTerminal: {
    foreground: '#F3F1F7', black: '#101018', red: '#FF6B72', green: '#72D6A9', yellow: '#E8C77A', blue: '#9A8CFF', magenta: '#FF79B8', cyan: '#52D9E8', white: '#D8D3E2',
    brightBlack: '#6E687C', brightRed: '#FF9297', brightGreen: '#9BE7C5', brightYellow: '#F2DB9D', brightBlue: '#B2A8FF', brightMagenta: '#FFABD0', brightCyan: '#8BEAF3', brightWhite: '#FFFFFF'
  }
}

export const contribution = {
  id: hermesTelegramNeonFlow.name,
  area: THEMES_AREA,
  data: hermesTelegramNeonFlow
}
