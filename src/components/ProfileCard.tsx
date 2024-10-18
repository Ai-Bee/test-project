import styles from '../styles/Home.module.css'

interface ProfileCardProps {
    name: string;
    role?: string;
    partial?: boolean;
  imgString: string;
}

export default function ProfileCard({ name, role, partial, imgString }: ProfileCardProps) {
  return (
    <div className={styles['profile-card']}>
  <img
    src={imgString}
    alt="Profile"
    className={styles['profile-image']}
  />
  <div className={styles['user-info']}>
    <h2 className={styles['user-name']}>{ name }</h2>
    <p style={{display: partial ? 'none' : 'flex'}} className={styles['user-role']}> {role} </p>
  </div>
</div>

  )
}
