import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#2E9468',
    100: '#39A275',
    80: '#46AF81',
  },
  hit: {
    120: '#F0F0F0',
    100: '#FFFFFF',
    80: '#F7F7F7',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F4F5F6',
    80: '#EBEEEF',
    40: '#DADFE2',
    10: '#C8D0D5',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#F7F7F8',
    40: '#E6E8EB',
    10: '#D4D9DE',
  },
  beerus: {
    100: '#DADFE2',
  },
  bulma: {
    100: '#010913',
  },
  trunks: {
    100: '#8697A2',
  },
};

const hub88: Theme = {
  ...sharedTokens,
  brand: 'Aposta10',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'light',
};

export default hub88;
