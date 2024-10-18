import styles from '../../styles/Review.module.css';
import ProfileCard from '../ProfileCard';
import SVGViewer from '../SVGViewer';
import Review from './Review';
import albus from '../../resources/dumbledore.png'
import severus from '../../resources/snape.png'
import potter from '../../resources/harry.png'

export default function ReviewSection() {
  const cardContents = [
   { description: 'Buyer buzz partner network disruptive non-disclosure agreement business',
    name: "Albus Dumbledore",
    imageUrl: albus,
    post: "Manager @ Howarts"},
    { description: 'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
      name: "Severus Snape",
      imageUrl: severus,
      post: "Manager @ Slytherin"},
      { description: 'Release facebook responsive web design business model canvas seed money monetization.',
        name: "Harry Potter",
        imageUrl: potter,
        post: "Team Leader @ Gryffindor"}

  ]
  return (
    <section className={`${styles["reviews-section"]}`}>
      <div className={styles['review-section-top']}>
      <p className={styles["reviews-section-subtitle"]}>An enterprise template to ramp up your company website</p>
      <div className={styles["reviews-section-nav"]}>
        <button className={styles["reviews-section-nav-button"]}><SVGViewer iconTitle='arrow-right' /> </button>
        <button className={styles["reviews-section-nav-button"]}><SVGViewer iconTitle='arrow-right' /></button>
      </div>
      </div>
    <div className={styles["reviews-card-container"]}>
      {
        cardContents.map((card, index) => (
          <Review key={index}
            author={<ProfileCard name={card.name} role={card.post} imgString={card.imageUrl}/>}
            description={card.description}
          />
        ))
      }
    </div>
  </section>
  )
}
