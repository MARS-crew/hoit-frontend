interface IPreferenceBadgeProps {
  preference: string;
}

export const PreferenceBadge = ({ preference }: IPreferenceBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    {preference}
  </span>
); 