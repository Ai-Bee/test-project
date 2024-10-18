import { useState } from 'react'
import styles from '../styles/TopNavigation.module.css'
import BaseButton from './BaseButton';
import SVGViewer from './SVGViewer';

export default function TopNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>
        <SVGViewer iconTitle='boldo-icon' boldoIconGreen />
        <p>Boldo</p>
        </div>
    <nav className={isMobileMenuOpen ? `${styles['nav-links']} ${styles.open}` : `${styles['nav-links']}`}>
      <a href="#product">Product</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <BaseButton label="Log In" variant="filled-white" onClick={() => null} />
      </nav>
    <div className={styles.hamburger} onClick={toggleMobileMenu}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  </nav>

  )
}
