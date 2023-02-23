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

const AppRouter = () => {
    const location = useLocation();
    
    return(
        <>
            <Routes>
                <Route path="/" element={<Home location={location}/>}/>
                <Route path="/company" element={<Company location={location}/>}/>
                <Route path="/books" element={<Books location={location}/>}/>
                <Route path="/faq" element={<FAQ location={location}/>}/>
                <Route path="/contact" element={<Contact location={location}/>}/>
            </Routes>
        </>
    );
}

export default AppRouter;

// export const routes = [
//     { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
//     { path: '/company', name: 'Comapny', element: <Company />, nodeRef: createRef() },
//     { path: '/books', name: 'Books', element: <Books />, nodeRef: createRef() },
//     { path: '/faq', name: 'FAQ', element: <FAQ />, nodeRef: createRef() },
//     { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef() },
//   ]

{/* <>
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
</> */}