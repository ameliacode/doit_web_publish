import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "routes/Home";
import Header from "components/Header";
import Footer from "components/Footer";

const AppRouter = () => {
    return(
        <Router>  
            <Header/>
            <Routes>
                <Route path = "/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default AppRouter;