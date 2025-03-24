import { selector } from 'recoil';
import { userState } from './atoms';

export const userProfileSelector = selector({
  key: 'userProfileSelector',
  get: ({ get }) => {
    const state = get(userState);
    return state.profile;
  },
});

export const userLoadingSelector = selector({
  key: 'userLoadingSelector',
  get: ({ get }) => {
    const state = get(userState);
    return state.isLoading;
  },
});

export const userErrorSelector = selector({
  key: 'userErrorSelector',
  get: ({ get }) => {
    const state = get(userState);
    return state.error;
  },
}); 