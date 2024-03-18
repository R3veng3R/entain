import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <MoviePage />
  </QueryClientProvider>
);
