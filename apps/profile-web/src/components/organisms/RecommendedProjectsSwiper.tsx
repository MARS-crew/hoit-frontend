import { motion } from 'framer-motion';
import { UserCard } from '../molecules/UserCard';
import { IUser } from '@/types/user';
import { MOTION } from '@/constants/motion';

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
    const isSwipeDown = swipe > MOTION.SWIPE.THRESHOLD || velocity > MOTION.SWIPE.VELOCITY;
    const isSwipeUp = swipe < -MOTION.SWIPE.THRESHOLD || velocity < -MOTION.SWIPE.VELOCITY;

    if (isSwipeUp && currentIndex < users.length - 1) {
      onIndexChange(currentIndex + 1);
      onDetailChange(false);
    } else if (isSwipeDown && currentIndex > 0) {
      onIndexChange(currentIndex - 1);
      onDetailChange(false);
    }
  };

  const handleHorizontalSwipe = (swipe: number, userId: string) => {
    if (swipe < -MOTION.SWIPE.THRESHOLD) {
      onDetailChange(true);
      onUserSelect(userId);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {users.map((user, index) => (
        <motion.div
          key={user.id}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
          initial={{ y: index === 0 ? 0 : '100%' }}
          animate={{ 
            y: `${(index - currentIndex) * 100}%`,
            scale: index === currentIndex ? 1 : 0.95,
          }}
          transition={{
            type: 'spring',
            ...MOTION.SPRING
          }}
          drag="y"
          dragDirectionLock
          dragConstraints={{
            top: 0,
            bottom: 0
          }}
          dragElastic={MOTION.DRAG.elastic}
          onDragEnd={(_, info) => handleVerticalSwipe(info.offset.y, info.velocity.y)}
        >
          <motion.div
            className="h-full mx-4"
            animate={{ x: showDetail ? '-100%' : 0 }}
            transition={{ type: 'spring', ...MOTION.SPRING }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={MOTION.DRAG.elastic}
            onDragEnd={(_, info) => handleHorizontalSwipe(info.offset.x, user.id)}
          >
            <UserCard user={user} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}; 