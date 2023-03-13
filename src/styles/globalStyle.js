import { createGlobalStyle } from 'styled-components/macro';
import { theme } from './theme';

export default createGlobalStyle`

    * {
      scrollbar-color: #cdcdcd transparent;
      scrollbar-width: thin;
    }

    *, *:before, *:after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
    }

    *::-webkit-scrollbar-track {
      display: none;
    }

    html {
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      scroll-behavior: smooth;  

    };

    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      line-height: inherit;
      min-width: 0;
      font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
      background-attachment: fixed;
      opacity: 1;
      background-color: ${({ theme: { colors } }) => colors.white};
      color:${({ theme: { colors } }) => colors.primaryColor};
      overflow-x: hidden;

      
      
    };

    #root {
      height: 100%;
      overflow: hidden;
      & > div:first-child {
        display: flex;
        flex-flow: column;
        height: 100%;
      }
    }

    .main-content-container {
      flex: 1;
      margin-top: ${theme.headerHeight}px;
    }

    .desktop-only {
      display: block;

      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
        display: none !important;
      }
    }
    
    .desktop-none {
      @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
        display: none !important;
      }
    }

    .mobile-only {
      display: block;
      @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
        display: none !important;
      }
    }

    .smartphone-none {
      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
        display: none !important;
      }
    }

    .mobile-none {
      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
        display: none !important;
      }
    }

    .ui.selection.active.dropdown .menu {
      border-color: ${({ theme: { colors } }) => colors.borderColor} !important
    }

    .ui.fluid.input > input {
      border-color: ${({ theme: { colors } }) => colors.borderColor} !important
    }

    .ui.input>input {
      font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }

    /* BUTTON */
    .ui.button {
      font-family:${({ theme: { fontFamily } }) => fontFamily.bold};
      font-weight: unset;
    }

    .ui.multiple.dropdown .menu {
      width: 100%;
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }
    .ui.fluid.dropdown {
      border-color: ${({ theme: { colors } }) => colors.borderColor} !important;
    }

    #main-content .dimmer {
      background: #00000029;
      margin-top: ${({ theme: { header } }) => header.height}px;
      z-index: 14;
    }

    .ui.checkbox input:focus~label:before{
      border: ${({ theme: { colors } }) => `1px solid ${colors.borderColor}`} !important;
    }


    .ui.label > .icon {
      padding-top: 1px;
      opacity: 1 !important;
    }

    .ui.button {
      margin: 0px;
      font-size: 16px;
    }

    .ui.dropdown .menu {
      width: 100%;
    }

    .w-full {
      width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;

    }

    .h-full {
      height: -moz-available;          /* WebKit-based browsers will ignore this. */
      height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
      height: fill-available;

    }

    .max-w-full {
      max-width: -moz-available;          /* WebKit-based browsers will ignore this. */
    max-width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    max-width: fill-available;
    }

    .max-h-full {
      max-height: -moz-available;          /* WebKit-based browsers will ignore this. */
    max-height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    max-height: fill-available;
    }
    
    
`;
