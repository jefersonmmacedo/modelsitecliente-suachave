import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Properties } from '../pages/Properties/Properties';
import { Property } from '../pages/Property/Property';
import { Brokers } from '../pages/Brokers/Brokers';
import { Simulator } from '../pages/Simulator/Simulator';
import { ComingSoon } from '../pages/CommingSoom/ComingSoon';
import { Contact } from '../pages/Contact/Contact';
import { UploadPage } from '../pages/UploadPage/UploadPage';
import { NotFound } from '../pages/NotFound/NotFound';
import { Avaluation } from '../pages/Avaluation/Avaluation';
import { About } from '../pages/About/About';


function Router () {
const Local = localStorage.getItem("suachave");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/entrar"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="*" element={<NotFound />}/>
            <Route path="/home" element={<ComingSoon />}/>
            <Route path="/up" element={<UploadPage />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/imoveis/:status" element={<Properties />}/>
            <Route path="/imovel/:id" element={<Property />}/>
            <Route path="/corretores" element={<Brokers />}/>
            <Route path="/financiamento" element={<Simulator />}/>
            <Route path="/avaliacao" element={<Avaluation />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/faleconosco" element={<Contact />}/>
            </Routes>
           
    )
}

export {Router}