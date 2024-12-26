//First we will import react-router-dom modules:
import styles from './HomeDashboardPage.module.css'
import 'bootstrap'

//* We import our main components:
import OperatorsContainer from '../../components/main_components/OperatorsContainer/OperatorsContainer'

//* We import our general components:
import SidebarMenu from '../../components/general_components/SidebarMenu/SidebarMenu'
import GeneralButton from '../../components/general_components/GeneralButton/GeneralButton'

export default function HomeDashboardPage(){

    return(
        <div className={styles.dashboard}>
        <SidebarMenu />
        <div className={styles.content}>
          <header className={styles.header}>
            <h1>Welcome, Admin!</h1>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />

            <GeneralButton className={styles["addOperatorBtn"]} buttonContent="Add Operator"/>

          </header>
          <OperatorsContainer />
        </div>
    </div>
    )
}

