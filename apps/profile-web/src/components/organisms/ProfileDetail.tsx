import { Link } from 'react-router-dom';
import { Text } from '../atoms/Text';
import { Badge } from '../molecules/Badge';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div>
    <Text variant="body-lg" weight="medium" className="mb-2">
      {title}
    </Text>
    {children}
  </div>
);

interface ProfileDetailProps {
  onClose?: () => void;
  userName: string;
}

export const ProfileDetail = ({ onClose, userName }: ProfileDetailProps) => {
  return (
    <div className="space-y-6">
      <Section title="기본 정보">
        <Text variant="body-md" color="secondary">홀길동</Text>
        <Text variant="body-md" color="secondary" className="block">010-9076-3143</Text>
        <Text variant="body-md" color="secondary" className="block">2001.01</Text>
        <div className="flex gap-2 mt-2">
          <Badge variant="default" size="sm">학생</Badge>
          <Badge variant="default" size="sm">직장</Badge>
        </div>
      </Section>

      <Section title="소개">
        <Text variant="body-md" color="secondary" className="whitespace-pre-line">
          {`안녕 하세요.
          신입 웹 개발자 홀길동 입니다.
          희망하는 직무는 프론트 엔드, 백 엔드, PM부분 직무
          희망하고 공부 하고 있습니다. 잘부탁 드립니다.`}
        </Text>
      </Section>

      <Section title="URL">
        <div className="grid grid-cols-2 gap-4">
          <Link to="#" className="text-primary-600 hover:text-primary-700 hover:underline">네이버</Link>
          <Link to="#" className="text-primary-600 hover:text-primary-700 hover:underline">네이버</Link>
          <Link to="#" className="text-primary-600 hover:text-primary-700 hover:underline">네이버</Link>
          <Link to="#" className="text-primary-600 hover:text-primary-700 hover:underline">네이버</Link>
        </div>
      </Section>

      <Section title="경력">
        <div className="space-y-2">
          <Text variant="body-md" color="secondary" className="block">동양 2024.01 ~ 2024.12</Text>
          <Text variant="body-md" color="secondary" className="block">마스외전 2025.01 ~ 재직중</Text>
        </div>
      </Section>

      <Section title="수상이력">
        <div className="space-y-2">
          <Text variant="body-md" color="secondary">자격증 연계 금상 2024.01</Text>
        </div>
      </Section>

      <Section title="자격증">
        <div className="space-y-2">
          <Text variant="body-md" color="secondary" className="block">정보처리기사 2024.01</Text>
          <Text variant="body-md" color="secondary" className="block">DB 2024.12</Text>
        </div>
      </Section>

      <Section title="활동 이력">
        <div className="space-y-2">
          <Text variant="body-md" color="secondary">자격증 연계 2024.01 ~ 2024.12</Text>
        </div>
      </Section>

      <Section title="백 엔드, 개발 PL, 프로젝트 PM">
        <Text variant="body-md" color="secondary">
          프로젝트의 전반적인 이해도가 높으며, 팀원들과의 원활한 소통으로 
          프로젝트를 성공적으로 이끌어낸 경험이 있습니다.
        </Text>
      </Section>
    </div>
  );
}; 