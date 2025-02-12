import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#d78b2d',
    100: '#d49649',
    80: '#d3a164',
  },
  hit: {
    120: '#050c1f',
    100: '#0a1533',
    80: '#111f45',
  },
  beerus: {
    100: '#26304a',
  },
  goku: {
    100: '#0a1533',
    80: '#111f45',
    40: '#233567',
    10: '#3b4e81',
  },
  gohan: {
    100: '#131e3f',
    80: '#1b2850',
    40: '#2f3f6f',
    10: '#47588a',
  },
  bulma: {
    100: '#ffffff',
  },
  goten: {
    100: '#ffffff',
  },
  trunks: {
    100: '#939aae',
  },
};

const tajCasinoDark: Theme = {
  ...sharedTokens,
  brand: 'Tajcasino',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  colorScheme: 'dark',
};

export default tajCasinoDark;
