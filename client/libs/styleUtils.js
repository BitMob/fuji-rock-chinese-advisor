export const cBlue = `#0076FF`

export const desktop = "screen and (min-width: 992px)"
export const bigScreen = "screen and (min-width: 480px)"

export const fontPath = "https://frca.oss-cn-shenzhen.aliyuncs.com/fonts/"
export const imagePath = "http://frca.oss-cn-shenzhen.aliyuncs.com/images/"

export const easing = {
  out: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  in: "cubic-bezier(0.895, 0.03, 0.685, 0.22)"
}

export function pos({ t = "auto", l = "auto", r = "auto", b = "auto" }) {
  return `
    top: ${t};
    right: ${r};
    bottom: ${b};
    left: ${l};
  `
}

export function size({ w = "auto", h = "auto" }) {
  return `
    width: ${w};
    height: ${h};
  `
}

export const fonts = {
  EnReg: `
    font-family: "Frca-En";
  `,
  EnItl: `
    font-family: "Frca-En";
    font-style: italic;
  `,
  EnBold: `
    font-family: "Frca-En-Bold";
    font-weight: bold;
  `,
  EnBoldItl: `
    font-family: "Frca-En-Bold";
    font-weight: bold;
    font-style: italic;
  `,
  EnSemiItl: `
    font-family: "Frca-En-Semi";
    font-weight: bold;
    font-style: italic;
  `,
  CnBold: `
    font-family: "Frca-Cn";
    font-weight: bold;
  `,
  CnBoldSans: `
    font-family: "Frca-Cn-Sans";
    font-weight: bold;
  `
}

export const colors = {
  pink: "#FA3B69",
  blue: "#152654",
  yellow: "#FFEB28",
  gray: "#CBCBCB"
}
