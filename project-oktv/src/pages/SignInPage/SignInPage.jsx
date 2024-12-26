//First we will import react-router-dom modules, our css module and bootstrap module:
import './SignInPage.module.css'
import 'bootstrap'

//* we will import our general components:
import MotherBox from '../../components/general_components/MotherBox/MotherBox'
import GeneralButton from '../../components/general_components/GeneralButton/GeneralButton'
import CreateAccountInput from '../../components/general_components/CreateAccountInput/CreateAccountInput'

//* We will import our main components:
import LoginForm from '../../components/main_components/LoginForm/LoginForm'


export default function SignInPage(){

    //* MoitherBox styles:
    const motherBoxHeight = '100vh'
    const motherBoxBackground = '#3b82f6'

    //* General button styles:
    const buttonWidth = '250px'


    return(
        <MotherBox height={motherBoxHeight} backgroundColor={motherBoxBackground}>
            <LoginForm>
                <CreateAccountInput type="email" placeholder="Email" />
                <CreateAccountInput type="password" placeholder="Password" />
                <GeneralButton width={buttonWidth} buttonContent="Sign In" />
            </LoginForm>
        </MotherBox>
    )
}

