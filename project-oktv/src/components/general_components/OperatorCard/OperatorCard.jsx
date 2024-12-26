//First we will import react-router-dom modules:
import styles from './OperatorCard.module.css'
import 'bootstrap'
import { FiRadio } from "react-icons/fi";

export default function OperatorCard({operatorName}){

    return(
        <div className={styles.card}>
            <div className={styles.icon}>
                <FiRadio size={60} />
            </div>
            <p className={styles.name}>{operatorName}</p>
        </div>
    )
}

