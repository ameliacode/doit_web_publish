import {BrowserRouter as Router, Route, Routes, useNavigate, useLocation} from "react-router-dom";
import Home from "routes/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import { useState } from "react";
import Company from "routes/Company";
import RouteTransition from "./RouteTransition";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Books from "routes/Books";
import FAQ from "routes/FAQ";
import Contact from "routes/Contact";


const AppRouter = () => {


    return(
        <Router>  
            <Header/>
                <Routes timeout={300} classNames="slide">
                    <Route path = "/" element={<Home/>}/>
                    <Route path = "/company"  element={<Company/>}/>
                    <Route path = "/books" element={<Books/>}/>
                    <Route path = "/faq" element={<FAQ/>}/>
                    <Route path = "/contact" element={<Contact/>}/>
                </Routes>
            <Footer/>
        </Router>
    );
}

export default AppRouter;