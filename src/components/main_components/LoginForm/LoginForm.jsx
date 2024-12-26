// Import CSS module
import styles from './LoginForm.module.css';
import 'bootstrap';

export default function LoginForm({ children }) {
  return (
    <div className={styles['form-card']}>
      <h1 className={styles['form-header']}>OKTV Dashboard</h1>

      <h2 className={styles['form-subtitle']}>SIGN IN</h2>

      <p className={styles['form-description']}>
        Enter your credentials to access your account
      </p>

      <form className={styles.form}>
        {children}
      </form>

      <div className={styles['form-footer']}>
        <p>
          Forgot your password?{' '}
          <a href="/reset-password" className={styles['reset-link']}>
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
}
