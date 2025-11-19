export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  span: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface NavLink {
  name: string;
  href: string;
}