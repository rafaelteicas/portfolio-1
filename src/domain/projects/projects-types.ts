export interface ProjectTypes {
  screenshot: string[];
  title: string;
  description: string;
  skills: string[];
  gitUrl: string;
  backend?: Partial<ProjectTypes>;
}
