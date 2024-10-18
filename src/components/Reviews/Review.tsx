import styles from '../../styles/Review.module.css'

interface ReviewProps {
    description: string;
    author?: React.ReactNode
  }

export default function Review({ description, author }: ReviewProps) {
  return (
    <div className={styles['review-card']}>
       <p className={styles["review-card-description"]}>"{description}"</p>
      <div>
       { author }
      </div>
    </div>
  )
}
