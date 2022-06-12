import { Color } from './types';

export function isColorList(colors: unknown): colors is Array<Color> {
  return Array.isArray(colors) && colors.every(isColor);
}

export function isColor(color: unknown): color is Color {
  return typeof color === 'object' && color !== null && 'id' in color && 'hex' in color && 'index' in color;
}
