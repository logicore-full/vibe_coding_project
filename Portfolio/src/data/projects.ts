export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "示例项目 1",
    description: "这是一个示例项目的描述",
    image: "/placeholder.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com"
  },
  {
    id: 2,
    name: "示例项目 2",
    description: "这是另一个示例项目的描述",
    image: "/placeholder.jpg",
    techStack: ["Vue", "Node.js", "Express"],
    link: "https://github.com"
  }
];
