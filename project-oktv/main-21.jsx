import { BrowserRouter, Routes, Route  } from "react-router-dom";

//* Importamos nuestros componentes:
import CreateAccountPage from './src/pages/CreateAccountPage/CreateAccountPage';


export default function JosePedro(){
    return(

        <BrowserRouter>
            <Routes>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
                <Route element={CreateAccountPage} path="josesito"></Route>
            </Routes>
        </BrowserRouter>

    )
}

Routes === ListaDeRutas // Depende de importar el componente completo