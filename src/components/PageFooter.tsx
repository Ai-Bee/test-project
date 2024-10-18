import React from 'react';
import styles from '../styles/Footer.module.css';
import SVGViewer from './SVGViewer';

const PageFooter = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['footer-content']}>
          <div className={styles['brand-info']}>
            <div className={styles['logo']}>
              <SVGViewer iconTitle='boldo-icon' boldoIconBlue/>
              Boldo
            </div>
            <p className={styles['description']}>
              Social media validation business model
              canvas graphical user interface launch
              party creative facebook iPad twitter.
            </p>
            <p className={styles['copyright']}>All rights reserved.</p>
          </div>
          
          <div className={styles['footer-links']}>
            <div className={styles['link-column']}>
              <h3>Landings</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
            
            <div className={styles['link-column']}>
              <h3>Company</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li>
                  <a href="#" style={{display: 'inline-flex'}}>
                    Careers <span className={styles['badge']}>Hiring</span>
                  </a>
                </li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
            
            <div className={styles['link-column']}>
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;