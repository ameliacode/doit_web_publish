import { createRef } from "react";
import {
    useLocation,
    useOutlet
} from "react-router-dom";
import Home from "routes/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import { useState } from "react";
import Company from "routes/Company";
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";
import Books from "routes/Books";
import FAQ from "routes/FAQ";
import Contact from "routes/Contact";

export const routes = [
    { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
    { path: '/company', name: 'Comapny', element: <Company />, nodeRef: createRef() },
    { path: '/books', name: 'Books', element: <Books />, nodeRef: createRef() },
    { path: '/faq', name: 'FAQ', element: <FAQ />, nodeRef: createRef() },
    { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef() },
  ]

const AppRouter = () => {

    const location = useLocation()
    const currentOutlet = useOutlet()
    const { nodeRef } =
      routes.find((route) => route.path === location.pathname) ?? {}

    return(
        <>
        <Header/>
        <SwitchTransition>
            <CSSTransition
             key={location.pathname}
             nodeRef={nodeRef}
             timeout={300}
             classNames="page"
             unmountOnExit>
                {(state) => (
                <div ref={nodeRef} className="page h-full">
                    {currentOutlet}
                </div>
                )}
            </CSSTransition>
        </SwitchTransition>
        <Footer/>
        </>
    );
}

export default AppRouter;