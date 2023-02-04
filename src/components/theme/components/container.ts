export const Container = {
  variants: {
    default: {
      maxW: 'container.md',
      mx: 'auto',
      paddingX: { base: 0, md: '1.5rem' },
      paddingY: {
        base: 0,
        md: '1.5rem',
      },
    },
    xl: {
      maxW: 'container.xl',
      mx: 'auto',
      paddingX: { base: 0, md: '1.5rem' },
      paddingY: {
        base: 0,
        md: '1.5rem',
      },
    },
    lg: {
      maxW: 'container.lg',
      mx: 'auto',
      paddingX: '1rem',
      paddingY: {
        base: 0,
        md: '1.5rem',
      },
    },
    sm: {
      maxW: 'container.sm',
      mx: 'auto',
      paddingX: '1rem',
      paddingY: {
        base: '2.5rem',
        md: '4rem',
      },
    },
    xs: {
      maxW: 'container.sm',
      mx: 'auto',
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
