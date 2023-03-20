import './Main.scss';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Book } from '../../constants/interfaces';
import { BookPreview } from '../../components/BookPreview/BookPreview';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { getVolumesByTerms } from '../../api/api';
import {
  incrementStartIndex,
  setBooksArray,
  setErrorObject,
  setIsLoading,
} from '../../store/actions';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export const Main = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.totalItems);
  const startIndex = useAppSelector((state) => state.startIndex);
  const booksArray: Book[] = useAppSelector((state) => state.books);
  const searchValue = useAppSelector((state) => state.searchValue) as string;
  const isLoading = useAppSelector((state) => state.isLoading);

  const [paginationDisabled, setPaginationDisabled] = useState(false);

  const handleLoadMoreClick = async () => {
    dispatch(setIsLoading(true));

    try {
      const searchOptions = `&startIndex=${startIndex}`;
      const searchResults = await getVolumesByTerms(searchValue, searchOptions);

      dispatch(setBooksArray(searchResults.items));
      dispatch(incrementStartIndex());
      setPaginationDisabled(searchResults.items.length < 30);
    } catch (error) {
      if (error instanceof Error) {
        const errorObject = { title: error.name, description: error.message };

        dispatch(setErrorObject(errorObject));
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <main className="main">
      {totalItems ? (
        <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          sx={{ p: '15px' }}
          data-testid="main-title"
        >
          Found {totalItems} items
        </Typography>
      ) : null}

      <div className="cards-container">
        {booksArray.length
          ? booksArray.map((book) => {
              return <BookPreview key={book.id} {...book} />;
            })
          : null}
      </div>

      {booksArray.length && booksArray.length >= 30 ? (
        <LoadingButton
          size="medium"
          onClick={handleLoadMoreClick}
          loading={isLoading}
          variant="contained"
          disabled={paginationDisabled}
          data-testid="load-more"
        >
          Load more
        </LoadingButton>
      ) : null}

      {booksArray.length && booksArray.length >= 30 ? (
        <Fab
          variant="circular"
          onClick={() => window.scrollTo(0, 0)}
          sx={{ position: 'sticky', bottom: '75px', alignSelf: 'flex-end' }}
        >
          <NavigationIcon />
        </Fab>
      ) : null}

      {isLoading && <CircularProgress sx={{ position: 'absolute' }} />}
    </main>
  );
};

export default Main;
