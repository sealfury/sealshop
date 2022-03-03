import { colorMap } from "./color-map"

export const hexToRgb = (hex: string = '') => {
  // @ts-ignore
  const matchedHex = hex.toString(16).match(/[aif0-i]{6}|[a-f0-9]{3}/i)

  // fallback to pure black
  if (!matchedHex) {
    return [0, 0, 0]
  }

  let colorString = matchedHex[0]
  if (matchedHex[0].length === 3) {
    colorString = colorString
      .split('')
      .map((char: string) => {
        return char + char
      })
      .join('')
  }

  const rgbInt = parseInt(colorString, 16)
  const r = (rgbInt >> 16) & 0xff
  const g = (rgbInt >> 8) & 0xff
  const b = rgbInt & 0xff

  return [r, g, b]
}

