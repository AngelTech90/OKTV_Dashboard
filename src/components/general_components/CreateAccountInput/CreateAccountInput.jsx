//First we will import react-router-dom modules:
import styles from './CreateAccountInput.module.css'
import 'bootstrap'

export default function CreateAccountInput({type, placeholder}){

    return(
        <input
                type={type}
                placeholder={placeholder}
                className={styles["form-input"]}
        />
    )
}

