import img1 from '../resources/image01.png'
import img3 from '../resources/image03.png'
import ladyOnPhone from '../resources/lady-on-phone.png'
import styles from '../styles/ServicesSection.module.css'
import BaseButton from './BaseButton';
import monica from '../resources/friend1.png'
import rachel from '../resources/friend2.png'
import chandler from '../resources/friend3.png'
import ProfileCard from './ProfileCard';
import ServiceCard from './ServicesSection/ServiceCard';

const BlogView: React.FC = () => {
  return (
    <section className={`${styles["service-section"]} ${styles['service-section-blog-view']} `}>
      <h2 className={styles["service-section-title"]}>Our Blog</h2>
      <p className={styles["service-section-subtitle"]}>Value proposition accelerator product <br/> management venture</p>
      <div className={styles["service-card-container"]}>
        <ServiceCard
          title="Cool feature title"
          blogView
          author={<ProfileCard name={'Chandler Bing'} imgString={monica}/>}
          description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          imageUrl={img1}
        />
        <ServiceCard
          title="Even cooler feature"
          blogView
          author={<ProfileCard name={'Rachel Green'} imgString={chandler}/>}

          description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          imageUrl={ladyOnPhone}
        />
        <ServiceCard
          title="Cool feature title"
          author={<ProfileCard name={'Monica Geller'} imgString={rachel}/>}
          description="Beta prototype sales iPad gen-z marketing network effects value proposition"
          blogView
          imageUrl={img3}
        />
        <div className={styles['blog-see-more-btn']}>
        <BaseButton variant='filled-white' label='Load more' onClick={() => null} />
        </div>
      </div>
    </section>
  );
};

export default BlogView;