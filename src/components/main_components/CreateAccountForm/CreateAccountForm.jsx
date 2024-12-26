// Importing necessary modules:
import styles from './CreateAccountForm.module.css'; // Import CSS module
import 'bootstrap';

//* General components:
import CreateAccountInput from '../../general_components/CreateAccountInput/CreateAccountInput';
import GeneralButton from '../../general_components/GeneralButton/GeneralButton';

export default function CreateAccountForm() {
  return (
    <div className={styles['form-container']}> {/* Updated to reference CSS module */}
      <form className={styles['register-form']}> {/* Updated to reference CSS module */}
        <h2 className={styles['form-title']}>Create Account</h2> {/* Updated to reference CSS module */}
        <CreateAccountInput />
        <CreateAccountInput />
        <CreateAccountInput />
        <CreateAccountInput />
        <CreateAccountInput />
        <GeneralButton buttonContent={'Create account'}/>
      </form>
    </div>
  );
}
