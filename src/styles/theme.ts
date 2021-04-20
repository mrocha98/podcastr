const defaultFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

export default {
  font: {
    family: {
      default: defaultFonts,
      inter: `Inter, ${defaultFonts}`,
      lexend: `Lexend, ${defaultFonts}`
    },
    weight: {
      light: 400,
      normal: 500,
      bold: 600
    },
    sizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.5rem',
      xlarge: '2rem'
    }
  },
  colors: {
    white: 'var(--white)',
    'gray-50': 'var(--gray-50)',
    'gray-100': 'var(--gray-100)',
    'gray-200': 'var(--gray-200)',
    'gray-500': 'var(--gray-500)',
    'gray-800': 'var(--gray-800)',
    'green-500': 'var(--gren-500)',
    'purple-300': 'var(--purple-300)',
    'purple-400': 'var(--purple-400)',
    'purple-500': 'var(--purple-500)',
    'purple-800': 'var(--purple-800)'
  }
} as const
