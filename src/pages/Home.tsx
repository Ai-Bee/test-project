import BaseButton from "../components/BaseButton";
import PageFooter from "../components/PageFooter";
import ReviewSection from "../components/Reviews/ReviewSection";
import Services from "../components/ServicesSection/Services";
import TopNavigation from "../components/TopNavigation";
import WhatWeDoSection from "../components/WhatWeDo/WhatWeDoSection";
import styles from '../styles/Home.module.css'
import officeSpace from '../resources/office-space.png'
import SVGViewer from "../components/SVGViewer";
import chart1 from '../resources/ffs.png'
import chart2 from '../resources/ininn.png'
import chart3 from '../resources/9898.png'
import boldo from '../resources/boldopng.png'
import presto from '../resources/prestopng.png'
import BlogView from "../components/BlogSection";

export default function Home() {

  
  return (
    <div className={styles.home}>
    <div className={styles.container}>
    <TopNavigation/>
      <section className={styles.jumbotron}>
        <div className={styles['jumbotron-content']}>
          <h1>Save time by building fast with Boldo Template</h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad partnership. 
            First mover advantage innovator success deployment non-disclosure.
          </p>
          <div className={styles["cta-buttons"]}>
          <BaseButton label="Buy template" variant="green" onClick={() => null} />
          <BaseButton label="Explore" variant="filled-blue" onClick={() => null} />
          </div>
        </div>
        <div className={styles["jumbotron-image"]}>
          <img src={chart1} alt="chart1"/>
          <div className={styles['jumbotron-img-row']}>
          <img src={chart2} alt="chart2"/>
          <img src={chart3} alt="chart3"/>

          </div>
        </div>


      </section>
      <div className={styles["logo-section"]}>
  <div className={styles["logo-container"]}>
    <img src={boldo} alt="Boldo logo" className={styles.logo} />
    <img src={presto} alt="Presto logo" className={styles.logo} />
    <img src={boldo} alt="Boldo logo" className={styles.logo} />
    <img src={presto} alt="Presto logo" className={styles.logo} />
    <img src={boldo} alt="Boldo logo" className={styles.logo} />
    <img src={presto} alt="Presto logo" className={styles.logo} />
  </div>
</div>
      <Services/>
      <WhatWeDoSection/>
    <ReviewSection/>
    <section className={styles['section-six']}>
      <img alt="office space" src={officeSpace} className=""/>
      <div>
        <h6>
        We connect our customers with the best, and help them keep up-and stay open.
        </h6>
        <div className={styles['col-two']}>
          <div className={styles['random-row']}>
            <p>We connect our customers with the best?</p>
            <SVGViewer iconTitle='caret-down'/>
          </div>
          <div className={styles['random-row']}>
            <p>Android research & development rockstar?</p>
            <SVGViewer iconTitle='caret-down'/>
          </div>
        </div>
      </div>
    </section>
    <BlogView/>
    <div className={styles['section-eight-container']}>
    <div className={styles['section-eight']}>
      <h5>
      An enterprise template to ramp up your company website
      </h5>
      <div>
        <input placeholder="Your email address" />
        <BaseButton variant="green" onClick={() => null} label="Start now" />
      </div>
    </div>
</div>

      {/* <div className={styles["footer"]}>
        <div className={styles["footer-logo"]}>
          <span>Boldo</span>
          <span>Presto</span>
        </div>
      </div> */}
      <PageFooter/>

    </div>
    </div>


  )
}
