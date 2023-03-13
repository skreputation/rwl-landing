export const configuration = {
  fontSizes: {
    huge: { desktop: 58, tablet: 40, mobile: 40 },
    big: { desktop: 48, tablet: 30, mobile: 24 },
    medium: { desktop: 32, tablet: 24, mobile: 24 },
    normal: { desktop: 32, tablet: 16, mobile: 16 },
    small: { desktop: 24, tablet: 16, mobile: 16 }
  },
  lineHeight: {
    huge: { desktop: 70, tablet: 50, mobile: 31.25 },
    big: { desktop: 50, tablet: 30, mobile: 25 },
    large: { desktop: 42.5, tablet: 36, mobile: 33 },
    medium: { desktop: 37.5, tablet: 30, mobile: 18.75 },
    normal: { desktop: 35, tablet: 30, mobile: 17.5 },
    small: { desktop: 26.25, tablet: 30, mobile: 17.5 },
    tiny: { desktop: 22.75, tablet: 30, mobile: 17.5 },
    nano: { desktop: 21, tablet: 20, mobile: 17.5 }
  }
};

export const theme = {
  header: {
    height: 56,
    sectionsHeight: 104
  },
  ...configuration,
  fontFamily: {
    light: 'roboto-light',
    italic: 'roboto-italic',
    medium: 'roboto-medium',
    regular: 'roboto-regular',
    bold: 'roboto-bold'
  },
  colors: {
    primaryColor: '#232323',
    white: '#FFFFFF',
    lightGreen: '#73B783',
    darkGreen: '#11AA67',
    lighterGreen: '#E2F4DC',
    orange: '#F6B502',
    red: '#BE3144',
    lightRed: '#F5D5D3',
    grey: '#B4B4B4',
    layoutBackgroundColor: '#F4F4FD',
    errorColor: '#CB2D24',
    secondaryColor: '#BE3144',
    borderColor: '#ECEBEC',
    darkGrey: '#55595C',
    lightGrey: '#707070',
    lightGreyBackground: '#F3F3F3',
    smalt: '#3399CC',
    lightGreyText: '#B5B5B5',
    blackGrey: '#404040',
    dividerColor: '#E2E2E3',
    blue: '#1E82C8',
    dodgerBlue: '#159DF7',
    overbookingColor: '#FF8787',
    tableColor: '#A2A2A232'
  },
  mediaQueries: {
    mobileBreakpoint: '48rem',
    mobilePixel: 768,
    desktopPixel: 1024,
    footerMinWidth: '50rem'
  },

  searchbarHeight: 35,
  breadcrumbHeight: 56,
  boxShadow: '2px 5px 15px #00000029',
  borderRadius: 4,
  footerHeight: 56,
  offSetRightMultipleModal: 10
};

export default theme;
