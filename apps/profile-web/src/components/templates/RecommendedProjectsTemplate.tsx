import { RecommendedProjectsList } from '../organisms/RecommendedProjectsList';
import { RecommendedProjectsSwiper } from '../organisms/RecommendedProjectsSwiper';
import { IUser } from '@/types/user';

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
    <div className="md:space-y-6">
      {/* PC 뷰 */}
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold mb-6">추천 프로젝트</h1>
        <RecommendedProjectsList 
          users={users}
          onUserClick={onUserSelect}
        />
      </div>

      {/* 모바일 뷰 */}
      <div className="md:hidden fixed inset-0 bg-white">
        <div className="fixed top-0 left-0 right-0 z-10 bg-white">
          <h1 className="text-2xl font-bold p-4 border-b">추천 프로젝트</h1>
        </div>
        <div className="absolute inset-0 top-[60px] pt-4 pb-24">
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