import { TransitionGroup, CSSTransition } from "react-transition-group";

const RouteTransition = ({location, children}) => {
    const pathname = location.pathname;

    return(
        <TransitionGroup>
            <CSSTransition 
            key={pathname}
            timeout={300}
            classNames="slide">
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
} 

export default RouteTransition;