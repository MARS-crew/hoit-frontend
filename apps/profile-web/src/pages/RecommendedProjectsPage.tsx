import { useState } from 'react';
import { RECOMMENDED_USERS } from '@/constants/dummyData';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { RecommendedProjectsTemplate } from '@/components/templates/RecommendedProjectsTemplate';
import { BREAKPOINTS } from '@/constants/breakpoints';

export const RecommendedProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP);

  return (
    <RecommendedProjectsTemplate
      users={RECOMMENDED_USERS}
      currentIndex={currentIndex}
      showDetail={showDetail}
      isDesktop={isDesktop}
      onIndexChange={setCurrentIndex}
      onDetailChange={setShowDetail}
      onUserSelect={setSelectedUser}
    />
  );
}; 