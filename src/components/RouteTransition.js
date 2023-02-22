import { TransitionGroup, CSSTransition } from "react-transition-group";
import { motion } from "framer-motion"

export const RouteTransition = (props) => {
    return(
        <motion.div
        {...props}
        initial={{ opacity: 0, x: '50vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-50vw' }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        transition={{ type: 'tween', duration: .3 }}
    >
        {props.children}
    </motion.div>
    )
} 

