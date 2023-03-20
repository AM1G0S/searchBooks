import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CircularProgress, Typography } from '@mui/material';
import './BookPage.scss';
import { Book } from '../../constants/interfaces';
import { PATH } from '../../constants/paths';
import { API_KEY } from '../../constants/constants';
import { getVolumeById } from '../../api/api';

export const BookPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>().id || '';
  const [bookToShow, setBookToShow] = useState<Book | null>(null);

  useEffect(() => {
    getVolumeById(params, API_KEY).then((response) => {
      if (response) {
        setBookToShow(response);
      }
    });
  }, [params]);

  return (
    <div className="main">
      {bookToShow && (
        <div className="book-page" data-testid="book-page">
          <div className="book-page__image-container" data-testid="book-page-image-container">
            <img
              src={`${bookToShow.volumeInfo.imageLinks.thumbnail}`}
              alt="book-cover"
              className="image"
            />
          </div>
          <div className="book-page__info" data-testid="book-page-info">
            <Typography className="book-page__categories" variant="h5">
              {bookToShow.volumeInfo.categories?.join(' / ')}
            </Typography>
            <Typography
              className="book-page__title"
              variant="h4"
              sx={{ fontWeight: '600', m: '15px 0' }}
            >
              {bookToShow.volumeInfo.title}
            </Typography>
            <Typography className="book-page__authors" variant="h5">
              {bookToShow.volumeInfo.authors?.join(',  ')}
            </Typography>
            <p className="book-page__description">{bookToShow.volumeInfo?.description}</p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: 'transparent',
                color: 'primary.main',
                opacity: 0.9,
                mt: '20px',
              }}
              onClick={() => navigate(PATH.BASE_URL)}
            >
              <KeyboardBackspaceIcon sx={{ fontSize: '35px' }} />
            </Button>
          </div>
        </div>
      )}

      {!bookToShow && <CircularProgress sx={{ position: 'absolute' }} />}
    </div>
  );
};
