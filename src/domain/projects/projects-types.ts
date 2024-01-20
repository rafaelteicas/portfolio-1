export interface ProjectTypes {
  screenshot: string[];
  title: string;
  description: string;
  skills: string[];
  gitUrl: string;
  projectImage: string;
  backend?: Partial<ProjectTypes>;
  url: string;
}
