export const ChatRoomListPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">채팅방 목록</h1>
      <div className="mt-6 space-y-4">
        {/* 임시 데이터 */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow p-4 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <h3 className="font-medium">프로젝트 채팅방 {item}</h3>
                <p className="text-sm text-gray-500">마지막 메시지가 표시됩니다.</p>
              </div>
              <div className="text-sm text-gray-500">
                <div>오후 2:30</div>
                <div className="mt-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 