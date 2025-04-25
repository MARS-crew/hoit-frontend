export interface Theme {
  background: string;
  foreground: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
} 