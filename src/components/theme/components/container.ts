export const Container = {
  variants: {
    default: {
      maxW: 'container.md',
      paddingX: '1rem',
      paddingY: {
        base: '2.5rem',
        md: '4rem',
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
