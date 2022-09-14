export const fixString = (x: string): string => x
  .replace('&aacute;','á')
  .replace('&eacute;','é')
  .replace('&iacute;','í')
  .replace('&oacute;','ó')
  .replace('&uacute;','ú')
  .replace('&ntilde;', 'ñ')
  .replace('Ã¡', 'á')
  .replace('Ã©', 'é')
  .replace('Ã³', 'ó')
  .replace('Ã±', 'ñ')
  .replace('í±', 'ñ')
  .replace('Ãº', 'ú')
  .replace('Ã', 'í')