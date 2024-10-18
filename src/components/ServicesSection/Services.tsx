import React from 'react';
import img1 from '../../resources/image01.png'
import img2 from '../../resources/image02.png'
import img3 from '../../resources/image03.png'
import ServiceCard from './ServiceCard';
import styles from '../../styles/ServicesSection.module.css'

const Services: React.FC = () => {
  return (
    <section className={`${styles["service-section"]}`}>
      <h2 className={styles["service-section-title"]}>Our Services</h2>
      <p className={styles["service-section-subtitle"]}>Handshake infographic mass market <br/> crowdfunding iteration.</p>
      <div className={styles["service-card-container"]}>
        <ServiceCard
          title="Cool feature title"
          description="Learning curve network effects return on investment."
          imageUrl={img1}
        />
        <ServiceCard
          title="Even cooler feature"
          description="Learning curve network effects return on investment."
          imageUrl={img2}
        />
        <ServiceCard
          title="Cool feature title"
          description="Learning curve network effects return on investment."
          imageUrl={img3}
        />
      </div>
    </section>
  );
};

export default Services;
