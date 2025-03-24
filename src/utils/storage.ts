import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

export { persistAtom }; 