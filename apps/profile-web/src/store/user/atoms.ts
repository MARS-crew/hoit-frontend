import { atom } from 'recoil';
import { persistAtom } from '@/utils/storage';
import { IUser } from '@/services/api/user';

export interface IUserState {
  profile: IUser | null;
  isLoading: boolean;
  error: string;
}

export const userState = atom<IUserState>({
  key: 'userState',
  default: {
    profile: null,
    isLoading: false,
    error: '',
  },
  effects_UNSTABLE: [persistAtom],
}); 