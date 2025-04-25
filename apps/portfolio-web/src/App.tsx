import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold text-center py-8">
            Profile App
          </h1>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App; 