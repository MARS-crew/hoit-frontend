interface ITechBadgeProps {
  count: number;
  tech: string;
}

export const TechBadge = ({ count, tech }: ITechBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    {count} | {tech}
  </span>
); 