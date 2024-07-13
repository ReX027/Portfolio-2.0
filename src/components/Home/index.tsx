"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import "./index.scss";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal/index";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const mainHeadingRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(mainHeadingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    })
      .from(aboutMeRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      })
      .from(buttonsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });
  }, []);

  return (
    <>
      <Modal open={openModal} onClose={closeModal} />

      <div className={`HomeSection ${openModal ? "modal-open" : ""}`}>
        <div className="LeftSection">
          <div className="Main-Heading" ref={mainHeadingRef}>
            <span>Welcome to my Portfolio</span>
            <p>Explore my work as a developer and learn more about me.</p>
          </div>
          <div className="heading" ref={aboutMeRef}>
            <h1>About Me</h1>
            <span>
              Hi There! I am <b>Tushar Vaid</b> a passionate Frontend Engineer
              with over 6 months of experience. I specialize in building modern,
              responsive, and user-friendly web applications using the latest
              technologies.
            </span>
            <p>
              In my free time, I enjoy exploring new programming languages,
              contributing to open-source projects, and staying up-to-date with
              the latest industry trends. I am always eager to learn and take on
              new challenges.
            </p>
          </div>
          <div className="buttons" ref={buttonsRef}>
            <button onClick={handleModal}>Resume</button>
            <Link href={"https://github.com/ReX027"} target="_blank">
              <button>Visit Github</button>
            </Link>
          </div>
        </div>
        <div className="RightSection">
          <Image
            src={"/assets/images/profile.png"}
            alt={"Profile"}
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
