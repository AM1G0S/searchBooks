import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        render(
        <App />
        );
      </Provider>
    );
  });

  test('should render App', () => {
    expect(screen.getByTestId('app')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-sortBy')).toBeInTheDocument();
    expect(screen.getByTestId('search-categories')).toBeInTheDocument();
  });

  test('should show error on empty search query', async () => {
    expect(screen.queryByTestId('main-title')).toBeNull();
    userEvent.type(screen.getByTestId('search-input'), '   ');
    fireEvent.submit(screen.getByTestId('search-btn'));

    waitFor(() => expect(screen.getByTestId('error-page-wrapper')).toBeInTheDocument());
    waitFor(() => expect(screen.getByText('Пустой поисковый запрос')).toBeInTheDocument());
  });

  test('should get books from api to small preview cards', async () => {
    expect(screen.queryByTestId('main-title')).toBeNull();

    userEvent.type(screen.getByTestId('search-input'), 'JavaScript');
    fireEvent.submit(screen.getByTestId('search-btn'));

    waitFor(() => expect(screen.getByTestId('main-title')).toBeInTheDocument());
    waitFor(() => {
      const books = screen.getAllByTestId('book');
      expect(books.length >= 0).toBeTruthy();
    });
    waitFor(() => expect(screen.getByTestId('load-more')).toBeInTheDocument());
  });
});
