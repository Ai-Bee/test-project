import React from "react";
import styles from "../../styles/ServicesSection.module.css";
import SVGViewer from "../SVGViewer";

interface ServiceCardProps {
  title: string;
  blogView?: boolean;
  description: string;
  imageUrl: string;
  author?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  author,
  description,
  blogView,
  imageUrl,
}) => {
  const doc = document.querySelector(":root");
  const computedStyle = getComputedStyle(doc as Element);

  return (
    <div className={styles["service-card"]}>
      <div
        className={`${styles["service-card-image"]} ${
          blogView && styles["service-card-image-blog-view"]
        } `}
        style={{ backgroundImage: `URL(${imageUrl})` }}
      ></div>
      <h3
        className={`${styles["service-card-title"]} ${blogView && styles["service-card-title-blog"]} `}
      >
        {blogView ? "Category" : title}
      {blogView && <span className={` ${styles["service-card-title-blog-date"]} `}>
          November 22, 2021
        </span>}
      </h3>

      <p className={styles["service-card-description"]}>{description}</p>
      {blogView ? (
        author
      ) : (
        <a href="#" className={styles["service-card-link"]}>
          Explore page{" "}
          <SVGViewer
            iconTitle="arrow-right"
            arrowRightColor={computedStyle.getPropertyValue(
              "--template-deep-blue"
            )}
          />
        </a>
      )}
    </div>
  );
};

export default ServiceCard;
