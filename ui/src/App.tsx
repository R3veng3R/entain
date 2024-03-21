import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './components/GlobalStyles';
import { MoviePage } from './pages/MoviePage/MoviePage';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <MoviePage />
  </QueryClientProvider>
);
