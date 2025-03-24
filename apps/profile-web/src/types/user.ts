export interface ITechStack {
  count: number;
  tech: string;
}

export interface IUser {
  id: string;
  name: string;
  description: string;
  linkCount: number;
  starCount: number;
  techStack: ITechStack[];
  roles: string[];
  position: string[];
  preferences: string[];
} 