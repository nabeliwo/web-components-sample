const getFontSize = (scaleFactor: number, diff = 0) => `${scaleFactor / (scaleFactor + diff)}rem`

export const fontSize = {
  XXS: getFontSize(16, 3),
  XS: getFontSize(16, 2),
  S: getFontSize(16, 1),
  M: getFontSize(16),
  L: getFontSize(16, -1),
  XL: getFontSize(16, -2),
  XXL: getFontSize(16, -3),
}
