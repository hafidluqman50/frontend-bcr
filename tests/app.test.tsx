import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../src/pages/Admin/Login';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

test('renders learn react link', () => {
  const queryClient = new QueryClient()
  
  render(
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/INI TULISAN/i);
  expect(linkElement).toBeInTheDocument();
});
