import { atom } from 'recoil';
import { Theme } from '../../types';

export const themeState = atom<Theme>({
  key: 'themeState',
  default: {
    background: 'white',
    foreground: 'black',
  },
}); 