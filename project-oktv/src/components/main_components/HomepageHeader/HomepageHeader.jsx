//First we will import react-router-dom modules:
// Import CSS module
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
    return (
        <nav className={styles.navbar}>
        {/* Logo Section */}
        <div className={styles.logo}>
            <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className={styles['logo-img']}
            />
        </div>

        {/* Navigation Links */}
        <div className={styles['nav-links']}>
            <a href="#home" className={styles['nav-item']}>
            Home
            </a>
            <a href="#contact" className={`${styles['nav-item']} ${styles.highlight}`}>
            Contact Us
            </a>
            <a href="#signin" className={styles['signin-btn']}>
            Sign in
        </a>
        </div>
    </nav>
    );    
}
