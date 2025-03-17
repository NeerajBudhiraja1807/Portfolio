import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa"; // Import the download icon

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>
  Hello, I'm <br />
  <span className={styles.animatedText}>
  <TypeAnimation
  sequence={[
    "Neeraj Kumar", 1000,
    "A FULL-STACK DEVELOPER", 1000,
    "UI/UX DESIGNER", 1000
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  style={{
    display: "inline-block",
    width: "100%", /* Expands text space */
    maxWidth: "700px", /* Prevents cut-off */
    whiteSpace: "normal", /* Allows text to wrap */
    textAlign: "center" /* Centers text */
  }}
/>

  </span>
</h1>

        <p className={styles.description}>
          Code. Build. Deploy. Repeat. Passionate about full-stack development and creating meaningful digital solutions.
          Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonGroup}>
          {/* Contact Me Button */}
          <a href="mailto:Neerajbudhiraja1807@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          
          {/* Resume Download Button */}
          <a 
            href="https://drive.google.com/file/d/1q53co2ceotoXAGGwKiKyBwT0-BPgthQM/view" 
            className={styles.resumeBtn} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download CV <FaDownload className={styles.downloadIcon} />
          </a>

          <a 
            href="https://drive.google.com/file/d/11u3wxFGq6qo-NDWZD086IpfaFY5EZlLG/view" 
            className={styles.resumeBtn} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download Cover Letter<FaDownload className={styles.downloadIcon} />
          </a>

        </div>
      </div>

      {/* Hero Image */}
      <img
        src={getImageUrl("hero/Neerajavatar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
