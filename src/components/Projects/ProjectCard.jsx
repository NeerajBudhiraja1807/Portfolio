import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, images, source },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewClick = () => {
    setIsModalOpen(true);
    setCurrentImageIndex(0); // Reset to first image
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <button onClick={handleViewClick} className={styles.link}>
          View
        </button>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>
      </div>

      {/* Modal for viewing project images */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className={styles.carousel}>
              
              <img
                src={getImageUrl(images[currentImageIndex])}
                alt={`Project ${currentImageIndex + 1}`}
                className={styles.modalImage}
              />
              
            </div>

            <div className={styles.imageIndicator}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
