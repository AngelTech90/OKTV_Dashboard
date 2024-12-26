//First we will import react-router-dom modules:
import './CreateAccountPage.css'
import 'bootstrap'

//* Main components:
import HomePageHeader from "../../components/main_components/HomepageHeader/HomepageHeader"
import CreateAccountForm from '../../components/main_components/CreateAccountForm/CreateAccountForm'
import HomepageFooter from '../../components/main_components/HomepageFooter/HomepageFooter'

//* general components:
import MotherBox from "../../components/general_components/MotherBox/MotherBox"

export default function CreateAccountPage(){

    const motherBoxBackground = 'white';

    return(
            <MotherBox backgroundColor={motherBoxBackground}>
                <HomePageHeader/>
                <CreateAccountForm/>
                <HomepageFooter/>
            </MotherBox>
    )
}