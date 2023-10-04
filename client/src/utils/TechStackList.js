import {
  BsFiletypeHtml,
  BsFiletypeCss,
  BsFiletypeScss,
  BsGit,
} from "react-icons/bs";
import { BiLogoJavascript, BiLogoRedux, BiLogoGithub } from "react-icons/bi";
import { FaReact, FaBootstrap, FaWpforms } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

export const TechStackList = [
  { id: 1, name: "HTML", icon: BsFiletypeHtml },
  { id: 2, name: "Css", icon: BsFiletypeCss },
  { id: 3, name: "Javascript", icon: BiLogoJavascript },
  { id: 4, name: "React.js", icon: FaReact },
  { id: 5, name: "Bootstrap", icon: FaBootstrap },
  { id: 6, name: "Express.js", icon: SiExpress },
  { id: 7, name: "Tailwind", icon: SiTailwindcss },
  { id: 8, name: "Scss", icon: BsFiletypeScss },
  { id: 9, name: "Next.js", icon: SiNextdotjs },
  { id: 10, name: "mongoDB", icon: SiMongodb },
  { id: 11, name: "Node.js", icon: TbBrandNodejs },
  { id: 12, name: "Redux.js", icon: BiLogoRedux },
  { id: 13, name: "Typescript", icon: SiTypescript },
  { id: 14, name: "Formik", icon: FaWpforms },
  { id: 15, name: "gitHub", icon: BiLogoGithub },
  { id: 16, name: "gitLab", icon: BsGit },
];
