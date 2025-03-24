import { selector } from 'recoil';
import { projectState } from './atoms';

export const selectedProjectSelector = selector({
  key: 'selectedProjectSelector',
  get: ({ get }) => {
    const state = get(projectState);
    return state.selectedProject;
  },
});

export const projectsSelector = selector({
  key: 'projectsSelector',
  get: ({ get }) => {
    const state = get(projectState);
    return state.projects;
  },
});

export const projectLoadingSelector = selector({
  key: 'projectLoadingSelector',
  get: ({ get }) => {
    const state = get(projectState);
    return state.isLoading;
  },
});

export const projectErrorSelector = selector({
  key: 'projectErrorSelector',
  get: ({ get }) => {
    const state = get(projectState);
    return state.error;
  },
});

// 프로젝트 상태별 필터링 selector
export const activeProjectsSelector = selector({
  key: 'activeProjectsSelector',
  get: ({ get }) => {
    const state = get(projectState);
    return state.projects.filter(project => project.status === 'active');
  },
});

export const completedProjectsSelector = selector({
  key: 'completedProjectsSelector',
  get: ({ get }) => {
    const state = get(projectState);
    return state.projects.filter(project => project.status === 'completed');
  },
}); 