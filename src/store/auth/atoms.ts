import { atom } from 'recoil';
import { persistAtom } from '@/utils/storage';

export interface IAuthState {
  token: string;
  isAuthenticated: boolean;
}

export const authState = atom<IAuthState>({
  key: 'authState',
  default: {
    token: '',
    isAuthenticated: false,
  },
  effects_UNSTABLE: [persistAtom],
}); 