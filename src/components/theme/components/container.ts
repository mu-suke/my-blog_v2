export const Container = {
  variants: {
    default: {
      maxW: 'container.md',
      paddingX: { base: '1rem', md: '1.5rem' },
      paddingY: {
        base: 0,
        md: '1.5rem',
      },
    },
    lg: {
      maxW: 'container.lg',
      paddingX: '1rem',
      paddingY: {
        base: '2.5rem',
        md: '4rem',
      },
    },
    sm: {
      maxW: 'container.sm',
      paddingX: '1rem',
      paddingY: {
        base: '2.5rem',
        md: '4rem',
      },
    },
    xs: {
      maxW: 'container.sm',
      paddingX: {
        base: '1rem',
        md: '6rem',
      },
      paddingY: {
        base: '2.5rem',
        md: '4rem',
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
