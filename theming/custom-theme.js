const CustomTheme = (colors, isDarkmode) => {
  return {
    breakpoints: {
      values: {
        xl: 1440,
      },
    },
    palette: {
      type: isDarkmode ? 'dark' : 'light',
      primary: {
        main: colors['primary-500'],
      },
      secondary: {
        main: colors['secondary-500'],
      },
      warning: {
        main: colors.warning,
      },
      error: {
        main: colors.error,
      },
      background: {
        paper: colors.paper,
        default: colors.background,
      },
      text: {
        primary: colors.text,
        secondary: colors.secondaryText,
      },
    },
    typography: {
      fontFamily: ['"Marcellus"'].join(','),
      h1: {
        fontSize: '2.625rem',
        lineHeight: 1,
        marginBottom: '4px',
      },
      h2: {
        fontSize: '2rem',
        lineHeight: 1,
        marginBottom: '4px',
        fontWeight: '300',
      },
      h3: {
        fontSize: '2rem',
        lineHeight: 1.5,
        marginBottom: '4px',
        fontWeight: '400',
      },
    },
    overrides: {
      MuiSwitch: {
        root: {
          width: '82px',
          height: '49px',
          padding: '8px 12px',
        },
        thumb: {
          width: '29px',
          height: '29px',
        },
        switchBase: {
          padding: '4px',
          margin: '6px 10px',
          color: colors.contrastText,
          '&$checked': {
            transform: 'translateX(24px)',
            '& + $track': {
              opacity: 1,
            },
          },
        },
        track: {
          borderRadius: '16px',
          opacity: 1,
          backgroundColor: colors.backgroundInverted,
        },
      },
    },
  }
}

export default CustomTheme
