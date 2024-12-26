//First we will import react-router-dom modules:
import styles from './OperatorsContainer.module.css'
import 'bootstrap'

//* We import our general components:
import OperatorCard from '../../general_components/OperatorCard/OperatorCard'
    
export default function OperatorsContainer(){

    const operators = [
        'Operator Name 1',
        'Operator Name 2',
        'Operator Name 3',
        'Operator Name 4',
        'Operator Name 5',
        'Operator Name 6',
        'Operator Name 7',
        'Operator Name 8',
        'Operator Name 9',
    ];
    
        return (
            <div className={styles.container}>
            {operators.map((name, index) => (
                <OperatorCard key={index} operatorName={name} />
            ))}
            </div>
        )
}
    
