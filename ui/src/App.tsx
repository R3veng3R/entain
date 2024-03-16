import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MoviePage } from './pages/MoviePage/MoviePage';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <MoviePage />
  </QueryClientProvider>
);
