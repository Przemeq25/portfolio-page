export const theme = {
  font: {
    size: {
      desktop: {
        xs: '14px',
        sm: '16px',
        md: '20px',
        lg: '28px',
        xl: '48px',
        title: '54px',
      },
      mobile: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '22px',
        xl: '32px',
        title: '40px',
      },
    },
    family: 'Rubik',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 800,
    },
  },
  colors: {
    primary: '#F8C100',
    secondary: '#000000',
    contrastText: '#FFFFFF',
    background: {
      primary: '#FAFAFA',
      secondary: '#F0F0F0',
      tertiary: '#DCDBDB',
    },
  },
  mediaBreakpoints: {
    sm: '@media all and (max-width: 600px)',
    md: '@media all and (max-width:960px)',
    lg: '@media all and (max-width:1280px)',
    xl: '@media all and (max-width:1920px)',
  },
};
