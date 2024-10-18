import WhatWeDo1 from './WhatWeDo1';
import styles from '../../styles/WhatWeDoSection.module.css'
import manOnPhone from '../../resources/man-on-phone.png'
import ladyOnPhone from '../../resources/lady-on-phone.png'

const WhatWeDoSection = () => {
    const title = "We connect our customers with the best, and help them keep up-and stay open.";
    const points = [
        "We connect our customers with the best.",
        "Advisor success customer launch party.",
        "Business-to-consumer long tail."
      ] 
  return (
    <div className={styles['parent-container']}>
      <WhatWeDo1
        imageUrl={manOnPhone}
        altText="Person on phone"
        {...{title}}
        {...{points}}
        buttonText="Start now"
      />

      <WhatWeDo1
        imageUrl={ladyOnPhone}
        reversed
        altText="Another person"
        {...{title}}
        {...{points}}
        buttonText="Learn more"
      />
    </div>
  );
};

export default WhatWeDoSection;
