import { UserCard } from '../molecules/UserCard';
import { IUser } from '@/types/user';

interface IRecommendedProjectsListProps {
  users: IUser[];
  onUserClick: (userId: string) => void;
}

export const RecommendedProjectsList = ({ users, onUserClick }: IRecommendedProjectsListProps) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onUserClick(user.id)}
        />
      ))}
    </div>
  );
};
 