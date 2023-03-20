import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Header', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          render(
          <Header />
          );
        </BrowserRouter>
        ;
      </Provider>
    );
  });

  test('should render Header', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-sortBy')).toBeInTheDocument();
    expect(screen.getByTestId('search-categories')).toBeInTheDocument();
  });
});
