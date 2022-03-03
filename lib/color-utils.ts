import { colorMap } from './color-map'

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

export const isDark = (color: string = ''): boolean => {
  color = color.toLowerCase()

  // Equation from http://24ways.org/2010/calculating-color-contrast
  let rgb = colorMap[color] ? hexToRgb(colorMap[color]) : hexToRgb(color)
  const result = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000

  return result < 128
}
