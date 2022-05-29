import fontColorContrast from 'font-color-contrast';
import makeColorAccesible from 'make-color-accessible';

export const useColor = () => {
  function stringToHexColor(text: string) {
    let hash = 0;
    let i;

    for (i = 0; i < text.length; i += 1) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return makeColorAccesible(color);
  }

  function getFontColor(color: string) {
    return fontColorContrast(color);
  }

  return {
    stringToHexColor,
    getFontColor
  }
}