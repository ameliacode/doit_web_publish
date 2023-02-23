import { createRef } from "react";
import {
    Route,
    Routes,
    useLocation,
    useOutlet
} from "react-router-dom";
import Home from "routes/Home";
import Company from "routes/Company";
import Books from "routes/Books";
import FAQ from "routes/FAQ";
import Contact from "routes/Contact";
import { AnimatePresence } from "framer-motion";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Header from "./Header";
import Footer from "./Footer";

const AppRouter = () => {
    const location = useLocation();
    // const currentOutlet = useOutlet()
    // const { nodeRef } =
    //   routes.find((route) => route.path === location.pathname) ?? {}
    
      return(
        <AnimatePresence >
        <Routes>
            <Route path="/" exact={true} element={<Home location={location}/>}/>
            <Route path="/company" exact={true} element={<Company location={location}/>}/>
            <Route path="/books" exact={true} element={<Books location={location}/>}/>
            <Route path="/faq" exact={true} element={<FAQ location={location}/>}/>
            <Route path="/contact" exact={true} element={<Contact location={location}/>}/>
        </Routes>
        </AnimatePresence> 
    );
}

export default AppRouter;

export const routes = [
    { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
    { path: '/company', name: 'Comapny', element: <Company />, nodeRef: createRef() },
    { path: '/books', name: 'Books', element: <Books />, nodeRef: createRef() },
    { path: '/faq', name: 'FAQ', element: <FAQ />, nodeRef: createRef() },
    { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef() },
  ]



{/* <Header/>
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
<Footer/> */}