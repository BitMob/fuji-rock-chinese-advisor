import { injectGlobal } from "styled-components"
import * as s from "../../libs/styleUtils"

const FrcaEnReg = `${s.fontPath}Asap-Regular.ttf`
const FrcaEnItl = `${s.fontPath}Asap-Italic.ttf`
const FrcaEnBold = `${s.fontPath}Asap-Bold.ttf`
const FrcaEnBoldItl = `${s.fontPath}Asap-BoldItalic.ttf`
const FrcaEnSemiBoldItl = `${s.fontPath}Asap-SemiBoldItalic.ttf`
const FrcaCnSerif = `${s.fontPath}SourceHanSerifCN-Bold.ttf`
const FrcaCnSansBold = `${s.fontPath}WHZTH.ttf`

injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  html, body {
    font-family:
      "PingFang HK",
      "Hiragino Sans GB",
      "Helvetica Neue",
      "Roboto",
      "STHeiti",
      Helvetica,
      Arial,
      sans-serif;
    margin: 0;
    padding: 0;
    >a {
      display: none;
    }
  }
  a, a:visited {
    color: #000;
    text-decoration: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
  }
  /* Asap */
  @font-face {
    font-family: 'Frca-En';
    src: url(${FrcaEnReg}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Frca-En';
    src: url(${FrcaEnItl}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Frca-En-Bold';
    src: url(${FrcaEnBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Frca-En-Bold';
    src: url(${FrcaEnBoldItl}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Frca-En-Semi';
    src: url(${FrcaEnSemiBoldItl}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Frca-Cn';
    src: url(${FrcaCnSerif}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Frca-Cn-Sans';
    src: url(${FrcaCnSansBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`
