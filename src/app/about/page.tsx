"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./index.module.scss";
import { useGSAP } from "@gsap/react";

const AboutPage = () => {
  const experiences = [
    {
      company: "Rework AI",
      position: "Frontend Engineer Intern",
      duration: "Mar' 2024 - Present",
      description: [
        "Developed secure Role-Based Access Control (RBAC) system and integrated with frontend.",
        "Connected Monaco editor with Judge0 for code execution.",
        "Implemented input validation, sanitization, and user authentication.",
        "Utilized data loaders, custom hooks, and Redux for optimized performance.",
        "Integrated AI models like Face Anti-spoof and JD Matching into applications.",
      ],
    },
    // Add more experience objects as needed
  ];

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Create a timeline instance
    const tl = gsap.timeline({ defaults: { opacity: 0, y: 50, duration: 1 } });

    // Add animations for each card using cardRefs
    cardRefs.current.forEach((card, index) => {
      tl.from(card, { delay: 0.2 * index });
    });
  }, []);

  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHeader}>
        <div className={styles.profileImage}>
          <Image
            src="/assets/images/profile2.png" // Adjust path to your profile image
            alt="Tushar vaid"
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
        <h1>About Me</h1>
      </div>
      <div className={styles.cardContainer}>
        <div
          ref={(el) => {
            if (el) cardRefs.current[0] = el;
          }}
          className={styles.card}
        >
          <h2>Personal Information</h2>
          <p>
            I am Tushar Vaid, a Frontend Engineer with a passion for developing
            robust and user-friendly web applications.
          </p>
          <p>
            I graduated from Thapar Institute of Engineering and Technology with
            a Bachelor of Engineering (B.E) in Electronics & Communication,
            achieving a CGPA of 7.83/10 in 2024.
          </p>
          <p>
            I am dedicated to continuous learning and growth, particularly
            interested in backend technologies and open-source contributions.
          </p>
        </div>
        <div
          ref={(el) => {
            if (el) cardRefs.current[1] = el;
          }}
          className={styles.card}
        >
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>{`${exp.company} | ${exp.position}`}</h3>
                <p>{exp.duration}</p>
              </div>
              <ul className={styles.descriptionList}>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
