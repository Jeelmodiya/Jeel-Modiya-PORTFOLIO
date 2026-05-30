import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" width={24} height={24} />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/icons8-java.svg" alt="Java" width={24} height={24} />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. Ride Share Flow
    id: "rideshareflow",
    category: "Web Application",
    title: "Ride Share Flow",
    src: "/assets/projects-screenshots/rideshareflow/Screenshot 2026-05-24 161704.png",
    screenshots: [
      "Screenshot 2026-05-24 161704.png",
      "Screenshot 2026-05-24 161730.png",
      "Screenshot 2026-05-24 161749.png",
      "Screenshot 2026-05-24 161815.png",
      "Screenshot 2026-05-24 161829.png",
      "Screenshot 2026-05-24 161852.png",
    ],
    live: "https://rideshareflow.com/",
    github:"https://github.com/Jeelmodiya/Ride-Share-Flow",
    skills: {
      frontend: [],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to Ride Share Flow, your gateway to seamless transportation solutions. Experience convenience and connectivity through our intuitive platform, connecting you with reliable rides and trusted drivers. Join a community committed to sustainability and shared mobility values. Your journey starts here.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/rideshareflow/Screenshot 2026-05-24 161704.png`,
              `${BASE_PATH}/rideshareflow/Screenshot 2026-05-24 161730.png`,
              `${BASE_PATH}/rideshareflow/Screenshot 2026-05-24 161749.png`,
              `${BASE_PATH}/rideshareflow/Screenshot 2026-05-24 161815.png`,
              `${BASE_PATH}/rideshareflow/Screenshot 2026-05-24 161829.png`,
              `${BASE_PATH}/rideshareflow/Screenshot 2026-05-24 161852.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. TRACK project
    id: "track",
    category: "Productivity App",
    title: "Track",
    src: "/assets/projects-screenshots/Track/Screenshot 2026-05-25 175924.png",
    screenshots: [
      "Screenshot 2026-05-25 175924.png",
      "Screenshot 2026-05-25 180002.png",
    ],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "https://track-amber.vercel.app/sign-in",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Track is my attempt to turn everyday chaos into a tidy, well-behaved companion. The app welcomes users with a clean, modern interface that feels like a small digital studio where tasks line up politely, waiting for their turn. It focuses on clarity, flow, and the quiet satisfaction of checking things off.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Designed with a responsive layout and smooth interactions, Track transforms routine planning into a calm and streamlined ritual. This project reflects my approach to front-end development: purposeful design, carefully crafted experiences, and an insistence that digital tools should make life feel lighter, not louder.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/Track/Screenshot 2026-05-25 175924.png`,
              `${BASE_PATH}/Track/Screenshot 2026-05-25 180002.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
