import Container from "@/components/Container";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { Github, Globe } from "lucide-react"

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";

import { useTheme } from "next-themes";
import Talks from "@/components/Talks";
import Header from "@/components/Header";
import HighlightBox from "@/components/HighlightBox";
import { ProjectCard } from "@/components/project-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import {WorkExperience} from "@/components/components/work-experience";
import { skills } from "@/data/TechStack";

export default function Home() {

  const WORK_EXPERIENCE = [
  {
    id: "quaric",
    companyName: "Navodita Infotech",
    companyLogo: "https://imgs.search.brave.com/NhQwsSCfuietlLWBLt-Bsb7wnP85V2AmhBVSIKPU9hk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jYWtlcmVzdW1l/LmNvbS9pbWFnZS91/cGxvYWQvcy0tWGh5/SWtyU0EtLS9jX2Zp/bGwsZ19mYWNlLGhf/MzAwLHdfMzAwL3Yx/NzAwNzI5OTM5L2g3/c2lzaHMxaG1iamh3/Zmhtb2RxLmpwZw",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Frontend Intern",
        employmentPeriod: "Feb 2025 - March 2025",
        employmentType: "Remote",
        icon: "code",
        description: `- Designed and developed a dynamic Shopping product catalog for a real-world client project.
- Registered the Shopping site with [online.gov.vn](https://online.gov.vn) for compliance.
- Developed online ordering to streamline purchases.
- Implemented key features like responsive layout, real-time product filtering, and dynamic rendering of product data based on user interactions.
- Tech Stack : MERN, Auth0, Docker, Tailwind, NGINX`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "Research",
          "Project Management",
        ],
        isExpanded: true,
      }
    ],
    isCurrentEmployer: false,
  },
  {
    id: "hacksagon",
    companyName: "HackSagon 2025",
    companyLogo: "https://imgs.search.brave.com/RUWAoatFLcQ-xAnYwSPVqOPc35JMYaCp0hu_LoPsHyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8y/Mi8xLzgvaGFja2F0/aG9uLXdlYi1kZXNp/Z24tZGVzaWduZXIt/cnVieS1vbi1yYWls/cy1wbmctZmF2cG5n/LWpVakp3UFRLUEN0/d0pRdUROYndUZFNp/RkxfdC5qcGc",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b0",
        title: "Project Lead",
        employmentPeriod: "Feb 2025 - June 2025",
        employmentType: "Onsite",
        icon: "code",
        description: `- 36-hour hackathon where me and my team developed a web application called NeuroLearn using MERN Stack.
- Neurolearn is an AI-powered study companion that summarizes lectures, generates
quizzes, and crafts personalized study plans from PDFs or notes.
- Tech Stack : React, Tailwind, Node, Express, MongoDB, OpenAI, NLP`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "Research",
          "Project Management",
        ],
        isExpanded: true,
      }
    ],
    isCurrentEmployer: false,
  },
  {
    id: "contribution",
    companyName: "Contributions",
    companyLogo: "https://imgs.search.brave.com/S5YuHClZzCyuSzkE9xZHnmh9kdHBW8QPJo2EITI0sZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdpdGh1Yi1pY29u/LXN2Zy1wbmctZG93/bmxvYWQtMzE0Nzg3/My5wbmc_Zj13ZWJw/Jnc9MTI4",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b1",
        title: "Active Contributor",
        employmentPeriod: "Jan 2025 - Present",
        employmentType: "Remote",
        icon: "code",
        description: `- Contributed to the dvelopment of a web application for a local bussiness.
- Worked in a team to design and implement a project and gained experience of React Tanstack Query and Backend stuff.
- Acquired expertise in version control and web development with git and github.`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "Research",
          "Project Management",
        ],
        isExpanded: false,
      }
    ],
    isCurrentEmployer: true,
  },
];
 

  const [colors, setColors] = useState([]);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <Container
      title="Anurag Singh"
      description="Full-Stack developer , JavaScript enthusiast , Freelancer , Tech Blogger and a Learner. I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Header/>

        <h3 className="text-2xl md:text-3xl font-bungee mb-8 sm:mt-10 mt-5 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <HighlightBox>About</HighlightBox>
        </h3>

        <div className="prose prose-sm mb-5 max-w-none text-justify font-medium text-zinc-600 dark:text-zinc-300 font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge text-md">
        <p>
          Hello World ✨ I am <span className="text-xl" style={{wordSpacing: "-3px"}}>ᴀɴᴜʀᴀɢ ꜱɪɴɢʜ</span> — A Full Stack Web Developer passionate about creating high performance, user centric software solutions with intuitive and engaging designs. I have expertise in frameworks like <span className="font-bold font-mono text-black">React Js</span>, <span className="font-bold font-mono text-black">Node Js</span> and <span className="font-bold font-mono text-black">Next Js</span>. I leverage <span className="font-bold font-GS text-black tracking-wider">AWS</span> Services to create efficient and reliable solutions. <span className="font-bold font-mono text-black">MongoDB</span> and <span className="font-bold font-mono text-black">PostgreSQL</span> for database management, <span className="font-bold font-mono text-black">Clerk</span> and <span className="font-bold font-mono text-black">Zustand</span> for effective authentication and state management. 
        </p>
        <p>
          One of my key projects <AuroraText className = "font-bold font-jetbrains" style={{wordSpacing: "-3px"}}>Shadyx UI</AuroraText> enhances the frontend experience on PC and Web surpassing <span className="text-teal-700 font-mono dark:text-teal-200 font-bold">150
            </span> downloads on SourceForge and <span className="text-blue-800 font-mono font-bold dark:text-blue-300">100 plus</span> active users since 2025.
        </p>
        </div>


        <h3 className="text-2xl md:text-3xl font-bungee mb-8 sm:mt-10 mt-10 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <HighlightBox>Projects</HighlightBox>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Shadyx UI"
            href="https://shadyxui.in"
            description="UI components library that offers awesome reusable components for building web applications , create stunning websites and enjoy the flow from COPY to VIBE."
            dates="May 2025 - June 2025"
            tags={["Next js",
            "Typescript",
            "Tailwind",
            "Figma",
            "Prisma",
            "Aceternity",
            "MongoDB",
            "Spectrum"]}
            link="https://shadyxui.in"
            image="/shadyxui.jpg"
            links={[
              { icon: <Globe size={13}/>, type: "Website", href: "https://shadyxui.in" },
              { icon: (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 438.549 438.549" 
                  width="14" 
                  height="14" 
                  fill="currentColor">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"/>
                </svg>
                ), type: "Source", href: "https://github.com/username/repo" }
            ]}
          />
          <ProjectCard
            title="Scrivo"
            href="https://shadyxui.in"
            description="A full featured project management platform designed to streamline task tracking and team collaboration through dashboards that is customizable workflows and real time updates."
            dates="August 2025 - Present"
            tags={["Next js",
            "Javascript",
            "Tailwind CSS",
            "Clerk",
            "Prisma",
            "Shadcn",
            "Neon DB",
            "Figma"]}
            link="https://shadyxui.in"
            image="/scrivo.jpg"
            links={[
              { icon: <Globe size={13}/>, type: "Website", href: "https://shadyxui.in" },
              { icon: (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 438.549 438.549" 
                  width="14" 
                  height="14" 
                  fill="currentColor">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"/>
                </svg>
                ), type: "Source", href: "https://github.com/username/repo" }
            ]}
          />
          <ProjectCard
            title="CricVortex"
            href="https://cricvortex.netlify.app/??"
            description="Web Based platform that allows users to watch live match scores , upcoming fixtures and real time cricket insights all in one place alongwith a manual scorecard feature."
            dates="Sept 2024 - Oct 2024"
            tags={["React",
            "JavaScript",
            "Cricapi",
            "Tailwind",
            "Local Storage"]}
            link="https://cricvortex.netlify.app/??"
            image="/cricvortex.jpg"
            links={[
              { icon: <Globe size={13}/>, type: "Website", href: "https://cricvortex.netlify.app/??" },
              { icon: (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 438.549 438.549" 
                  width="14" 
                  height="14" 
                  fill="currentColor">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"/>
                </svg>
                ), type: "Source", href: "https://github.com/username/repo" }
            ]}
          />
          <ProjectCard
            title="fiscal.cdm"
            href="https://fiscalcdm.netlify.app"
            description="A platform that displays a calendar for visualizing historical volatility , liquidity and performance data across different time periods for financial instruments."
            dates="Dec 2024 - Jan 2025"
            tags={["React",
            "Typescript",
            "Tailwind CSS",
            "D3 js",
            "OKX API",
            "Ant Design"]}
            link="https://fiscalcdm.netlify.app"
            image="/fiscalcdm.jpg"
            links={[
              { icon: <Globe size={13}/>, type: "Website", href: "https://fiscalcdm.netlify.app" },
              { icon: (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 438.549 438.549" 
                  width="14" 
                  height="14" 
                  fill="currentColor">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"/>
                </svg>
                ), type: "Source", href: "https://github.com/username/repo" }
            ]}
          />
        </div>

        <div className="w-full flex justify-center mt-8 mb-10 font-jetbrains font-bold">
          <Link
            href="/projects"
            className="text-sm px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            <div className="flex items-center justify-center">
              <div>See More</div>
              <svg
                className="h-4 w-4 ml-2 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </Link>
        </div>

        <h3 className="text-2xl md:text-3xl font-bungee mb-8 sm:mt-15 mt-5 text-black/80 dark:text-white">
          <HighlightBox>Experience</HighlightBox>
        </h3>

        <div className="max-w-3xl mx-auto mt-5 mb-10">
          <WorkExperience experiences={WORK_EXPERIENCE} className="border rounded-lg" />
        </div>
        
        <div className="flex justify-center items-center text-2xl md:text-3xl font-bungee mb-8 sm:mt-10 mt-5 text-black/80 dark:text-white mx-auto">
          <HighlightBox className="mx-auto inline-block text-center">
            STACK
          </HighlightBox>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="p-2 rounded-md text-xs sm:text-sm font-bold font-jetbrains
                        bg-black text-white
                        dark:bg-white dark:text-black
                        shadow-md transition [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center bg-zinc-950/0.75 dark:bg-white/0.75">
              {skill}
            </span>
          ))}
        </div>
        
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
