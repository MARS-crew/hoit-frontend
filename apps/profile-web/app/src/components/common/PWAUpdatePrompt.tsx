import { useRegisterSW } from 'virtual:pwa-register/react'

export const PWAUpdatePrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log('SW Registered:', r)
    },
    onRegisterError(error: Error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setNeedRefresh(false)
  }

  if (!needRefresh) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg md:bottom-auto md:top-4 md:left-1/2 md:-translate-x-1/2 md:max-w-sm md:rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm">새로운 버전이 있습니다.</p>
        <div className="flex space-x-2">
          <button
            onClick={() => updateServiceWorker(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            업데이트
          </button>
          <button
            onClick={close}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            나중에
          </button>
        </div>
      </div>
    </div>
  )
} 