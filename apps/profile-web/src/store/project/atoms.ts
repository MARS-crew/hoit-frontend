import { atom } from 'recoil';

export interface IProject {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface IProjectState {
  selectedProject: IProject | null;
  projects: IProject[];
  isLoading: boolean;
  error: string;
}

export const projectState = atom<IProjectState>({
  key: 'projectState',
  default: {
    selectedProject: null,
    projects: [],
    isLoading: false,
    error: '',
  },
}); 