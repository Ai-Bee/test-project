import React from 'react';
import chart from '../../resources/chart1.png'
import pieChart from '../../resources/PieGraphic.png'
import styles from '../../styles/WhatWeDoSection.module.css'
// import BaseButton from '../BaseButton';

interface WhatWeDo1Props {
  imageUrl: string;
  reversed?: boolean;
  altText: string;
  title: string;
  points: string[];
  buttonText: string;
}

const WhatWeDo1: React.FC<WhatWeDo1Props> = ({
  imageUrl,
  reversed=false,
  altText,
  title,
  points,
//   buttonText,
}) => {
  return (
    <section className={`${styles["section-with-image"]} ${reversed && styles["section-with-image-reversed"]} `}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={altText} className={styles["section-image"]} />
        <div className={styles["chart-overlay"]}>
          <img src={reversed ? pieChart : chart} alt="chart" className={styles["card-image-inset"]} />
        </div>
      </div>
      <div className={styles["content-container"]}>
        <h2>{title}</h2>
        <ul className={styles["points-list"]}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
                  {/* <BaseButton label={buttonText} variant='filled-blue' onClick={() => null} /> */}

        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo1;
