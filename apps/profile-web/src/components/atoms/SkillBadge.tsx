interface ISkillBadgeProps {
  skill: string;
}

export const SkillBadge = ({ skill }: ISkillBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    {skill}
  </span>
); 