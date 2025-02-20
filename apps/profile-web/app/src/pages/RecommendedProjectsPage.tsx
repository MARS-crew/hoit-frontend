export const RecommendedProjectsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">추천 프로젝트</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 임시 데이터 */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold">추천 프로젝트 {item}</h3>
            <p className="mt-2 text-gray-600">프로젝트 설명이 들어갑니다.</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">기술 스택: React, Node.js</span>
              <span className="text-sm text-gray-500">모집 인원: 3명</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 