import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/ME.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
  {/* George Brown College Logo */}
  <li className={styles.aboutItem}>
    <img
      src={getImageUrl("about/George_Brown_College_logo.svg.png")} 
      alt="George Brown College Logo" 
      className={styles.aboutIcon} 
    />
    <div className={styles.aboutItemText}>
      <h3>George Brown College</h3>
      <p>Advanced Diploma - Computer Programming And Analysis 
      </p>
      <p>Toronto, Ontario, Canada</p>
      <p>September 2022 - April 2025</p>
    </div>
  </li>

  {/* Backend Developer Icon */}
  <li className={styles.aboutItem}>
    <img
      src={getImageUrl("about/ServeEase.jpg")} 
      alt="Backend Development Icon" 
      className={styles.aboutIcon} 
    />
    <div className={styles.aboutItemText}>
      <h3>ServeEase</h3>
      <p>
       Software Developer - Capstone Project
      </p>
      <p>Toronto, Canada</p>
      <p>September 2024 - Present</p>
    </div>
  </li>

  {/* UI Designer Icon */}
  <li className={styles.aboutItem}>
    <img
      src={getImageUrl("about/Aptech_learning.png")} 
      alt="UI Design Icon" 
      className={styles.aboutIcon} 
    />
    <div className={styles.aboutItemText}>
      <h3>Aptech Learning</h3>
      <p>
        Frontend Development Using Python
      </p>
      <p>Ludhiana, Punjab, India</p>
      <p>August 2021 - May 2022</p>
    </div>
  </li>
</ul>

      </div>
    </section>
  );
};
