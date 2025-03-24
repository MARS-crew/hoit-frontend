// TODO: 더미데이터, 실제 API 연동 후 삭제 예정
export const RECOMMENDED_USERS = [
  {
    id: 'piano-man',
    name: '피아노맨',
    githubUrl: 'github.com',
    linkCount: 3,
    starCount: 103,
    techStack: [
      { count: 6, tech: 'Java' },
      { count: 2, tech: 'MySQL' },
      { count: 1, tech: 'React' },
    ],
    roles: ['학생', '프리랜서'],
    position: ['B.E', 'DevOps', 'TechLeader'],
    preferences: ['새로운 사람들과의 협업', '업무 자동화', '재활용 가능한 코드'],
    description: '사용자 경험을 중요시하면서 백엔드 개발도 하는 나 김인후 다 덤벼라',
  },
  {
    id: 'hyochan-man',
    name: '효찬맨',
    githubUrl: 'github.com',
    linkCount: 4,
    starCount: 245,
    techStack: [
      { count: 8, tech: 'Python' },
      { count: 4, tech: 'Django' },
      { count: 3, tech: 'Vue' },
    ],
    roles: ['현직자', '스타트업'],
    position: ['F.E', 'PM', 'Designer'],
    preferences: ['한 페이지가 될 수 있게', 'DAY6', '집 일찍 가는 방법'],
    description: '아르다운 청춘의 한장 함께 써내려 가자 너와의 추억들로 가득 채울래 컴온!',
  },
]; 