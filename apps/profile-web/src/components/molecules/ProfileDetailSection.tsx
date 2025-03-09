import { Link } from 'react-router-dom';
import { Badge } from '../atoms/Badge';

interface ProfileDetailSectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: ProfileDetailSectionProps) => (
  <div>
    <h3 className="font-medium text-body-lg text-secondary-900 mb-2">{title}</h3>
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
        <p className="text-body-md text-secondary-600">홀길동</p>
        <p className="text-body-md text-secondary-600">010-9076-3143</p>
        <p className="text-body-md text-secondary-600">2001.01</p>
        <div className="flex gap-2 mt-2">
          <Badge variant="default" size="sm">학생</Badge>
          <Badge variant="default" size="sm">직장</Badge>
        </div>
      </Section>

      <Section title="소개">
        <p className="text-body-md text-secondary-600 whitespace-pre-line">
          안녕 하세요.
          신입 웹 개발자 홀길동 입니다.
          희망하는 직무는 프론트 엔드, 백 엔드, PM부분 직무
          희망하고 공부 하고 있습니다. 잘부탁 드립니다.
        </p>
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
          <p className="text-body-md text-secondary-600">동양 2024.01 ~ 2024.12</p>
          <p className="text-body-md text-secondary-600">마스외전 2025.01 ~ 재직중</p>
        </div>
      </Section>

      <Section title="수상이력">
        <div className="space-y-2">
          <p className="text-body-md text-secondary-600">자격증 연계 금상 2024.01</p>
        </div>
      </Section>

      <Section title="자격증">
        <div className="space-y-2">
          <p className="text-body-md text-secondary-600">정보처리기사 2024.01</p>
          <p className="text-body-md text-secondary-600">DB 2024.12</p>
        </div>
      </Section>

      <Section title="활동 이력">
        <div className="space-y-2">
          <p className="text-body-md text-secondary-600">자격증 연계 2024.01 ~ 2024.12</p>
        </div>
      </Section>

      <Section title="백 엔드, 개발 PL, 프로젝트 PM">
        <p className="text-body-md text-secondary-600">
          프로젝트의 전반적인 이해도가 높으며, 팀원들과의 원활한 소통으로 
          프로젝트를 성공적으로 이끌어낸 경험이 있습니다.
        </p>
      </Section>
    </div>
  );
}; 