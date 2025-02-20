import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

const navItems = ['/recommended', '/projects', '/chats', '/search', '/profile']

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentIndex = navItems.indexOf(location.pathname)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < navItems.length - 1) {
        navigate(navItems[currentIndex + 1])
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(navItems[currentIndex - 1])
      }
    },
    trackMouse: false,
    preventScrollOnSwipe: true,
    delta: 50,
    swipeDuration: 500,
    touchEventOptions: { passive: false },
  })

  return (
    <div {...handlers} className="touch-pan-y absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: currentIndex === -1 ? 0 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 