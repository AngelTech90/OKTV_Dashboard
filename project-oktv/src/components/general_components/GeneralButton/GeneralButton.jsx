//First we will import react-router-dom modules:
import styles from './GeneralButton.module.css'
import 'bootstrap'

export default function GeneralButton({buttonContent, width}){

    return(
        <button style={{width}} className = {styles.button}>
            {buttonContent}
        </button>
    )
}
