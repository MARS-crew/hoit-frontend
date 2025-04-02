import { motion, AnimatePresence } from 'framer-motion';
import { UserCard } from '../molecules/UserCard';
import { UserDetailCard } from '../molecules/UserDetailCard';
import { IUser } from '@/types/user';

interface IRecommendedProjectsSwiperProps {
  users: IUser[];
  currentIndex: number;
  showDetail: boolean;
  onIndexChange: (newIndex: number) => void;
  onDetailChange: (show: boolean) => void;
  onUserSelect: (userId: string) => void;
}

export const RecommendedProjectsSwiper = ({
  users,
  currentIndex,
  showDetail,
  onIndexChange,
  onDetailChange,
  onUserSelect,
}: IRecommendedProjectsSwiperProps) => {
  const handleVerticalSwipe = (swipe: number, velocity: number) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;
    
    const isSwipeUp = swipe < -swipeThreshold || velocity < -velocityThreshold;
    const isSwipeDown = swipe > swipeThreshold || velocity > velocityThreshold;

    if (isSwipeUp && currentIndex < users.length - 1) {
      onIndexChange(currentIndex + 1);
      onDetailChange(false);
    } else if (isSwipeDown && currentIndex > 0) {
      onIndexChange(currentIndex - 1);
      onDetailChange(false);
    }
  };

  const handleHorizontalSwipe = (swipe: number, velocity: number) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;
    
    const isSwipeLeft = swipe < -swipeThreshold || velocity < -velocityThreshold;
    const isSwipeRight = swipe > swipeThreshold || velocity > velocityThreshold;

    if (isSwipeLeft && !showDetail) {
      onDetailChange(true);
    } else if (isSwipeRight && showDetail) {
      onDetailChange(false);
    }
  };

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            className="absolute inset-0"
            initial={{ y: index === 0 ? 0 : '100%' }}
            animate={{ 
              y: `${(index - currentIndex) * 100}%`,
              scale: index === currentIndex ? 1 : 0.95,
            }}
            exit={{ y: '-100%' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40
            }}
            drag={showDetail ? false : "y"}
            dragDirectionLock
            dragConstraints={{
              top: 0,
              bottom: 0
            }}
            dragElastic={0.5}
            onDragEnd={(_, info) => handleVerticalSwipe(info.offset.y, info.velocity.y)}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ x: showDetail ? '-100%' : 0 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40
              }}
            >
              <UserCard
                user={user}
                onClick={() => onUserSelect(user.id)}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              initial={{ x: '100%' }}
              animate={{ x: showDetail ? 0 : '100%' }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40
              }}
              drag="x"
              dragDirectionLock
              dragConstraints={{
                left: 0,
                right: 0
              }}
              dragElastic={0.5}
              onDragEnd={(_, info) => handleHorizontalSwipe(info.offset.x, info.velocity.x)}
            >
              <UserDetailCard user={user} />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}; 