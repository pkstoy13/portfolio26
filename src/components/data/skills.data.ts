import {
  SiDotnet,
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiLinux,
  SiGithub,
  SiNodedotjs,
  SiSpring,
  SiFlask,
  SiVuedotjs,
  SiAngular,
  SiTerraform,
  SiBurpsuite,
  SiWireshark,
  SiMongodb,
  SiSqlite,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const skills = [
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Spring", icon: SiSpring },
      { name: ".NET", icon: SiDotnet },
      { name: "Flask", icon: SiFlask },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "Postgres", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Azure", icon: VscAzure },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub", icon: SiGithub },
      { name: "Terraform", icon: SiTerraform },
      { name: "Nginx", icon: SiNginx },
    ],
  },
  {
    title: "Cyber",
    items: [
      { name: "Linux", icon: SiLinux },
      { name: "BurpSuite", icon: SiBurpsuite },
      { name: "Wireshark", icon: SiWireshark },
    ],
  },
];
