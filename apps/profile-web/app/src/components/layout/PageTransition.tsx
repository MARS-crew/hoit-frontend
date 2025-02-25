import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { useState, useEffect } from 'react'

const navItems = ['/recommended', '/projects', '/chats', '/search', '/profile']

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentIndex = navItems.indexOf(location.pathname)
  const [prevIndex, setPrevIndex] = useState(currentIndex)

  useEffect(() => {
    setPrevIndex(currentIndex)
  }, [currentIndex])

  const direction = currentIndex > prevIndex ? 1 : -1

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
    <div {...handlers} className="relative min-h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          initial={{ y: 50 * direction, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50 * direction, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 