"use client";
import { useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
// import { gsap } from "gsap";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.scss";
import Link from "next/link";
export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Framer WebApp",
      description:
        " Visually appealing landing page built using React.js and Material-UI",
      framework: "React, Material UI",
      liveDemo: "https://tushar-framer-web-app.vercel.app/",
      image: "/assets/images/LandingPage.png", // Adjust path relative to your public directory
    },
    {
      id: 2,
      title: "TextUtils",
      description:
        "A web application built using react to help user to analyze text and manipulate with it.",
      framework: "React",
      liveDemo: "https://text-utils-jade.vercel.app/",
      image: "/assets/images/TextUtils.png", // Adjust path relative to your public directory
    },
    {
      id: 3,
      title: "Project 1",
      description: "Description of Project 1",
      framework: "React, Node.js",
      liveDemo: "https://example.com/project1",
      image: "/assets/images/LandingPage.png", // Adjust path relative to your public directory
    },
    // Add more projects as needed
  ];

  return (
    <div className={styles.projectsPage}>
      <main className={styles.mainContent}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows
          swipeable
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.project}
              //   ref={projectRefs[index]}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.overlay}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>
                  <strong>Framework:</strong> {project.framework}
                </p>
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveDemoButton}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </main>
    </div>
  );
}
