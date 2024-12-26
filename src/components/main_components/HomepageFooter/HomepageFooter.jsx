// Import CSS module
import styles from './HomepageFooter.module.css';

export default function HomepageFooter() {
    return (
    <footer className={styles.footer}>
        <div className={styles['footer-content']}>
            <span className={styles['footer-left']}>OKTV Company</span>
            <span className={styles['footer-right']}>
                OKTV Company, 2024 © All Rights Reserved
            </span>
        </div>
    </footer>
    );
}

    