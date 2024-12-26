
//First we will import react-router-dom modules:

import styles from './MotherBox.module.css'

import 'bootstrap'

export default function MotherBox({ children, backgroundColor, height }){

    return(
        <div className = {styles.motherBox} style={{backgroundColor, height}}>
            {children}
        </div>
    )
}
