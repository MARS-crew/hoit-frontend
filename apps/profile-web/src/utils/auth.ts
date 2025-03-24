import { authState } from '../store/auth/atoms';
import { useSetRecoilState } from 'recoil';

export const useAuth = () => {
  const setAuth = useSetRecoilState(authState);

  const login = (token: string) => {
    setAuth({
      token,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setAuth({
      token: '',
      isAuthenticated: false,
    });
  };

  return { login, logout };
}; 