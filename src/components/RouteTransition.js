import { TransitionGroup, CSSTransition } from "react-transition-group";
import { motion } from "framer-motion"

export const RouteTransition = (props) => {
    return(
        <motion.div
        initial={{ opacity: 1, x: '-100%', y: '-2%' }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: .8 }}
    >
        {props.children}
    </motion.div>
    )
} 

