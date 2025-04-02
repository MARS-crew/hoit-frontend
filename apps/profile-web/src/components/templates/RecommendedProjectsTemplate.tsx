import { RecommendedProjectsList } from '../organisms/RecommendedProjectsList';
import { RecommendedProjectsSwiper } from '../organisms/RecommendedProjectsSwiper';
import { IUser } from '@/types/user';
import { Z_INDEX } from '@/constants/zIndex';

interface IRecommendedProjectsTemplateProps {
  users: IUser[];
  currentIndex: number;
  showDetail: boolean;
  isDesktop: boolean;
  onIndexChange: (newIndex: number) => void;
  onDetailChange: (show: boolean) => void;
  onUserSelect: (userId: string) => void;
}

export const RecommendedProjectsTemplate = ({
  users,
  currentIndex,
  showDetail,
  isDesktop,
  onIndexChange,
  onDetailChange,
  onUserSelect,
}: IRecommendedProjectsTemplateProps) => {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* PC 뷰 */}
      <div className="hidden md:flex md:flex-col md:h-full">
        <div className="flex-1 overflow-auto p-6">
          <RecommendedProjectsList 
            users={users}
            onUserClick={onUserSelect}
          />
        </div>
      </div>

      {/* 모바일 뷰 */}
      <div className="md:hidden flex flex-col h-full">
        <div className="flex-1 overflow-hidden">
          <RecommendedProjectsSwiper
            users={users}
            currentIndex={currentIndex}
            showDetail={showDetail}
            onIndexChange={onIndexChange}
            onDetailChange={onDetailChange}
            onUserSelect={onUserSelect}
          />
        </div>
      </div>
    </div>
  );
}; 