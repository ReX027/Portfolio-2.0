"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./index.module.scss";

export default function ContactPage() {
  //   const inputRef = useRef();
  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    // Animate the form container
    gsap.fromTo(
      `.${styles.contactFormContainer}`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate the form fields
    gsap.fromTo(
      `.${styles.formGroup}`,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className={styles.contactFormContainer}>
      <h1>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
