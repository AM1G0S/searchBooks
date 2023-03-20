import { render, screen } from '@testing-library/react';
import { BookPreview } from './BookPreview';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BOOK_ARRAY } from '../../constants/constants';

describe('BookPreview', () => {
  const book = BOOK_ARRAY[0];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          render(
          <BookPreview {...book} />
          );
        </BrowserRouter>
        ;
      </Provider>
    );
  });

  test('should render BookPreview', () => {
    expect(screen.getByTestId('book')).toBeInTheDocument();
    expect(screen.getByTestId('book-preview')).toBeInTheDocument();
    expect(screen.getByTestId('book-title')).toBeInTheDocument();
    expect(screen.getByTestId('book-category')).toBeInTheDocument();
    expect(screen.getByTestId('book-author')).toBeInTheDocument();
  });

  test('should render selected book', () => {
    expect(screen.getByText('Система модулей Java')).toBeInTheDocument();
    expect(screen.getByText('Парлог Николай')).toBeInTheDocument();
    expect(screen.getByText('Computers')).toBeInTheDocument();
  });
});
