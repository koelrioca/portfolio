import {
    coming_soon,
    css,
    html,
    figma,
    git,
    github,
    gsap,
    bootstrap,
    javascript,
    motion,
    nodejs,
    reactjs,
    nextjs,
    spline,
    tailwind,
    threejs,
  } from "../assets"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  
    {
      name: "Next JS",
      icon: nextjs,
    },
  
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
  
    {
      name: "Node JS",
      icon: nodejs,
    },
  
    {
      name: "Three JS",
      icon: threejs,
    },
  
    {
      name: "GSAP",
      icon: gsap,
    },
  
    {
      name: "git",
      icon: git,
    },
  
    {
      name: "Github",
      icon: github,
    },
  
    {
      name: "Motion",
      icon: motion,
    },
  
    {
      name: "Spline",
      icon: spline,
    },
  
    {
      name: "Figma",
      icon: figma,
    },
  ]
  
  const projects = [
    {
      name: "At vero",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor, et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      tags: [
        {
          name: "React",
          color: "text-secondary",
        },
        {
          name: "Three.js",
          color: "text-white-100",
        },
        {
          name: "tailwind",
          color: "text-secondary",
        },
      ],
      image: coming_soon,
      source_code_link_1: "https://vercel.com/",
      source_code_link_2: "https://github.com/",
    },
    {
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
      tags: [
        {
          name: "GSAP",
          color: "text-secondary",
        },
        {
          name: "JS",
          color: "text-white-100",
        },
        {
          name: "CSS",
          color: "text-secondary",
        },
      ],
      image: coming_soon,
      source_code_link_1: "https://vercel.com/",
      source_code_link_2: "https://github.com/",
    },
    {
      name: "Stet clita",
      description:
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      tags: [
        {
          name: "Three.js",
          color: "text-secondary",
        },
        {
          name: "React",
          color: "text-white-100",
        },
        {
          name: "GSAP",
          color: "text-secondary",
        },
      ],
      image: coming_soon,
      source_code_link_1: "https://vercel.com/",
      source_code_link_2: "https://github.com/",
    },
  ]
  
  export { projects, technologies }