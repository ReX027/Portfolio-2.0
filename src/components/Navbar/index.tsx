"use client";
import React, { useState } from "react";
import "./index.scss";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [hide, setHide] = useState(false);

  const handleToggle = () => {
    setHide(!hide);
  };

  return (
    <>
      <aside className={`sidebar ${hide ? "hide_sidebar" : ""}`}>
        <div className="logo">
          <div className="logo_img mx-4">
            <Image
              src={"/assets/icons/code.svg"}
              alt="logo"
              width={24}
              height={24}
            ></Image>
          </div>
          <div className="logo_text">Portfolio</div>
          <button className="toggle_btn" type="button" onClick={handleToggle}>
            <Image
              src={"/assets/icons/left-arrow.svg"}
              alt="logo"
              width={24}
              height={24}
            ></Image>
          </button>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link href="/">
                <Image
                  src={"/assets/icons/home-icon.svg"}
                  alt="home"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Image
                  src={"/assets/icons/about-icon.svg"}
                  alt="about"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <Image
                  src={"/assets/icons/project-icon.svg"}
                  alt="project"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact-me">
                <Image
                  src={"/assets/icons/contact-icon.svg"}
                  alt="contact"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="footer-navbar">
        <nav className="navbar">
          <ul>
            <li>
              <Link href="/">
                <Image
                  src={"/assets/icons/home-icon.svg"}
                  alt="home"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Image
                  src={"/assets/icons/about-icon.svg"}
                  alt="about"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <Image
                  src={"/assets/icons/project-icon.svg"}
                  alt="project"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact-me">
                <Image
                  src={"/assets/icons/contact-icon.svg"}
                  alt="contact"
                  width={24}
                  height={24}
                  className="mx-4"
                ></Image>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
